import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function School(props) {
  const {
    regija,
    obcina,
    naziv,
    naslov,
    postna_stevilka,
    posta,
    email,
    ds,
    trr,
    web,
  } = props.data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{naziv}</CardTitle>
        <CardDescription>{regija}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <span className="font-bold">Naslov:</span> {naslov}, {postna_stevilka}{" "}
          {posta}
        </p>
        <p>
          <span className="font-bold">E-poštni naslov:</span>{" "}
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        // dodamo dialog button
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger>
            <Button>Več informacij</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                <p>Davčna številka: {ds}</p>
                <p>Bančni račun: {trr}</p>
                <p>
                  Spletna stran: <a href={web}>{web}</a>
                </p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
