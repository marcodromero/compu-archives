import { NavLink } from "react-router-dom";
import btnRyc from '../assets/btn-ryc.png';
import btnLinks from '../assets/btn-links.png'
import btnGuestbook from '../assets/btn-guestbook.png'

export default function Navbar() {
  return (
      <nav className="w-full flex justify-center items-center gap-8 mt-2 h-[40px]">
        <NavLink to="/catalog" className="w-[186px]"><img src={btnRyc} className="zoom"/></NavLink>
        <NavLink to="/about" className="w-[186px]"><img src={btnLinks} className="zoom"/></NavLink>
        <NavLink to="/guestbook" className="w-[186px]"><img src={btnGuestbook} className="zoom"/></NavLink>
      </nav>
  )
}
