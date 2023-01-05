
import './App.css';
import Nav from './components/Navbar/Nav';
import Whatwedo from './components/home/Whatwedo';
import MeetEAS from './components/home/MeetEAS';
import Howwedoit from './components/services/Howwedoit';
import Title from './components/Title/Title';
import servicesBgImg from './assets/01.jpg'
import servicesFlowImg from './assets/03.jpg'
import homeBgImg from './assets/05.jpg'
import contactBgImg from './assets/08.jpg'
import aboutBgImg from './assets/10.jpg'
import homeStrip from './assets/06.jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MeetAsh from './components/about/MeetAsh';
import Whatmakesusdiff from './components/about/Whatmakesusdiff';
import Committedtonetzero from './components/about/Committedtonetzero';
import Whereweput from './components/services/Whereweput';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Nav />

        <Routes>
          <Route path='/' element={
            <>
              <Title title="YOUR SOLUTION TO SUCCESSFUL ENERGY SAVINGS" bgImage={homeBgImg} />
              <MeetEAS />
              <img style={{ width: "100%" }} src={homeStrip} alt="" />
              <Whatwedo />
            </>
          } />
          <Route path='/about' element={
            <>

              <Title title="YOUR EASY GUIDE TO EA&S" bgImage={aboutBgImg} />
              <MeetAsh />
              <Whatmakesusdiff />
              <Committedtonetzero />
              <div style={{
                background: "linear-gradient(90deg, #2e3192 0%, #1fb25a 50%)",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                color: "white",
                height: "39vh",
                alignItems: "center",
                margin: "20px 0px"
              }}>

                <center style={{
                  width: "50%",
                  lineHeight: "30px",
                  fontSize: "19px"
                }}>IN ADDITION, WE ARE ALSO A MEMBER OF THE CLEAN ENERGY COUNCIL. THIS IS OF ENORMOUS IMPORTANCE TO US AS WE SEARCH FOR WAYS OF USING TECHNOLOGY TO REDUCE THE COMPLEXITY FOR OUR USERS. </center>
              </div>
            </>
          } />
          <Route path='/services' element={
            <>
              <Title title="HOW WE HELP YOU SAVE ENERGY AND SAVE THE ENVIRONMENT" bgImage={servicesBgImg} />
              <Whereweput />
              <Howwedoit />
              <img style={{ width: "100%" }} src={servicesFlowImg} alt="" />
            </>
          } />
          <Route path='/contact' element={
            <>

              <Title title="LET'S TALK ABOUT YOUR ENERGY GOALS AND HOW WE CAN HELP!" bgImage={contactBgImg} />
              <Contact />
            </>
          } />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
