import './App.css';
import Menu from './pages/Menu';
import AllPage from './pages/AllPage';
import FrontPage from './pages/FrontPage';
import BackPage from './pages/BackPage';
import CalendarList from './pages/CalendarList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  let week_list = [];

  for (let i = 1; i <= 16; i++) {
    week_list.push(`${i}주차`);
}

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/movies_combine" element = {<><Menu selected_element={"all"} /><CalendarList current_page={""}/></>}></Route>
          <Route path="/movies_combine/front" element = {<><Menu selected_element={"front"} /><CalendarList current_page={"/front"}/></>}></Route>
          <Route path="/movies_combine/back" element = {<><Menu selected_element={"back"} /><CalendarList current_page={"/back"}/></>}></Route>

          {
            week_list.map((week) => {
              return <>
                <Route key={`all${week}`} path={`/movies_combine/${week}`} element = {<><Menu selected_element={"all"} /><AllPage week={week}/></>}></Route>
                <Route key={`front${week}`} path={`/movies_combine/front/${week}`} element = {<><Menu selected_element={"front"} /><FrontPage week={week}/></>}></Route>
                <Route key={`back${week}`} path={`/movies_combine/back/${week}`} element = {<><Menu selected_element={"back"} /><BackPage week={week}/></>}></Route>
              </>
            })
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
