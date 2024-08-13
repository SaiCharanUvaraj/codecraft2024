import Lottie from 'lottie-react';
import { Card } from "flowbite-react";


export function DomainCard(props) {
  return (
    <Card
  className="max-w-sm flex flex-col items-center"
  style={{
    backgroundColor: "transparent",
    border: "2px solid",
    borderRadius: "8px",
    borderImage: "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82) 1",
    animation: "changeGradient 10s ease-in-out infinite"
  }}
>
  <div className="w-full h-48 flex justify-center z-0">
    <Lottie animationData={props.animationData} loop={true} style={{ zIndex: 0 }} />
  </div>
  <div className="w-full h-10 flex flex-col justify-center">
    <div className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {props.title}
    </div>
  </div>
  <div className="w-full h-24 flex flex-col justify-center">
    <div className="font-normal text-gray-700 dark:text-gray-400">
      {props.description}
    </div>
  </div>
</Card>
  )
}

export default DomainCard
