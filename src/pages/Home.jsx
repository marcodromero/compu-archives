
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
         <img src={compuLogo}  />
         <nav className="w-full flex justify-center items-center gap-8 mt-2 h-[40px]">
                 <NavLink to="/catalog" className="w-[186px]"><img src={btnRyc} className="zoom"/></NavLink>
                 <NavLink to="/about" className="w-[186px]"><img src={btnLinks} className="zoom"/></NavLink>
                 <NavLink to="/guestbook" className="w-[186px]"><img src={btnGuestbook} className="zoom"/></NavLink>
               </nav>
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-3'><img src={buttonVsc} /><img src={buttonComputer} /></div>
         <a href='https://cafecito.app/lobitodev' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' className='w-[150px] zoom'/></a>
      </div>
     
    </section>

   </Window>
  )
}
