import React, {useRef, useEffect, useState} from 'react'

import FeatureTable from '@arcgis/core/widgets/FeatureTable'
 
function LayerTable({view, layer}) {

    useEffect(() => {
       
        
            new FeatureTable({
                view: view,
                layer: layer,
                fieldConfigs: [{
                    name: "lang",
                    label: "language"
                },
                {
                    name: "sentiment_conf",
                    label: "confiance value"
                },
                {
                    name: "date_time",
                    label: "tweet date"
                },
            ],
                container: document.getElementById("layerTable") 
            })
        
    }, [])

    return null
}

export default LayerTable;