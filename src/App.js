
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress, setProgress] = useState(0);



  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color='#2549DC'
          height={4}
          // waitingTime={5000}
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route path="/about" element={<About setProgress={setProgress} />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={"in"} category={"health"} />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={"in"} category={"science"} />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={"in"} category={"sports"} />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={"in"} category={"technology"} />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={"in"} category={"business"} />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"} />} />
        </Routes>
      </BrowserRouter>
    </div>



    // <div>
    //    <NavBar/> 
    //    <News pageSize={6} country={"in"} category={"general"}/>
    // </div>
  )

}
export default App