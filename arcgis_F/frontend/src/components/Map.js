import React ,{useRef, useEffect} from 'react'
import {loadModules} from 'esri-loader'

function Map() {

    const MapEl = useRef(null)

    useEffect( () => {
        let view;

    loadModules([ "esri/Map", "esri/views/MapView"], {
        css:true
    }).then(([MapView,Map]) => {

        //esriConfig.apiKey = "YOUR_API_KEY";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
          });
  
        view = new MapView({
            map: map,
            center: [-118.805, 34.027], // Longitude, latitude
            zoom: 13, // Zoom level
            container: MapEl.current // Div element
          })
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
           
        </div>
    )
}

export default Map