import './Header.css'

const Header = () => {
  return (
    <div>
       <span onClick={() => window.scroll(0,0)} className='header'>🎬 MOVIE HUB 🎥</span>
    </div>
  )
}

export default Header
