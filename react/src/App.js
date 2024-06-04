
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import {path} from './ultils/path'
import { Home,Login,HouseRental, RoomRental,EstateRental,HomePage } from './pages/Public';
// import {SideBar} from './components/SideBar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= {path.HOME} element={<Home/>}>
        <Route path= {'*'} element={<HomePage/>} />

          <Route path= {path.LOGIN} element={<Login/>} />
          <Route path= {path.HOUSE_RENTAL} element={<HouseRental/>} />
          <Route path= {path.ROOM_RENTAL} element={<RoomRental/>} />
          <Route path= {path.ESTATE_RENTAL} element={<EstateRental/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
