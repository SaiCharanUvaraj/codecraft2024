import Lottie from 'lottie-react';
import { Card } from "flowbite-react";


export function DomainCard(props) {
  return (
    <Card
  className="max-w-sm flex flex-col items-center"
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
