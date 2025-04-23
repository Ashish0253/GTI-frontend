import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  //id: string
  driver_name: string
  uber_balance: string
  earnings: string
  gti_percentage: string
  cash_collected: string
}
 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "driver_name",
    header: () => <div className="text-center">Driver Name</div>,
  },
  {
    accessorKey: "uber_balance",
    header: () => <div className="text-center">Uber Balance</div>,
  },
  {
    accessorKey: "earnings",
    header: () => <div className="text-right">Earnings</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("earnings"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "gti_percentage",
    header: () => <div className="text-center">GTI Percentage</div>,
  },
  {
    accessorKey: "cash_collected",
    header: () => <div className="text-center">Cash Collected</div>,
  },
]
