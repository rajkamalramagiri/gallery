import React, { useState, useEffect } from 'react'
import './App.css';
import Loading from './components/Loading';
const url = 'https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // function to get data from api
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
    } catch (error) {
      setErr(true)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div >
      <h2>Initial setup</h2>
      <Loading/>
    </div>
  );
}

export default App;
