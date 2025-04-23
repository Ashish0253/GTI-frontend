import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DailyRides = {
  //id: string
  driver_name: string
  date_and_time: string
  uber_balance: string
  gti_percentage: string
  earnings: string
  cash_collected: string
  remarks: string
}
 
export const columns: ColumnDef<DailyRides>[] = [
  {
    accessorKey: "driver_name",
    header: () => <div className="text-center">Driver Name</div>,
  },
  {
    accessorKey: "date_and_time",
    header: () => <div className="text-center">Date and Time</div>,
  },
  {
    accessorKey: "uber_balance",
    header: () => <div className="text-center">Uber Balance</div>,
  },
  {
    accessorKey: "gti_percentage",
    header: () => <div className="text-center">GTI Percentage</div>,
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
    accessorKey: "cash_collected",
    header: () => <div className="text-center">GTI Percentage</div>,
  },
  {
    accessorKey: "remarks",
    header: () => <div className="text-center">GTI Percentage</div>,
  },
]
