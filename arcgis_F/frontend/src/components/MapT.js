import React, {useRef, useEffect, useState} from 'react'
import Map from "@arcgis/core/Map"
import MapView from "@arcgis/core/views/MapView"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import MapWidgets from './MapWidgets'
import MapGraphics from './MapGraphics'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import MapLayers from './MapLayers'
function MapT() {

    const mapRef=useRef(null)
    const [view, setView]=useState(null)

    const template1 = {
      title: "Sentiments Details",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "OBJECTID",
              label: "ID"
            },
            {
              fieldName: "sentiment_label",
              label: "Sentiment status"
            },
            {
              fieldName: "GiZScoreFixed724391",
              label: "Score GIZ"
            },
          ]      
        },
        {
          type: "text",
          text: '<h2><b> Website :</b><h2> <h3> online student content</h3> '
        }
      ],      
    }
    const template2 = {
      title: "Tweet Details",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "lang",
              label: "tweet language"
            },
            {
              fieldName: "date_time",
              label: "tweett date"
            },
            {
              fieldName: "gender_label",
              label: "gender"
            },
            
          ]      
        },
        {
          type: "text",
          text: '<h2><b> Website :</b><h2> <h3> online student content</h3> '
        }
      ],      
    }


    useEffect(() => {
      
      new MapView({
        container: "mapRef",
        map: new Map({
            basemap: "dark-gray-vector",
        }),
        zoom: 3,
      }).when((view) => setView(view));

    }, []);
    
    return (
      
        <div className='col-span-2 col-start-2 border shadow' style={{height:800}} id={"mapRef"}> 
        <div id='infoDiv'></div>
          {view && 
            <>
              <MapWidgets view={view}></MapWidgets>
              <MapLayers id={"layer1"} view={view} template={template1} url={"https://services5.arcgis.com/h7RNMTVRJXnslYDk/arcgis/rest/services/clean_february_tbcov_XYTableToPoint_OptimizedHotSpotAnalysis2/FeatureServer"}></MapLayers>
              <MapLayers id={"layer2"} view={view} template={template2} url={"https://services5.arcgis.com/h7RNMTVRJXnslYDk/arcgis/rest/services/clean_february_tbcov_XYTableToPoint/FeatureServer"}></MapLayers>
            </>
          }

        </div>
    )
}

export default MapT
