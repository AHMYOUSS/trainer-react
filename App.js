import * as React from 'react';
import axios from 'axios';
import './App.css';
const {useState, useEffect}= React;

const fetchRandomData= ()=> {
  return axios.get('https://randomuser.me/api')
                .then(({data}) =>{
                  return JSON.stringify(data);
                  console.log(data)
                } )
                .catch(err => {
                  console.log(err)
                })
}

function App() {
  const [count, setCount]=useState(0);
  const [randomDataJSON,setRandomDataJSON]=useState("");
  useEffect(()=> {
    fetchRandomData().then(ranadomData=> {
      setRandomDataJSON(ranadomData)
    })
  }, [])
  return (
    <div className="App" style={{backgroundColor='gray'}}>
      <h1> Welcom in React interview</h1>
      <div> {count} </div>

      <button onClick={()=> {
        setCount(count+1)
      }}> Increament Count</button>

      <button onClick={fetchRandomData}> Fetch Random Data</button>
      <div> {randomDataJSON} </div>

    </div>
  )
}

export default App
