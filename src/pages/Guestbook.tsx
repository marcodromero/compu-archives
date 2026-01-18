import { NavLink } from 'react-router-dom';
import { Window, Header } from '../components';
import btnReturn from '../assets/btn-return.webp';

export default function Guestbook() {
  return (
    <Window id='guestbook'>
      <Header title='Libro de visitas' />
      <section>
        <iframe
          title='Libro de visitas'
          src='https://guestbooks.meadow.cafe/guestbook/857'
          className=' w-full h-full min-h-[530px] md:min-h-[340px] md:h-[340px] border-ridge'
        ></iframe>
      </section>
      <div className='h-[60px] flex items-center justify-end'>
        <NavLink to='/'>
          <img
            src={btnReturn}
            className='tiny-zoom  w-[40px] h-[40px]'
            alt='Ir a la página de inicio'
          />
        </NavLink>
      </div>
    </Window>
  );
}
