import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const RecenterMap = ({ latlng }) => {
  const map = useMap();

  useEffect(()=>{
    if(latlng){
       map.setView(latlng, 13); 
    }
  },[])
  return null
}

export default RecenterMap