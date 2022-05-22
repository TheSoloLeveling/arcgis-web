import React ,{useRef, useEffect} from 'react'
import {loadModules} from 'esri-loader'

function Map() {

    const MapEl = useRef(null)

    useEffect( () => {
        let view;

    loadModules(["esri/views/MapView", "esri/Map"], {
        css:true
    }).then(([MapView,Map]) => {

        //esriConfig.apiKey = "YOUR_API_KEY";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
          });
  
          const view = new MapView({
            map: map,
            center: [-118.805, 34.027], // Longitude, latitude
            zoom: 13, // Zoom level
            container: MapEl // Div element
          });
    }) 
    
    
    return() => {
        if (!!view) {
            view.destroy()
            view = null
        }
    }
    })

    return (
        <div style={{height:800}} ref={MapEl}>
            Map Display :
        </div>
    )
}

export default Map