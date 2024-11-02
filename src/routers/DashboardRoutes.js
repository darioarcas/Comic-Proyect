import { Route, Routes } from "react-router-dom"
import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/iu/NavBar"
import { HeroScreen } from "../components/hero/HeroScreen"

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path="/" element={<MarvelScreen />}/>
              <Route path="marvel" element={<MarvelScreen />}/>
              <Route path="dc" element={<DcScreen />}/>
              <Route path="hero/:heroeId" element={<HeroScreen />}/>
              <Route path="search" element={<SearchScreen />}/>
          </Routes>
        </div>
    </>
  )
}
