import { useParams } from "react-router-dom";
import cds  from "../data/cds";
import Window from "../components/Window";
import { useState } from "react";
import logo from '../assets/compu-logo.png'
import btnReturn from '../assets/btn-return.png'
import { NavLink } from "react-router-dom";
import iconWeb from '../assets/icon-web.png'
import iconSteam from '../assets/icon-steam.png'
import iconGog from '../assets/icon-gog.png'
import arrowRight from '../assets/static-red-arrow-right.png'
import arrowLeft from '../assets/static-red-arrow-left.png'


export default function CD() {
  const { code } = useParams();
  const cdData = cds.find(cd => cd.code === code);
  const [index, setIndex] = useState(0)

  const images = cdData.images ? cdData.images : [];
  const lastIndex = images.length - 1;

  function handleClickNext(){
    (index < lastIndex) ? setIndex(index + 1) : setIndex(0)

  }
  function handleClickBack(){
    (index > 0) ? setIndex(index - 1) : setIndex(lastIndex)
  }

  return (
     <Window id="cd">
        <div className="h-[60px] flex items-center justify-between">
            <img src={logo} className="w-[100px]"/>
            <h1 className="text-[18px] text-white text-right w-[500px]">{cdData.title}</h1>
        </div>
        <section className="flex text-white flex-col md:flex-row md:justify-between " >
          <section className="flex flex-col w-full md:w-[370px] h-[340px] border-ridge bg-box">
            <h1 className="bg-black text-amber-300 font-bold text-12px text-center">Galeria de imágenes</h1>
            <div>
              {
                cdData.images
                ? <img src={cdData.images[index]} className=" w-[370px] h-[280px] object-contain"/>
                : null
              }
              
            </div>
            <div className="flex justify-center items-center w-full h-[60px] gap-10">
              <button onClick={handleClickBack}><img src={arrowLeft} className="w-[30px] h-[20px] zoom" /></button>
              <button onClick={handleClickNext}><img src={arrowRight} className="w-[30px] h-[20px] zoom" /></button>
            </div>
          </section>
      
          <div className="flex flex-col w-full md:w-[300px] justify-between">
            <div className="flex flex-col w-full border-ridge bg-box">
              <h2  className="bg-black text-amber-300 font-bold text-[12px] text-center">Contenido del CD-ROM</h2>
              <ul className=" w-full h-[230px] ">
                {
                  cdData.content
                  ?(cdData.content.map((item, i)=>{
                    return(
                      <li className="text-[13px] m-2" key={i}>🔸 {item}</li>
                    )
                  }))
                  : null
                }
              </ul>
            </div>
            
            <div className="flex flex-col w-full border-ridge bg-box">
              <h1 className="bg-black text-amber-300 font-bold text-[12px] text-center">Tiendas oficiales</h1>
              <div className="flex gap-2 h-[48px] pl-2">

              
              {
                cdData.steam
                ? <a href={cdData.steam}><img src={iconSteam} className="zoom"/></a>
                : null     
              }
              {
                cdData.gog
                ? <a href={cdData.gog}><img src={iconGog} className="zoom"/></a>
                : null
              }
              {
                cdData.website
                ? <a href={cdData.website}><img src={iconWeb} className="zoom"/> </a>
                : null
              }
              {
                cdData.wish
                ? <div className=" text-[12px] p-2 "><p><a href={cdData.wish} className="zoom text-[#f15797] font-bold underline">Votar</a> para llevar este juego a GOG y ayudar a preservarlo.</p></div>
                : null
              }
              {
                (!cdData.steam && !cdData.gog && !cdData.website && !cdData.wish)
                ? <div className=" text-[12px] p-2 "><p>No se encuentra en ninguna tienda.</p></div>
                : null
              }
              </div>
            </div>
          </div>
    
       
      </section>
      <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/catalog"><img src={btnReturn} className="zoom  w-[40px] h-[40px]"/></NavLink>
      </div>
       
    </Window>
  )
}
