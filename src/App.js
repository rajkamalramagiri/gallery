import React, { useState, useEffect } from 'react'
import './App.css';
import Image from './components/Image';
import Loading from './components/Loading';
const url = 'https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [err, setErr] = useState(false)
  const [zoomId,setZoomId]=useState(null)

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

  // to set zoom id of clicked image
  const handleZoom = (id) => {
    setZoomId(id)
  }

  return (
    <div className="gallery">
      {loading ? (
        <Loading />
      ) : (
        data.length > 0 &&
        data.map((item) => (
          <Image
            key={item.id}
            handleZoom={handleZoom}
            zoomId={zoomId}
            {...item}
          />
        ))
      )}
      {err && <h2> Something went wrong kindly try after some time </h2>}
    </div>
  );
}


export default App;