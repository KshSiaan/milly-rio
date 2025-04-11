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
        <h3 className="text-lg font-bold">List of Milly & Rio Books</h3>
        <Button variant="gold" size="lg" className="shadow-md">
          <PlusIcon /> Add a new book
        </Button>
      </div>
      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead className="">Book Cover</TableHead>
              <TableHead>Book Title</TableHead>
              <TableHead>Book description</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">3478623746</TableCell>
              <TableCell className="">
                <div className="size-12 rounded-lg bg-zinc-300"></div>
              </TableCell>
              <TableCell>Milly & rio Hospital Adventure</TableCell>
              <TableCell className="word-break:break-all !max-w-[15ch] text-ellipsis overflow-x-hidden">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                facere illum ut impedit quisquam error molestias maiores ullam.
                Nesciunt, ex. Perspiciatis error inventore culpa impedit.
                Expedita, nostrum! Deleniti, quaerat nemo.
              </TableCell>
              <TableCell className="text-center !space-x-2">
                <Button>
                  <PenIcon /> Edit Book
                </Button>
                <Button variant="destructive">
                  <Trash2Icon /> Delete Book
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
