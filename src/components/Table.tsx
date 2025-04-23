import MobileTableRows from "@/components/MobileTableRows"
//import DesktopTable from "@/components/DesktopTable"
import { DataTable as DesktopTable } from "@/components/table/DataTable"
import { DataTable as MobileTable } from "@/components/table/MobileTable"



export default function Table({name, title, columns, data}) {

   return (
    <div className="py-4 px-1">
      <div className="md:hidden">
        <MobileTable data={data} title={title} />
      </div>
      <div className="md:block hidden">
        <DesktopTable columns={columns} data={data}/>
      </div>
    </div>
  )
}
