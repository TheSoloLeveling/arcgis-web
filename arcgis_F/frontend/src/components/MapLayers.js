import React, {useRef, useEffect, useState} from 'react'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import LayerTable from './LayerTable'

 function MapLayers({view, template ,url, id}) {
    
    const [layer, setLayer] = useState(null)
    
    useEffect(() => {
        
        setLayer(new FeatureLayer({
            url: url,
            popupTemplate: template,
            id: id
        }))
    }, [])

    useEffect(() => {
        if(layer)
            view.map.add(layer)    
    }, [layer])
    

    return (
        <div>
            {layer && (layer.id == "layer2") && <LayerTable view={view} layer={layer}> </LayerTable>}
        </div>
    ) 
     
}

export default MapLayers