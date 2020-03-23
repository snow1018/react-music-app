import React from "react";
import "../style/daily-recomm.less";
import { Carousel } from "antd";
import { createFromIconfontCN,AreaChartOutlined,DotChartOutlined,PieChartOutlined,LineChartOutlined } from '@ant-design/icons';
import { BrowserRouter, Route, Link } from "react-router-dom";
// import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import httpApi from "../api/api";

class DailyRecomm extends React.Component {
  state = { recommSongList: [], bannerList: [] };

  async getBannerList() {

    const response = await httpApi.fetchBannerList();
    if (response.code == "200") {
      this.setState({
        bannerList: response.banners
      });
    }
  }
  async getSongList() {
    let params = {
      limit: 6
    }
    const response = await httpApi.fetchSongList(params);
    if (response.code == "200") {
      this.setState({
        recommSongList: response.result
      });
    }
  }
  componentDidMount() {
    this.getSongList()
    this.getBannerList()
  }

  render() {
    const { recommSongList, bannerList } = this.state
    return (
      <div className="daily-recomm">
        <Carousel className="banner" autoplay>
          {

            bannerList.map(value => (
              <div key={value} >
                <h3 className="banner-item" style={{ backgroundImage: `url(${value.imageUrl})` }}>  </h3>
              </div>

            ))
          } 

        </Carousel>
        <div className="icon-list">
          <dl>
            <dt>
              <AreaChartOutlined  />
            </dt>
            <dd>私人FM</dd>
          </dl>
          <dl>
            <dt>
              <DotChartOutlined />
            </dt>
            <dd>每日歌曲推荐</dd>
          </dl>
          <dl>
            <dt>
            <PieChartOutlined />
            </dt>
            <dd>云音乐新歌榜</dd>
          </dl>
        </div>
        <div className="recomm-song">
          <h3>
            {/* <LineChartOutlined /> */}
            歌曲推荐 <span><Link path='' to='/recommList'>更多</Link>></span>
          </h3>
          <ul>
            {
              recommSongList.map(value => (
                <li className="recomm-item" key={value.id} >
                  <dl>
                    <dt style={{ backgroundImage: `url(${value.picUrl})` }}></dt>
                    <dd>{value.name}</dd>
                  </dl>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    );
  }
}

export default DailyRecomm;
