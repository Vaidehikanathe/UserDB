import React, { PureComponent } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill } from 'react-icons/bs';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Campaigns() {
    return (
        <main className='main-container'>
            <div className='main-cards'>
                <div className='card-inner'>
                    <h3>ACTIVE</h3>
                    {/* <BsFillArchiveFill className='card_iicon' /> */}
                </div>
                <h1>29</h1>
            </div>
            <div className='main-cards'>
                <div className='card-inner'>
                    <h3>REVENUE</h3>
                    {/* <BsFillGrid3X3GapFill className='card_iicon' /> */}
                </div>
                <h1>1200</h1>
            </div>
            <div className='main-cards'>
                <div className='card-inner'>
                    <h3>RESPONSES</h3>
                    {/* <BsPeopleFill className='card_iicon' /> */}
                </div>
                <h1>800</h1>
            </div>
            <div className='main-cards'>
                <div className='card-inner'>
                    <h3>CONVERSION</h3>
                    {/* <BsMenuButtonWideFill className='card_iicon' /> */}
                </div>
                <h1>210</h1>
            </div>

<div className='charts-campaign'>

   
<AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#5e5c61" />
        </AreaChart>



</div>
  
    
            
        </main>
    );
}

export default Campaigns;
