import { useEffect } from "react";
import { useMap } from "react-leaflet"


const FlyToCafe = ({cafe}) => {
    const map = useMap();

    useEffect(()=>{
        if(cafe){
            map.flyTo([cafe.lat, cafe.lng], 16)
        }
    },[cafe, map]);
    
  return null
}

export default FlyToCafe