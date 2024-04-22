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

function Events() {
    return (
        <main className='main-container-event'>
            <div className='main-cards-event'>
                <div className='card-inner-event-up'>
                    <h3>UPCOMING EVENTS</h3>
                    {/* <BsFillArchiveFill className='card_iicon' /> */}
                </div>
                <h1>9</h1>
            </div>
            <div className='main-cards'>
                <div className='card-inner-event'>
                    <h3>FEATURED EVENTS</h3>
                    {/* <BsFillGrid3X3GapFill className='card_iicon' /> */}
                </div>
                <h1>12</h1>
            </div>
            <div className='main-cards'>
                <div className='card-inner-event'>
                    <h3>RESPONSES</h3>
                    {/* <BsPeopleFill className='card_iicon' /> */}
                </div>
                <h1>1200</h1>
            </div>
            <div className='main-cards'>
                <div className='card-inner-event'>
                    <h3>RETENTION</h3>
                    {/* <BsMenuButtonWideFill className='card_iicon' /> */}
                </div>
                <h1>210</h1>
            </div>

<div className='charts-event'>

   
      <div style={{ width: '100%' }}>
        <h4>A demo of synchronized AreaCharts</h4>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
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
            <Line type="monotone" dataKey="uv" stroke="#5e5c61" fill="#ccc" />
          </LineChart>
        </ResponsiveContainer>
      </div>



</div>
  
    
            
        </main>
    );
}

export default Events;
