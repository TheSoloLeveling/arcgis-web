import { Map } from '@esri/react-arcgis';
import React ,{useRef, useEffect} from 'react'

function Test() {

    return (
        <div style={{height:800}}>
           <Map
                mapProperties={{ basemap: 'arcgis-topographic' }}
                viewProperties={{
                    center: [-70, 25],
                    zoom: 4
                }}>
            </Map>
        </div>
    )
}

export default Test