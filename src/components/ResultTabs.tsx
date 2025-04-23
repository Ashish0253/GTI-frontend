
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Navbar from "@/components/Navbar"
import Table from "@/components/Table"
import DailyRidesTable from "@/components/DailyRidesTable"
import WeeklyRidesTable from "@/components/WeeklyRidesTable"
import { columns as paymentColumns } from "@/components/table/paymentColumns"
import { columns as dailyRidesColumns } from "@/components/table/dailyColumns"
import { columns as weeklyRidesColumns } from "@/components/table/weeklyColumns"

export default function TabsDemo({driverData, uuid}) {
  const driver_name = driverData["driver_name"]
  const gti_balance = driverData["gti_balance"]
  const driver_uuid = uuid

  const payment_data = driverData["payment_data"]

  const daily_rides_data = driverData["daily_rides_data"]

  const weekly_rides_data = driverData["weekly_rides_data"]


  return (
  <div className="flex flex-col justify-center">
    <Navbar>
      <h1 className="text-white">Driver Name - <span className="text-sm text-green-500">{driver_name}</span>
      </h1>
      <h1 className="text-white ">
        Driver UUID - <p className="text-sm text-green-500 block md:inline">{driver_uuid}</p>
      </h1>
    </Navbar>
    <div className="border-2 flex justify-center my-2 mx-4 p-2 rounded-md bg-green-500
                    md:w-1/2 md:mx-auto text-2xl text-black gap-4">
      <span>GTI BALANCE :</span>
      <span className="text-white"> &#8377;{gti_balance}</span>
    </div>
    <div className="flex justify-center p-2 md:p-10 flex-col">
      <Table name="Payment Data" title="driver_name" columns={paymentColumns} data={payment_data} />
      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <Table name="Daily Rides Data" title="date_and_time" columns={dailyRidesColumns} data={daily_rides_data}/>
        </TabsContent>
        <TabsContent value="weekly">
          <Table name="Weekly Rides Data" title="week" columns={weeklyRidesColumns} data={weekly_rides_data}/>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  )
}
