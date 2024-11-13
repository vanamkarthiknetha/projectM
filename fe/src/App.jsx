import { Button } from "@/components/ui/button"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

    
"use client"
 
import { Bar, BarChart } from "recharts"
 
import {  ChartContainer } from "@/components/ui/chart"



function App() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  }
  function Component() {
    return (<>
      <ChartContainer config={chartConfig} className="min-h-[1rem] max-h-56 w-56">
        <BarChart accessibilityLayer data={chartData}>
      <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>

    </>
      
    )
  }
  
  return (
    <>
      <div>
      <Button>Click me</Button>
      <Component/>
    </div>
    </>
  )
}

export default App
