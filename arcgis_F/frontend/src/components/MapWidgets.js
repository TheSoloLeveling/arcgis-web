import React, {useEffect, useState} from 'react'
import Home from '@arcgis/core/widgets/Home'
import ScaleBar from '@arcgis/core/widgets/ScaleBar'
import Expand from '@arcgis/core/widgets/Expand'
import Legend from '@arcgis/core/widgets/Legend'
import histogram from '@arcgis/core/smartMapping/statistics/histogram'
import Histogram from '@arcgis/core/widgets/Histogram'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import { text } from 'd3'


function MapWidgets( { view }) {

    const [h, setH] = useState(null)
    useEffect(() => {

        const layer1 = new FeatureLayer({
            url: "https://services5.arcgis.com/h7RNMTVRJXnslYDk/arcgis/rest/services/clean_february_tbcov_XYTableToPoint/FeatureServer"
          })

        histogram({
            layer: layer1,
            field: "sentiment_conf",
            normalizationType: "natural-log",
            numBins: 100
          }).then (function(histogramResult) {
            let histogramWidget = Histogram.fromHistogramResult(histogramResult);
            histogramWidget.container = document.getElementById("histo");
            setH(histogramWidget)
          }).then(function(response) {
            view.ui.add(
                h,
                "top-right"
            );
          })

        new Legend({
            view: view,
            container: document.getElementById("infoDiv")
        })
        
        view.ui.add(
            new Home({
                view: view,
            }),
            "top-left"
        );

        view.ui.add(
            new ScaleBar({
                view: view,
            }),
            "bottom-left" 
        );

        view.ui.add(
            new Expand({
                view: view,
                content: document.getElementById("infoDiv"),
                expanded: true
            }),
            "top-right"
        );
        const select = document.createElement("select","");
        select.setAttribute("class", "esri-widget esri-select");
        select.setAttribute("style", "width: 200px; font-family: 'Avenir Next'; font-size: 1em");
        
        const layers = ["Layer 1", "Layer 2", "Both Layers"]
        layers.forEach(function(element) {
            let option = document.createElement("option")
            option.innerHTML = element;
            option.value = element;
            select.appendChild(option)
        });
        
        view.ui.add(select, "bottom-right")

        select.addEventListener('change', (event) => {          
            if(event.target.value == "Layer 1"){
                view.map.findLayerById("layer1").visible = true
                view.map.findLayerById("layer2").visible = false
            }
                
            if(event.target.value == "Layer 2"){
                view.map.findLayerById("layer2").visible = true
                view.map.findLayerById("layer1").visible = false
            }
            if(event.target.value == "Both Layers") {
                view.map.findLayerById("layer2").visible = true
                view.map.findLayerById("layer1").visible = true
            }
               
        });
        }, []);

        

         
  return null
};

export default MapWidgets;
