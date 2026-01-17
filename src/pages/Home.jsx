
import compuLogo from '../assets/compu-logo.png'
import buttonVsc from '../assets/btn-vsc.png'
import buttonComputer from '../assets/btn-computer.gif'
import Window from '../components/Window';
import { NavLink } from "react-router-dom";
import btnRyc from '../assets/btn-ryc.png';
import btnLinks from '../assets/btn-links.png'
import btnGuestbook from '../assets/btn-guestbook.png'

export default function Home() {
  return (
    <Window id="home">
    <section  className=" w-full h-full p-6 flex flex-col items-center justify-between gap-15 md:gap-0">
      <div className='h-[400px]  flex flex-col justify-center items-center gap-4'>
         <img src={compuLogo} className='w-7/8 md:w-[394px]' alt='Archivos compu'/>
         <nav className="w-full flex-column md:flex items-center md:gap-8 mt-2 h-[40px]">
            <NavLink to="/revistas" className="md:w-[186px] flex justify-center mb-[12px] md:mb-0" ><img src={btnRyc} className="w-2/3 h-full md:w-[186px] zoom" alt='Ingresar al catálogo de revistas'/></NavLink>
            <NavLink to="/acerca" className="md:w-[186px] flex justify-center mb-[12px] md:mb-0" alt="Ingresar a los detalles del proyecto"><img src={btnLinks} className="w-2/3 h-full md:w-[186px] zoom"/></NavLink>
            <NavLink to="/comentarios" className="md:w-[186px] flex justify-center mb-[12px] md:mb-0"><img src={btnGuestbook} className="w-2/3 h-full md:w-[186px] zoom" alt="Ingresar al libro de visitas"/></NavLink>
          </nav>
      </div>
      <div className='flex flex-col justify-center md:flex-row md:justify-between items-center w-full gap-8 md:gap-0'>
        <div className='flex items-center gap-3'><img src={buttonVsc} alt=""/><img src={buttonComputer} alt=""/></div>
         <a href='https://cafecito.app/lobitodev' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Ir a cafecito.app para hacer una donación' className='w-[150px] zoom'/></a>
      </div>
     
    </section>

   </Window>
  )
}
