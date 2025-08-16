import Navbar from '../components/navbar';
import compuLogo from '../assets/compu-logo.png'
import buttonVsc from '../assets/btn-vsc.png'
import buttonComputer from '../assets/btn-computer.gif'
import Window from '../components/Window';

export default function Home() {
  return (
    <Window id="home">
    <section  className=" w-full h-full p-6 flex flex-col items-center justify-between">
      <div className='h-[400px]  flex flex-col justify-center items-center gap-4'>
         <img src={compuLogo}  />
         <Navbar />
      </div>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-3'><img src={buttonVsc} /><img src={buttonComputer} /></div>
         <a href='https://cafecito.app/lobitodev' rel='noopener' target='_blank'><img srcset='https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x' src='https://cdn.cafecito.app/imgs/buttons/button_5.png' alt='Invitame un café en cafecito.app' className='w-[150px] zoom'/></a>
      </div>
     
    </section>

   </Window>
  )
}
