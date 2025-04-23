import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type WeeklyRides = {
  //id: string
  week: string
  earnings: string
  cash_collected: string
  refunds_and_tolls: string
  uber_balance: string
}
 
export const columns: ColumnDef<DailyRides>[] = [
  {
    accessorKey: "week",
    header: () => <div className="text-center">Week</div>,
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
    header: () => <div className="text-center">Cash Collected</div>,
  },
  {
    accessorKey: "refunds_and_tolls",
    header: () => <div className="text-center">Refunds and Tolls</div>,
  },
  {
    accessorKey: "uber_balance",
    header: () => <div className="text-center">Uber Balance</div>,
  },
]
