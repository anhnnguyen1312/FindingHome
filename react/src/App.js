
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import {path} from './ultils/path'
import { Home,Login } from './pages/Public';
function App() {
  return (
    <Router>
      <Routes>
        <Route path= {path.HOME} element={<Home/>}>
          <Route path= {path.LOGIN} element={<Login/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
