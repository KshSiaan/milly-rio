import { Button } from "@/components/ui/button";
import { PenIcon, PlusIcon, Trash2Icon } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <div className="flex-1 w-full bg-muted/50 !p-4 rounded-xl border font-poppins">
      <div className="w-full flex flex-row justify-between items-start !mb-6">
        <h3 className="text-lg font-bold">
          List of Milly & Rio Fun Activities
        </h3>
        <Button variant="gold" size="lg" className="shadow-md">
          <PlusIcon /> Add a fun activity
        </Button>
      </div>
      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead>Activity Title</TableHead>
              <TableHead>Activity description</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">3478623746</TableCell>
              <TableCell>Milly & rio Hospital Adventure</TableCell>
              <TableCell className="word-break:break-all !max-w-[20ch] text-ellipsis overflow-x-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                facere illum ut impedit quisquam error molestias maiores ullam.
                Nesciunt, ex. Perspiciatis error inventore culpa impedit.
                Expedita, nostrum! Deleniti, quaerat nemo.
              </TableCell>
              <TableCell className="text-center !space-x-2">
                <Button>
                  <PenIcon /> Edit activity
                </Button>
                <Button variant="destructive">
                  <Trash2Icon /> Delete activity
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
