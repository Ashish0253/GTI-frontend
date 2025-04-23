import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { keyMapping } from '@/utils/mappings'
 
export default function TableDemo({title, data}) {
  return (
    <Table className="border-2 rounded-full">
      <TableHeader className="font-semibold">
        <TableRow>
          {Object.keys(data[0]).map((key) => {
            return <TableHead className="text-center">
              {keyMapping[key]}
            </TableHead>
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((rowData) => (
          <TableRow key={rowData.title}>
          {Object.keys(rowData).map((key) => {
            return <TableCell className="">{rowData[key]}</TableCell>

          })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
