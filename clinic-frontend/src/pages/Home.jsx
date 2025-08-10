// -- clinic-frontend/src/pages/Home.jsx

import React from 'react'

import SpecialityPage from './SpecialityPage'
import TopDoctors from '../components/topDoctors'
import Header from '../components/headar'
import Footer from '../components/ footer'
import StatsBox from '../components/ analyse'
import { useMediaQuery } from 'react-responsive';


const Home = () => {
    const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <div>
      {/* <Header/> */}
      <SpecialityPage />
      {!isMobile && <StatsBox />}
      {!isMobile && <TopDoctors />}
      {/* <Footer /> */}

    </div>
  )
}

export default Home