import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Info(props) {
  const filter = props.filter;
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Število šol: {filter.length}</SheetTitle>
          <SheetDescription>
            <Table>
              <TableCaption>Seznam osnovnih šol</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ime šole</TableHead>
                  <TableHead>E-mail šole</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {props.map()}
                <TableRow>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>>
                </TableRow>
              </TableBody>
            </Table>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
