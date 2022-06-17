
import './App.css';
import Header from './components/Header';
import MapT from './components/MapT';
import Footer from './components/Footer';
import Card from './components/Card';
import Table from './components/Table';
import Chart from './components/Chart';
import { Doughnut } from 'react-chartjs-2';
import React, {useRef, useEffect, useState} from 'react'
import BotBar from './components/BotBar';
import esriConfig from "@arcgis/core/config";
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker} from '@faker-js/faker';
import CSVLayer from '@arcgis/core/layers/CSVLayer';
import uniqueValues from '@arcgis/core/smartMapping/statistics/uniqueValues'
import histogram from '@arcgis/core/smartMapping/statistics/histogram'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function App() {
  
  useEffect(() => {
    let serverInfo = {
      "server": "https://www.arcgis.com",
      "tokenServiceUrl" : "https://www.arcgis.com/sharing/generateToken"
    }
    let userInfo = {
      username : "BOUZIANE_vmsd",
      password : "Ilyas1998&"
    }
    
    IdentityManager.generateToken(serverInfo, userInfo).then(function (response){
      response.server = serverInfo.server;
      response.userId = userInfo.username;
      IdentityManager.registerToken(response);
    });
    
  }, [])


  const [card1,setCard1] = useState(null)
  const [card2,setCard2] = useState(null)
  const [card3,setCard3] = useState(null)

  const [labelD,setLabelD] = useState([])
  const [dataD,setDataD] = useState([])
  const [data,setData] = useState(null)

  useEffect(() => {
    setData({
      labels: labelD,
      datasets: [
        {
          label: '# of tweets',
          data: dataD,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    })

    

  }, [labelD])
  
  useEffect(() => {

    const layer1 = new FeatureLayer({
      url: "https://services5.arcgis.com/h7RNMTVRJXnslYDk/arcgis/rest/services/clean_february_tbcov_XYTableToPoint/FeatureServer"
    })

    layer1.queryFeatures().then(function(response) {
     
      uniqueValues({
        layer: layer1,
        field: "continent"
      }).then(function(response){
        let regions = response.uniqueValueInfos;

        regions.forEach(function(info){
          
            setLabelD(labelD => [...labelD, info.value+" : "+ info.count])
            setDataD(dataD => [...dataD, info.count])
        })
      })
    })


    let sumTweetsPositive = {
      onStatisticField: "sentiment_label", 
      outStatisticFieldName: "positive_sum",
      statisticType: "count"
    }

    let sumTweetsNegative = {
      onStatisticField: "sentiment_label", 
      outStatisticFieldName: "negative_sum",
      statisticType: "count"
    }

    let sumTweetsNeutre = {
      onStatisticField: "sentiment_label", 
      outStatisticFieldName: "neutre_sum",
      statisticType: "count"
    }

    layer1.load().then(function() {
      let query1 = layer1.createQuery();
      query1.where = "sentiment_label = 1"
      query1.outStatistics = [sumTweetsPositive]

      let query2 = layer1.createQuery();
      query2.where = "sentiment_label = -1"
      query2.outStatistics = [sumTweetsNegative]

      let query3 = layer1.createQuery();
      query3.where = "sentiment_label = 0"
      query3.outStatistics = [sumTweetsNeutre]

      layer1.queryFeatures(query1).then(function(response) {
        let stats = response.features[0].attributes;
        console.log("Total positive tweets :", stats.positive_sum)
        setCard1(stats.positive_sum)
      })

      layer1.queryFeatures(query2).then(function(response) {
        let stats = response.features[0].attributes;
        console.log("Total negative tweets :", stats.negative_sum)
        setCard2(stats.negative_sum)
      })

      layer1.queryFeatures(query3).then(function(response) {
        let stats = response.features[0].attributes;
        console.log("Total neutral tweets :", stats.neutre_sum)
        setCard3(stats.neutre_sum)
      })
    })
  }, [])

  //{if(dataLayer) console.log(dataLayer)}
  return ( 
    <div className="App bg-gris_gb">
      <Header/> 
    <div className='grid grid-col-4 h-fit'>
      <div className="flex flex-wrap mb-2">
        {card1 && card2 && card3 &&
          <>
              <Card value={card1} text={"positive tweets"} color={"text-green-500"}/>
              <Card value={card2} text={"negative tweets"} color={"text-red-500"}/>
              <Card value={card3} text={"neutral tweets" } color={"text-blue-500"}/>
          </>
        }
        </div>
      <div className='pl-3 pr-3 grid grid-cols-4 gap-4'>
        <div className='border' id='layerTable'></div>
        <MapT />
        
        <div className='bg-gris_cell border' >
        <br></br>
          <div id='histo' style={{height: 200}}></div>
          <br></br>
          <div className='text-white text-center'>histogram of sentiment confidence for the month of february</div>
          <br></br> 
          {data && <Doughnut data={data}></Doughnut>}
          <br></br>
          <div className='text-white text-center'>Tweets distribution by Countries</div>
          <br></br>
        </div>
      </div>
      
    </div>
      <Footer/>
  </div>
  );
}

export default App;
/*<div className="App bg-gris_gb">
      <Header/>
    <div className='grid grid-col-4'>
      <div className="flex flex-wrap mb-2"><Card/><Card/><Card/></div>
      <MapT />
    </div>
      
      <Footer/>
  </div>*/