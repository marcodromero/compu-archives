import { NavLink } from "react-router-dom";
import { 
  Window,
  Videos,
  CDGallery,
  Covers,
  MagazineList
} from "../components"
import useCatalogo from "../custom/useCatalogo";
import logo from '../assets/compu-logo.png'
import btnReturn from '../assets/btn-return.png'

export default function Catalog() {
  const {idMagazine, magazines, currentCD, currentCDNumber, currentMagazine, totalCDs, handleSelectMagazine, handleShowNextCD} = useCatalogo();
 
  return (
    <Window id="catalog">
      <div className="h-[60px] flex items-center justify-between">
        <img src={logo} className="w-[100px]" alt=""/>
        <h1 className="text-[18px] text-white text-right w-[500px]">Revistas y CD-Roms</h1>
      </div>
      
      <section className="flex flex-col md:flex-row md:justify-around">
        <MagazineList magazines= {magazines} handleSelectMagazine ={handleSelectMagazine} idMagazine={idMagazine}/>

        <section className="flex flex-col md:justify-between h-[425px] md:h-[340px]">
          <Covers urlCover={currentMagazine.cover}/>
         <div className="w-full md:w-[250px] h-[25px] border-ridge bg-[#3541ab] "></div>
        </section>

        <div className="flex flex-col justify-between  md:h-[340px]">
          <Videos src={currentMagazine.video}/>
          <CDGallery   handleShowNextCD={handleShowNextCD} currentCD={currentCD} totalCDs={totalCDs} currentCDNumber={currentCDNumber}/>
        </div>
      </section>

      <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/"><img src={btnReturn} className="zoom w-[40px] h-[40px]" alt="Volver al inicio"/></NavLink>
      </div>
    </Window>
  )
}
