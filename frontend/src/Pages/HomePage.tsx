// import React from 'react'
import landingImage from "../assets/app.jpg"
import appLoadlabdImage from "../assets/ios.jpg"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 ">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-green-600">
                Welcome to Mac-Eche Eat
            </h1>

            <span className="text-xl">Food is just a click away</span>
            <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4  text-center">
                 <span className="font-bold text-3xl tracking-tighter">
                  Order takeaway even faster!
                 </span>
                 <span>download the AvatarfateEat App for more faster ordering and personalised recommendatons</span>
                 <img src={appLoadlabdImage} className="w-20 h-20" />
            </div>

            </div>
           

        </div>
      
    </div>
  )
}
