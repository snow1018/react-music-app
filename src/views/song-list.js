import React from "react";
import "../style/song-list.less";
import { List, Avatar } from 'antd';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { PageHeader } from 'antd';
import httpApi from "../api/api";

class songList extends React.Component {
  state = { SongList: [], bannerList: [] };
  async getSongList() {
    
    let keywords = this.props.history.location.state.value;
    let params = {
      keywords: keywords
    };

    const response = await httpApi.fetchSearchList(params);
    console.log(response)
    this.setState(
      {
        SongList: response.result.songs
      }
    );

  }
  componentDidMount() {
    this.getSongList()
  }

  render() {
    const {SongList} = this.state
    return (
      <div className="song-list">
        <div className="recomm-song">
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => window.history.back()}
            title="搜索结果"
          />
          <List
            itemLayout="horizontal"
            dataSource={SongList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src= {item.artists[0].img1v1Url}/>}
                  title={<a href="">{item.album.name}</a>}
                  description={<span>歌手：{item.artists[0].name}</span>}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default songList;
