import Header from './Header';
// import Description from './Description';
import '../styles/Banner.css'
import logo from "../assets/logo.png"

const Banner = () =>
    <div className='lmj-banner'>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <Header />
        {/* <Description /> */}
    </div >

export default Banner