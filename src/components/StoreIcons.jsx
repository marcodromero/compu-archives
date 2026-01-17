import iconWeb from '../assets/icon-web.webp'
import iconSteam from '../assets/icon-steam.webp'
import iconGog from '../assets/icon-gog.webp'

export default function StoreIcons({cdData}) {
  const hasStore = cdData.steam || cdData.gog || cdData.website || cdData.wish;

  if(!hasStore) return <div className=" text-[12px] p-2 "><p>No se encuentra en ninguna tienda.</p></div>

  return (
    <>
      { cdData.steam &&  <a href={cdData.steam}><img src={iconSteam} className="zoom" alt="Ir a la tienda del juego en Steam"/></a> }
      { cdData.gog && <a href={cdData.gog}><img src={iconGog} className="zoom" alt="Ir a la tienda del juego en Gog.com"/></a> }
      { cdData.website && <a href={cdData.website}><img src={iconWeb} className="zoom" alt="Ir a la tienda del juego en su pagina web oficial"/></a> }
      { cdData.wish &&
         <div className=" text-[12px] p-2 "><p><a href={cdData.wish} className="zoom text-[#ffb7d5] font-bold underline">Votar</a> para llevar este juego a GOG y ayudar a preservarlo.</p></div>
      }
      {!hasStore
        && <div className=" text-[12px] p-2 "><p>No se encuentra en ninguna tienda.</p></div>
      }
    </>
  )
}
