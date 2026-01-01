import { Routes, Route, useLocation, Link, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LenisProvider } from './contexts/LenisProvider';

import ScrollToTop from './components/ScrollToTop';

import PageWrapper from './components/PageWrapper';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar'
import Footer from './components/Footer';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import PhilosophyPage from './pages/philosophy';
import WorksPage from './pages/works';
import ProjectPage from './pages/project';
import PrivacyPolicyPage from './pages/privacyPolicy';
import ToSPage from './pages/tos';



function MainLayout(){
  return(
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

function App() {
  const location = useLocation();

  return (
    <LenisProvider>
      <NavBar color='#D8C8A5'/>
      <AnimatePresence mode="wait">
        {/* <ScrollToTop/> */}
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout/>}>
            <Route path="/"           element={<PageWrapper><HomePage /></PageWrapper>}/>
            <Route path="/about"      element={<PageWrapper><AboutPage /></PageWrapper>}/>
            <Route path="/contact"    element={<PageWrapper><ContactPage /></PageWrapper>}/>
            <Route path="/philosophy" element={<PageWrapper><PhilosophyPage /></PageWrapper>}/>
            <Route path="/works"      element={<PageWrapper><WorksPage /></PageWrapper>}/>
            <Route path="/works/:id"  element={<PageWrapper><ProjectPage /></PageWrapper>} />

            <Route path="/privacy-policy"     element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
            <Route path="/terms-of-service"   element={<PageWrapper><ToSPage /></PageWrapper>} />
          </Route>
        </Routes>
      </AnimatePresence>

    </LenisProvider>
  );
}

export default App;
