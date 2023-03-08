// import Contact from '../components/Contact/Contact'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar/Navbar'
// import About from './sections/About/About'
// import Awards from './sections/Awards/Awards'
// import Cheif from './sections/Cheif/Cheif'
// import FindUs from './sections/Find/FindUs'
// import Gallery from './sections/Gallery/Gallery'
// import Menu from './sections/Menu/Menu'
// import Video from './sections/Video/Video'
import Contact from '../../components/Contact/Contact';
import About from '../../sections/About/About';
import Awards from '../../sections/Awards/Awards';
import Cheif from '../../sections/Cheif/Cheif';
import FindUs from '../../sections/Find/FindUs';
import Gallery from '../../sections/Gallery/Gallery';
import Menu from '../../sections/Menu/Menu';
import Video from '../../sections/Video/Video';
import Main from "../../sections/Home/Main";

const Home = () => {
  return (
    <>
        {/* <Navbar/> */}
      <Main/>
      <About/>
      <Menu/>
      <Cheif/>
      <Video/>
      <Awards/>
      <Gallery/>
      <FindUs/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default Home