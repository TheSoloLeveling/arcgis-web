
import './App.css';
import Header from './components/Header';
import MapT from './components/MapT';
import Footer from './components/Footer';
import Card from './components/Card';
import Table from './components/Table';
import Chart from './components/Chart';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';
import BotBar from './components/BotBar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


function App() {
  return (
    <div className="App bg-gris_gb">
      <Header/>
    <div className='grid grid-col-4 h-fit'>
      <div className="flex flex-wrap mb-2">
        <Card/>
        <Card/>
        <Card/>
        </div>
      <div className='grid grid-cols-4 gap-4'>
        <Table/>
        <MapT />
        
        <div className='bg-gris_cell border shadow mb-2 mr-2 h-min' >
        <Bar data={data}/>
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