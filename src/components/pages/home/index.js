import React from 'react'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap.css'

// Images
import Chart from '../../../assets/images/icon_chart.png'
import Filter from '../../../assets/images/icon_filter.png'
import Setting from '../../../assets/images/icon_setting.png'
import Dots from '../../../assets/images/icon_dots.png'
import Apps from '../../../assets/images/apps.png'

// Components
import AppStatusBox from '../../common/appStatusBox'

const myApps = [
  {
    name: 'TrackDemoAWE',
    status: 'sandbox'
  },
  {
    name: 'RacingDemoAdmix-2',
    status: 'off'
  },
  {
    name: 'TrackDemoAWE',
    status: 'live'
  },
  {
    name: 'RacingDemoAdmix2',
    status: 'sandbox'
  },
  {
    name: 'TrackDemoAWE',
    status: 'live'
  }
]

function Home() {
  return (
    <div className="home-content">
      <div className="header">
        <h3 className="title">Overview</h3>
        <select defaultValue="">
          <option value="">Select data</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="infos">
        <div className="info-item">
          <div className="flex">
            <div className="icon">
              <img src={Chart} alt=""/>
            </div>
            REVENUE
          </div>
          <div className="flex price">
            <span className="sm" style={{ marginBottom: '5px' }}>$</span>
            <span className="bg">510</span>
            <span className="percent-tag green">+12%</span>
          </div>
        </div>
        <div className="info-item">
          <div className="flex">
            <div className="icon">
              <img src={Chart} alt=""/>
            </div>
            IMPRESSIONS
          </div>
          <div className="flex price">
            <span className="bg">12.2<span className="sm">M</span></span>
            <span className="percent-tag green">+8%</span>
          </div>
        </div>
        <div className="info-item">
          <div className="flex">
            <div className="icon">
              <img src={Chart} alt=""/>
            </div>
            FILL RATE
          </div>
          <div className="flex price">
            <span className="bg">37.5%</span>
            <span className="percent-tag green">+4%</span>
          </div>
        </div>
        <div className="info-item">
          <div className="flex">
            <div className="icon">
              <img src={Chart} alt=""/>
            </div>
            ECPM
          </div>
          <div className="flex price">
            <span className="sm" style={{ marginBottom: '5px' }}>$</span>
            <span className="bg">2.7</span>
            <span className="percent-tag red">-5%</span>
          </div>
        </div>
      </div>

      <div className="view-all">
        <span>VIEW ALL DATA</span>
      </div>

      <div className="my-app-list">
        <div className="flex title bold">
          MY APPS
          <div className="icon-filter">
            <img src={Filter} alt=""/>
          </div>
        </div>
        {
          myApps.map((app, index) => (
            <div className="app-row" key={index}>
              <div className="left">
                <div className="flex">
                  <img className="icon-app" src={Apps} alt=""/>
                  <span className="app-name bold">{app.name}</span>
                </div>
                <div className="flex">
                  <span className="price bold">$224</span>
                  <span className="percent-tag green">16%</span>
                </div>
              </div>
              <div className="right">
                <div className="flex settings">
                  <div className="icon">
                    <Tooltip placement="top" overlay={'Edit'}>
                      <img src={Setting} alt=""/>
                    </Tooltip>
                  </div>
                  <div className="icon">
                    <Tooltip placement="top" overlay={'Edit'}>
                      <img src={Setting} alt=""/>
                    </Tooltip>
                  </div>
                  <div className="icon">
                    <Tooltip placement="top" overlay={'Edit'}>
                      <img src={Setting} alt=""/>
                    </Tooltip>
                  </div>
                </div>
                <AppStatusBox appStatus={app.status} />
                <img className="icon-dots" src={Dots} alt=""/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;