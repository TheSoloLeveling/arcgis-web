import React from 'react'
import Plot from 'react-plotly.js';

const Chart = () => {
  return (
    
    <div class="pt-3 px-3 md:pr-2" style={{height:200 }}>
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 340, height: 240, title: 'A Fancy Plot'} }
      />
    </div>
   
  )
}

export default Chart