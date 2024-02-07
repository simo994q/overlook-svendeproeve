import './globals.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FrontPage } from './Pages/FrontPage/FrontPage'
import { CitiesPage } from './Pages/CitiesPage/CitiesPage'
import { CountryPage } from './Pages/CountryPage/CountryPage'
import { RoomsPage } from './Pages/RoomsPage/RoomsPage'
import { SelectedRoomPage } from './Pages/SelectedRoomPage/SelectedRoomPage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { ReservationsPage } from './Pages/ReservationsPage/ReservationsPage'
import { ReviewPage } from './Pages/ReviewPage/ReviewPage'
import { MainLayout } from './Components/MainLayout/MainLayout'
import { HotelsPage } from './Pages/HotelsPage/HotelsPage'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<FrontPage />} />
            <Route path='/cities' element={<CitiesPage />} />
            <Route path='/countries/:country' Component={() => <CountryPage key={window.location.pathname} />} />
            <Route path='/countries/:country/:city' element={<HotelsPage />} />
            <Route path='/countries/:country/:city/:hotel' element={<RoomsPage />} />
            <Route path='/selectedroom' element={<SelectedRoomPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/reservations' element={<ReservationsPage />} />
            <Route path='/review' element={<ReviewPage />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
