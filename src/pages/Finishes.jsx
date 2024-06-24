import React from 'react'
import image1 from "../assets/finishes/16-20HeavySandFloat.png"
import image2 from "../assets/finishes/16-20MediumSandFloat.png"
import image3 from "../assets/finishes/20-30FineSandFloat.png"
import image4 from "../assets/finishes/CatFaces.png"
import image5 from "../assets/finishes/Glacier.png"
import image6 from "../assets/finishes/HeavyDash.png"
import image7 from "../assets/finishes/LightDash.png"
import image8 from "../assets/finishes/LightLace.png"
import image9 from "../assets/finishes/MediumDash.png"
import image10 from "../assets/finishes/Monterey.png"
import image11 from "../assets/finishes/RockNRoll.png"
import image12 from "../assets/finishes/SantaBarbara.png"
import image13 from "../assets/finishes/Smooth.png"
import image14 from "../assets/finishes/TunnelDash.png"
import image15 from "../assets/finishes/WetGroovedPlaster.png"

const Finishes = () => {
  const finishes = [
      {
          id: 1,
          name: "16-20 Heavy Sand Float",
          image: image1
      },
      {
          id: 2,
          name: "16-20 Medium Sand Float",
          image: image2
      },{
          id: 3,
          name: "20-30 Fine Sand Float",
          image: image3
      },
      {
          id: 4,
          name: "Cat Faces",
          image: image4
      },
      {
          id: 5,
          name: "Glacier",
          image: image5
      },
      {
          id: 6,
          name: "Heavy Dash",
          image: image6
      },
      {
          id: 7,
          name: "Light Dash",
          image: image7
      },
      {
          id: 8,
          name: "Light Lace",
          image: image8
      },
      {
          id: 9,
          name: "Medium Dash",
          image: image9
      },
      {
          id: 10,
          name: "Monterrey",
          image: image10
      },
      {
          id: 11,
          name: "Rock N Roll",
          image: image11
      },
      {
          id: 12,
          name: "Santa Barbara",
          image: image12
      },
      {
          id: 13,
          name: "Smooth",
          image: image13
      },
      {
          id: 14,
          name: "Tunnel Dash",
          image: image14
      },
      {
          id: 15,
          name: "Wet Grooved Plaster",
          image: image15
      },
  ]
  
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='font-principal font-bold text-3xl m-10'>Stucco Finishes</h1>
      <div className='w-3/4 flex justify-center flex-row flex-wrap gap-20 m-14'>
      {finishes.map(finish => (
        <div key={finish.id} className='border-2 border-solid border-amber-300 flex justify-center flex-col items-center'>
          <img src={finish.image} alt="" className='m-3'/>
          <p className='m-2 font-body font-regular'>{finish.name}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Finishes