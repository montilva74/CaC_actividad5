import React, { useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login'
import { VideoList } from './components/VideoList/VideoList';

const App = () => {
  const [ pagina, setPagina] = useState("login")
  return (
    <div className="container text-center">
      <div className="row">
      <div className="col-12">
        { pagina === "login" &&
          <Login onLogin={() => setPagina("playList")}></Login>
        }
        { pagina === "playList" &&
        <VideoList></VideoList>
        }
      </div>
      </div>
    </div>
  );
}

export default App;
