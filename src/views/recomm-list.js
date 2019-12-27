import React from "react";
import "../style/recomm-list.less";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { PageHeader } from 'antd';
import httpApi from "../api/api";

class recommList extends React.Component {
  state = { recommSongList: [], bannerList: [] };


  async getSongList() {
    
    const response = await httpApi.fetchSongList();
    if (response.code == "200") {
    this.setState(
      {
        recommSongList: response.result
      }
    );
    }
  }
  componentDidMount() {
    this.getSongList()
  }

  render() {
    const { recommSongList } = this.state;

    return (
      <div className="recommList">
        <div className="recomm-song">
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => window.history.back()}
            title="歌曲推荐"
          />
          <ul>
            {
              recommSongList.map(value => (

                <li className="recomm-item" key={value.id}>
                  
                  <Link to={{pathname: "/playList", state:{id: value.id} }}>
                    
                    <dl>
                      <dt style={{ backgroundImage: `url(${value.picUrl})` }}></dt>
                      <dd>{value.name}</dd>
                    </dl>
                  </Link>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
    );
  }
}

export default recommList;
