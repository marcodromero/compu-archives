
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
    <section  className=" w-full h-full p-6 flex flex-col items-center justify-between">
      <div className='h-[400px]  flex flex-col justify-center items-center gap-4'>
         <img src={compuLogo} className='w-7/8 md:w-[394px]'/>
         <nav className="w-full flex-column md:flex items-center gap-8 mt-2 h-[40px]">
            <NavLink to="/catalog" className="md:w-[186px] flex justify-center" ><img src={btnRyc} className="w-1/2 h-full md:w-[186px] zoom"/></NavLink>
            <NavLink to="/about" className="md:w-[186px] flex justify-center"><img src={btnLinks} className="w-1/2 h-full md:w-[186px] zoom"/></NavLink>
            <NavLink to="/guestbook" className="md:w-[186px] flex justify-center"><img src={btnGuestbook} className="w-1/2 h-full md:w-[186px] zoom"/></NavLink>
          </nav>
      </div>
      <div className='flex flex-col justify-center md:flex-row md:justify-between items-center w-full'>
        <div className='flex items-center gap-3'><img src={buttonVsc} /><img src={buttonComputer} /></div>
         <a href='https://cafecito.app/lobitodev' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' className='w-[150px] zoom'/></a>
      </div>
     
    </section>

   </Window>
  )
}
