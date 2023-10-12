
import './App.css';
import Chart from 'chart.js/auto';
import { useRef, useState, useEffect } from 'react';
import { Bar, PolarArea, getElementAtEvent } from 'react-chartjs-2';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function App() {
  const chartRef = useRef();
  const polarRef = useRef();
  const [toggle, setToggle] = useState(false);
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
  }
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    {
      field: 'col1', renderHeader: () => (
        <strong>
          {'Tag Name '}
          <span className='.tagName'>
            <ion-icon name="pricetag-outline"></ion-icon>
          </span>
        </strong>
      ), width: 150
    },
    {
      field: 'col2', renderHeader: () => (
        <strong>
          {'comments '}
          <span className='.tagName'>
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
          </span>
        </strong>
      ), width: 150
    },
  ];


  return (
    <div className="App">
      <div className="container">
        <div className={`navigation ${toggle ? 'active' : ''}`} >
          <ul>
            <li>
              <a href='#'>
                <span className="icon">
                  <ion-icon name="logo-apple"></ion-icon>
                </span>
                <span className="title">
                  BrandName
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="title">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className="icon"><
                  ion-icon name="person-outline"></ion-icon>
                </span>
                <span className="title">
                  Customers
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className="icon">
                  <ion-icon name="chatbubble-outline"></ion-icon>
                </span>
                <span className="title">
                  Messages
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className="icon">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                <span className="title">
                  HelpCentre
                </span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span className="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="title">
                  Settings
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* topbar */}
        <div className={`main ${toggle ? 'active' : ''}`}>
          <div className="topbar">
            <div className="toggle">
              <ion-icon name="menu-outline" onClick={() => {
                setToggle(prev => !prev)
              }}></ion-icon>
            </div>
            <div className="search">
              <label htmlFor="">
                <input type="text" placeholder='search here' />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>
          </div>
          {/* cardbox */}
          <div className="cardbox">
            <div className="card">
              <div>
                <div className="numbers">
                  1,504
                </div>
                <div className="cardName">
                  DailyViews
                </div>
              </div>
              <div className="iconBox">
                <ion-icon name="eye-outline">

                </ion-icon>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  $5,694
                </div>
                <div className="cardName">
                  Sales
                </div>
              </div>
              <div className="iconBox">
                <ion-icon name="cash-outline"></ion-icon>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  80
                </div>
                <div className="cardName">
                  Orders
                </div>
              </div>
              <div className="iconBox">
                <ion-icon name="rocket-outline"></ion-icon>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="numbers">
                  284
                </div>
                <div className="cardName">
                  Comments
                </div>
              </div>
              <div className="iconBox">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
            </div>
          </div>
          {/* details */}
          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>Acquisitions</h2>
                <a href="#" class="btn">View All</a>
              </div>
              <Bar
                ref={chartRef}
                onClick={onClick}
                datasetIdKey='id'
                data={{
                  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
                  datasets: [{
                    label: 'Acquisitions by year',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 205, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                      'rgb(255, 99, 132)',
                      'rgb(255, 159, 64)',
                      'rgb(255, 205, 86)',
                      'rgb(75, 192, 192)',
                      'rgb(54, 162, 235)',
                      'rgb(153, 102, 255)',
                      'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                  }],
                }}
              />
            </div>
            {/* new cutomers */}
            <div className="recentCustomer">
              <div className="cardHeader">
                <h2>Polar Chart</h2>
              </div>
              <div className="dataGrid">
                <PolarArea
                  ref={polarRef}
                  onClick={onClick}
                  datasetIdKey='id-polar'
                  data={{
                    labels: [
                      '2019',
                      '2020',
                      '2021',
                      '2022',
                      '2023'
                    ],
                    datasets: [{
                      label: 'Acquisitions by year',
                      data: [11, 16, 7, 3, 14],
                      backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)',
                        'rgb(54, 162, 235)'
                      ]
                    }],
                  }}
                />
              </div>
            </div>
          </div>


          {/* details */}
          <div className="details details2">

            {/* new cutomers */}
            <div className="recentCustomer">
              <div className="cardHeader">
                <h2>Recent Cutomers</h2>
              </div>
              <div className="dataGrid">
                <DataGrid rows={rows} columns={columns} />
              </div>
            </div>
            <div className="recentOrders">
              <div className="cardHeader">
                <h2>Recent Orders</h2>
                <a href="#" class="btn">View All</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Payment</td>
                    <td>Status</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Casual Shoes</td>
                    <td>$110</td>
                    <td>paid</td>
                    <td><span className='status pending'>Pending</span></td>
                  </tr>
                  <tr>
                    <td>ipad</td>
                    <td>$900</td>
                    <td>Due</td>
                    <td><span className='status inprogress'>Inprogress</span></td>
                  </tr>
                  <tr>
                    <td>ipad</td>
                    <td>$1200</td>
                    <td>paid</td>
                    <td><span className='status delivered'>Delivered</span></td>
                  </tr>
                  <tr>
                    <td>Watch</td>
                    <td>$500</td>
                    <td>Due</td>
                    <td><span className='status inprogress'>In progress</span></td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>$2000</td>
                    <td>paid</td>
                    <td><span className='status return'>Return</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>


        </div>
      </div>








    </div>
  );
}

export default App;
