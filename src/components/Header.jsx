import compuLogo from '../assets/logo_billi-removebg-preview.png'

export default function Header() {
  return (
    <header className='flex justify-center'>
      <img id="logo" src={compuLogo} className='w-4/5 md:w-1/5 object-contain '/>
    </header>
  )
}
