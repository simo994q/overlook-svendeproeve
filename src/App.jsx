import './globals.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FrontPage } from './Pages/FrontPage/FrontPage'
import { CitiesPage } from './Pages/CitiesPage/CitiesPage'
import { HotelsPage } from './Pages/HotelsPage/HotelsPage'
import { RoomsPage } from './Pages/RoomsPage/RoomsPage'
import { SelectedRoomPage } from './Pages/SelectedRoomPage/SelectedRoomPage'
import { LoginPage } from './Pages/LoginPage/LoginPage'
import { ReservationsPage } from './Pages/ReservationsPage/ReservationsPage'
import { ReviewPage } from './Pages/ReviewPage/ReviewPage'
import { MainLayout } from './Components/MainLayout/MainLayout'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<FrontPage />} />
            <Route path='/cities' element={<CitiesPage />} />
            <Route path='/hotels' element={<HotelsPage />} />
            <Route path='/rooms' element={<RoomsPage />} />
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
