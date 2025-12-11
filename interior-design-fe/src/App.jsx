import { Routes, Route, useLocation, Link, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LenisProvider } from './contexts/LenisProvider';

import PageWrapper from './components/PageWrapper';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar'
import Footer from './components/Footer';

import HomePage from './pages/home';
import AboutPage from './pages/about';
import Project1Page from './pages/projects/project1';
import Project2Page from './pages/projects/project2';

function RoutesWithNavBar(){
  return(
    <>
      <NavBar color='#D8C8A5'/>
      <Outlet/>
      <Footer/>
    </>
  )
}

function RoutesWithSideBar(){
  return(
    <>
      <SideBar color='#D8C8A5'/>
      <Outlet/>
      <Footer/>
    </>
  )
}

function App() {
  const location = useLocation();

  return (
    <LenisProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route element={<RoutesWithNavBar/>}>
            <Route path="/"           element={<PageWrapper> <HomePage />    </PageWrapper>}/>
            <Route path="/about"      element={<PageWrapper> <AboutPage />    </PageWrapper>}/>
          </Route>

          <Route element={<RoutesWithSideBar/>}>
            <Route path="/project/1"  element={<PageWrapper> <Project1Page />    </PageWrapper>}/>
            <Route path="/project/2"  element={<PageWrapper> <Project2Page />    </PageWrapper>}/>
          </Route>
          
        </Routes>
      </AnimatePresence>
    </LenisProvider>
  );
}

export default App;
