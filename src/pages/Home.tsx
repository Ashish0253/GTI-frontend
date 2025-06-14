import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import driver from '@/assets/driver.svg'

//import { Button as ShadCNButton} from "@/components/ui/button"

import Header from '@/components/Header'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Navbar from '@/components/Navbar'
import Result from '@/components/Result'

import getDriverData from '@/utils/getDriverData'
import deleteDriverData from '@/utils/deleteDriverData'

function Home() {
  const [loading, setLoading] = useState(false)
  const [driverID, setDriverID] = useState("")
  const [driverData, setDriverData] = useState(null)
  const navigate = useNavigate();

  const handleChange = (event) => {
    setDriverID(event.target.value)

    //console.log(driverID)
  }
  
  const onSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    setDriverData(await getDriverData(driverID))

    console.log("API call made")

    
    //console.log(data)
  }

  const onClick = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    //setDriverData(await getDriverData(driverID))
    
    console.log("Delete Call Made")
    setDriverData(await deleteDriverData(driverID))

    //console.log(data)
  }
  
  useEffect(() => {
    //console.log(driverData)
    
    setLoading(false)

    if(driverData) 
      navigate(`/result/${driverID}`, { state: {driverData: driverData} });
  }, [driverData])


  return (
    <div className="Main">
      <Navbar />
      <div className="flex flex-col-reverse gap-14 md:flex-row justify-around
        items-center h-[50vh]">
        <div className="p-4 flex flex-col gap-y-4 w-full md:w-auto">
          <Header> GTI Driver Portal </Header>
          <form className="flex items-center gap-2" onSubmit={onSubmit}>
            <Input handleChange={handleChange} />
            <Button className="px-5 py-3 bg-[#4CAF50] text-white text-base border-none
        rounded-md cursor-pointer transition-colors duration-300 ease-in-out 
        hover:bg-[#45a049]" type="submit"> Submit </Button>
          </form>

          <Button className="px-5 py-3 bg-[#f44336] text-white text-base border-none
  rounded-md cursor-pointer transition-colors duration-300 ease-in-out 
  hover:bg-[#d32f2f]" onClick={onClick}> Delete Data </Button>
        </div>
        <div className="flex justify-around">
          <img src={driver} alt="Driver" width="300vw" height="auto" />
        </div>
       </div>
    
      {/* Loader Overlay */}
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bl bg-opacity-50 backdrop-blur-sm">
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

  </div>
  )
}

export default Home
