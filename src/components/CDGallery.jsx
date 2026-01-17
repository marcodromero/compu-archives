import { useNavigate } from "react-router-dom";
import arrow from '../assets/red-arrow-right.gif'


export default function CDGallery({handleShowNextCD, currentCD, totalCDs, currentCDNumber}) {
  const navigate = useNavigate();
  return (
    <div id="cds" className="w-full  md:w-[200px] md:h-[168px] bg-blue-900 border-ridge">
      <div className="bg-black text-amber-300 font-bold text-[12px] text-center">CD-Roms</div>
      <div  className="flex flex-col justify-between  h-full md:h-[144px] items-center relative">
        {
          <button className=" w-[250px] h-[200px] md:w-[150px] md:h-[120px] flex justify-center" onClick={()=>navigate(`/cd/${currentCD.code}`)} ><img src={currentCD.preview} className=" w-[250px] h-[200px] md:w-[150px] md:h-[120px] object-contain" alt={`Portada del CD N°${currentCDNumber} que vino junto a la revista`}/>
          </button> 
        }
        {totalCDs > 1 &&
        <p className="font-bold w-[40px] text-[12px] bg-neutral-800 border-1 text-blue-400 text-center absolute top-1 right-1 rounded-full">N°{currentCDNumber}
        </p>
        }
        <div className="flex justify-center items-center w-full h-[60px] md:h-[20px]">
          {totalCDs > 1 ?
          <button onClick={handleShowNextCD} className="w-full flex justify-center"><img src={arrow} className="w-[30px] h-[20px] zoom" alt="Pasar al siguiente CD"/><img src={arrow} className="w-[30px] h-[20px] zoom" alt="" /><img src={arrow} className="w-[30px] h-[20px] zoom" alt=""/></button>:<p className="text-gray-300 font-bold">Unico CD de regalo</p>}
        </div>
      </div>
    </div>
  )
}
