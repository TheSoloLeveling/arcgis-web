import React, {useRef, useEffect, useState} from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import MapWidgets from './MapWidgets'
import MapGraphics from './MapGraphics'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

function MapT() {

    const mapRef=useRef(null)
    const [view, setView]=useState(null)

    
    useEffect(() => {
      const layer = new FeatureLayer({
        url: "https://services5.arcgis.com/h7RNMTVRJXnslYDk/arcgis/rest/services/time_series_covid19_confirmed_global/FeatureServer/0"
      });
      new MapView({
        container: mapRef.current,
        map: new Map({
            basemap: "dark-gray-vector",
            layers: [layer],
        }),
        zoom: 3,
      }).when((view) => setView(view));

    }, []);
    
    return (
      
        <div className='col-span-2 col-start-2 border shadow' style={{height:700 }} ref={mapRef}> 
          {view && 
            <>
            {console.log(view)}
              <MapWidgets view={view}/> 
              
            </>
          }
        </div>
    )
}

export default MapT
