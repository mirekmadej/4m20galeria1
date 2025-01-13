import { useState } from 'react';
import './App.css';
import Zdjecie from './Zdjecie';
import zd1 from './img/zd1.png';

const  zdjecia = [
 {id:1, grafika:zd1, opis:"zdjecie1",like:0, dislike:0},
]

function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  function flike()
  {
      setLike(like+1);
      zdjecia[0].like = like;
  }
  function fdlike()
  {
      setDislike(dislike+1);
      zdjecia[0].dislike = dislike;
  }
  return (
    <div className="App">
      <h1>Galeria</h1>
      <Zdjecie z={zdjecia[0]} />
    </div>
  );
}

export default App;
