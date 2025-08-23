import { useEffect, useState } from "react";
import Window from "../components/Window";
import data  from "../data/data";
import { useNavigate } from "react-router-dom";
import logo from '../assets/compu-logo.png'
import btnReturn from '../assets/btn-return.png'
import { NavLink } from "react-router-dom";

import arrow from '../assets/red-arrow-right.gif'


import staticTv from '../assets/static-tv.gif'

export default function Catalog() {
  let default1 = 0 ;
  const localIndexData = localStorage.getItem("indexData");
  if(localIndexData){
         default1 = parseInt(localIndexData)
  }
  const [indexData, setIndexData] = useState(default1)
  const [indexGift, setIndexGift] = useState(0)
 
  
  const navigate = useNavigate();
  const lastIndexGifts = data[indexData].gifts.length - 1;

  function handleClickNextGift(){
    (indexGift < lastIndexGifts) ? setIndexGift(indexGift + 1) : setIndexGift(0)
  }
 

  function handleClickSetIndexData(i){
    setIndexData(i)
    setIndexGift(0)
    

  }

  function handleClickCD(code){
    navigate(`/cd/${code}`)
  }

  useEffect(() => {
    localStorage.setItem("indexData", indexData);
  }, [indexData])
  
  

 



  return (
    <Window id="catalog">
      <div className="h-[60px] flex items-center justify-between">
        <img src={logo} className="w-[100px]"/>
        <h1 className="text-[18px] text-white text-right w-[500px]">Revistas y CD-Roms</h1>
      </div>
      
      <section className="flex flex-col md:flex-row md:justify-around">
        <div className="w-full h-[340px] md:w-[200px] flex flex-col border-ridge">
            <div className="bg-black text-amber-300 font-bold text-[12px] text-center">Revistas</div>
            <div className="w-full h-full overflow-scroll  bg-white  ">
            {
              data.map((bc, i)=>{
                return (
                  <button key={`bc${bc.edition}`}  id={`bc${bc.edition}`} onClick={()=>handleClickSetIndexData(i)} className={`block text-[12px]  hover:bg-indigo-950 w-full text-left border-t-1 border-b-1 border-t-indigo-600 ${i === indexData ? "bg-indigo-950" : " bg-indigo-900" }  border-b-neutral-800 p-2 text-amber-300 `
                   } title={`Revista N° ${bc.edition}`} ><span className="bg-amber-500 text-black rounded-full px-1 font-bold" >N°{bc.edition}</span>   {bc.published} <div ><small className=" text-white">{bc.description}</small></div></button>
                )
              })
            }
            </div>
        </div>

        {/*Magazines*/}
        <section className="flex flex-col md:justify-between h-[425px] md:h-[340px]">
          <div className="flex justify-center items-center w-full md:w-[250px] h-[400px] md:h-[308px] border-ridge  bg-black">
            <img src={data[indexData].cover} className=" w-full md:w-[250px] h-full object-cover"/>
          </div>
          <div class="w-full md:w-[250px] h-[25px] border-ridge bg-[#3541ab] ">

          </div>
        </section>

        
        <div className="flex flex-col justify-between  md:h-[340px]">
        {/*Videos*/}
          <div className="w-full md:w-[200px] h-[260px] md:h-[172px] border-ridge bg-black overflow-hidden">
            <div className="bg-black text-amber-300 font-bold text-[12px] text-center">Publicidad en TV</div>
            {
              data[indexData].video?
                <video src={data[indexData].video} controls className=" md:w-[200px] md:h-[150px]">
              Tu navegador no admite el elemento video.
              </video> :
              <img src={staticTv} className="w-full  object-cover"/>
              
            }
          </div>
        {/*CD's*/}
          <div id="cds" className="w-full  md:w-[200px] md:h-[168px] bg-blue-900 border-ridge">
            <div className="bg-black text-amber-300 font-bold text-[12px] text-center">CD-Roms</div>
            <div  className="flex flex-col justify-between  h-full md:h-[144px] items-center relative">
              {
                <button className=" w-[250px] h-[200px] md:w-[150px] md:h-[120px] flex justify-center" onClick={()=>handleClickCD(data[indexData].gifts[indexGift].code)} ><img src={data[indexData].gifts[indexGift].preview} className=" w-[250px] h-[200px] md:w-[150px] md:h-[120px] object-contain"/>
                </button> 
              }
              {data[indexData].gifts.length > 1 &&
              <p className="font-bold w-[40px] text-[12px] bg-neutral-800 border-1 text-blue-400 text-center absolute top-1 right-1 rounded-full">N°{indexGift+1}
              </p>
              }
              <div className="flex justify-center items-center w-full h-[60px] md:h-[20px]">
                {data[indexData].gifts.length > 1 ?
                <button onClick={handleClickNextGift} className="w-full flex justify-center"><img src={arrow} className="w-[30px] h-[20px] zoom" /><img src={arrow} className="w-[30px] h-[20px] zoom" /><img src={arrow} className="w-[30px] h-[20px] zoom" /></button>:<p className="text-gray-300 font-bold">Unico CD de regalo</p>}
              </div>
              
            </div>
            
            
          </div>
        </div>
      </section>

      <div className="h-[60px] flex items-center justify-end">
        <NavLink to="/"><img src={btnReturn} className="zoom w-[40px] h-[40px]"/></NavLink>
      </div>
    </Window>
  )
}
