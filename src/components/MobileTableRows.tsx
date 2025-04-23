import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import {keyMapping} from '@/utils/mappings'

export default function MobileTableRows({heading, title, data}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-auto my-2"
    >
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        <CollapsibleTrigger asChild>
          <div className="cursor-pointer">
            {data[title]}
          </div>
        </CollapsibleTrigger>
      
        <CollapsibleContent className="space-y">
          <div className="px-4 py-2 font-mono text-sm ">
            <MobileTable title={title} data={data} />
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

function MobileTable({title, data}) {
  
  return (
    <div>
      {Object.entries(data).map(([key, value]) => (
      // Check if the current key matches the title, if so, skip rendering
        key !== title && key !== "id" && (
        <div key={key} className="w-auto px-4 flex flex-row justify-between">
            <span className="text-left">{keyMapping[key]}: </span>
            <span className="text-right">{value}</span>
        </div>
        )
      ))}
    </div>
  );
}

