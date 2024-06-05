import { useEffect, useState } from "react";
import School from "./School";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import Info from "./Info";

export default function App() {
  const [data, setData] = useState([]);
  const [obcine, setObcine] = useState([]);
  const [selectedObcina, setSelectedObcina] = useState("all");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  {
    /* Stati za definirat: 
    - selectedObcina
    - search */
  }

  async function getSchools() {
    const response = await fetch("http://static.404.si/grace/");
    const data = await response.json();
    setData(data);
  }

  async function getMunicipality() {
    const response = await fetch("http://static.404.si/grace/obcine/");
    const data = await response.json();
    setObcine(data);
  }

  useEffect(() => {
    getSchools();
    getMunicipality();
  }, []);

  useEffect(() => {
    setFilter(
      data
        .filter(
          (school) =>
            school.obcina == selectedObcina || selectedObcina == "all",
        )
        .filter(
          (school) =>
            school.postna_stevilka.toString().startsWith(search) ||
            search == "",
        ),
    );
  }, [selectedObcina, search, data]);

  return (
    <>
      <div className="container mb-4 mt-4">
        <div className="flex gap-4">
          {/* Ne pozabi na onValueChange event. */}
          <Select onValueChange={(value) => setSelectedObcina(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Občina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Vse občine</SelectItem>
              {obcine.map((obcina) => (
                <SelectItem value={obcina}>{obcina}</SelectItem>
              ))}
              {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse občine in jih prikazala v obliki SelectItemov. */}
            </SelectContent>
          </Select>
          <Input
            placeholder="Iskanje po poštni številki ..."
            type="number"
            onChange={(value) => setSearch(value.currentTarget.value)}
          ></Input>
          {/* Dodaj input, ki bo omogčal iskanje po poštni številki. Ne pozabi na onChange event. */}
          <Info filter={filter}></Info>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse šole in jih prikazala v obliki kartic. */}
          {/* Dodaj dva filtra: enega za filtriranje po obcini, drugega za filtriranje glede na poštno številko šole. */}
          {data
            .filter(
              (school) =>
                school.obcina == selectedObcina || selectedObcina == "all",
            )
            .filter(
              (school) =>
                school.postna_stevilka.toString().startsWith(search) ||
                search == "",
            )
            .map((school) => (
              <div>
                <School data={school}></School>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
