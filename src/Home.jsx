import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsMenuButtonWideFill } from 'react-icons/bs';

const RADIAN = Math.PI / 180;
const dataPie = [
  { name: 'A', value: 80, color: '#5e5c61' },
  { name: 'B', value: 45, color: '#ccc' },
  { name: 'C', value: 25, color: '#5e5c61' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path key="needle-path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="#none" fill={color} />,
  ];
};

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const dataBar = [
  { name: 'A', uv: 400 },
  { name: 'B', uv: 300 },
  { name: 'C', uv: 300 },
  { name: 'D', uv: 200 },
  { name: 'E', uv: 278 },
  { name: 'F', uv: 189 },
];

const colors = ['#5e5c61', '#ccc', '#5e5c61', '#ccc', '#5e5c61', '#ccc'];

function Home() {
  return (
    <main className='main-container'>
      <div className='main-cards'>
        <div className='card-inner'>
          <h3>TOTAL USERS</h3>
          <BsFillArchiveFill className='card_iicon' />
        </div>
        <h1>3000</h1>
      </div>
      <div className='main-cards'>
        <div className='card-inner'>
          <h3>ACTIVE USERS</h3>
          <BsFillGrid3X3GapFill className='card_iicon' />
        </div>
        <h1>1200</h1>
      </div>
      <div className='main-cards'>
        <div className='card-inner'>
          <h3>NEW USERS</h3>
          <BsPeopleFill className='card_iicon' />
        </div>
        <h1>120</h1>
      </div>
      <div className='main-cards'>
        <div className='card-inner'>
          <h3>RETENTION</h3>
          <BsMenuButtonWideFill className='card_iicon' />
        </div>
        <h1>210</h1>
      </div>
      <div className='charts'>
        <PieChart width={400} height={500}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={dataPie}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
          >
            {dataPie.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          {needle(value, dataPie, cx, cy, iR, oR, '#333')}
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={dataBar}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {dataBar.map((entry, index) => (
              <Cell key={`bar-cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
    </main>
  );
}

export default Home;
