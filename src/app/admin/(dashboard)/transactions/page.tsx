import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
export default function Page() {
  return (
    <>
      <div className="font-poppins text-2xl">
        <h2>Orders and transactions</h2>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2 font-poppins">
        <div className="bg-muted/50 w-full h-[200px] rounded-xl border flex flex-col justify-between items-center">
          <h2 className="text-3xl !py-4 border-b w-full text-center">
            Earning
          </h2>
          <div className="flex-1 w-full grid grid-cols-3">
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-sm">This week</p>
              <h4 className="text-5xl text-semibold">$300</h4>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-sm">This month</p>
              <h4 className="text-5xl text-semibold">$4.3k</h4>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-sm">This year</p>
              <h4 className="text-5xl text-semibold">$54k</h4>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 w-full h-[200px] rounded-xl border flex flex-col justify-between items-center font-poppins">
          <h2 className="text-3xl !py-4 border-b w-full text-center">Buyers</h2>
          <div className="flex-1 w-full grid grid-cols-3">
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-sm">This week</p>
              <h4 className="text-5xl text-semibold">30</h4>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-sm">This month</p>
              <h4 className="text-5xl text-semibold">160</h4>
            </div>
            <div className="h-full flex flex-col justify-center items-center">
              <p className="text-sm">This year</p>
              <h4 className="text-5xl text-semibold">6.5k</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min border !p-4 font-poppins">
        <Table>
          <TableHeader className="font-semibold">
            <TableRow>
              <TableHead className="">ID</TableHead>
              <TableHead>Buyer Username</TableHead>
              <TableHead>Purchased item</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">3478623746</TableCell>
              <TableCell>Raven</TableCell>
              <TableCell className="word-break:break-all !max-w-[20ch] text-ellipsis overflow-x-hidden">
                Rio T-shirt
              </TableCell>
              <TableCell className="text-center !space-x-2">
                <Button variant="gold">
                  <EyeIcon /> View details
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
