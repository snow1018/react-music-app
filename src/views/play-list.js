import React from "react";
import "../style/play-list.less";
import { List, Avatar } from 'antd';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { PageHeader } from 'antd';
import httpApi from "../api/api";

class playList extends React.Component {
  state = { playSongList: [], bannerList: [] };
  async getPlayList() {
    let id = this.props.location.state.id;
    let params = {
      id: id
    };

    const response = await httpApi.fetchPlayList(params);
    console.log(response)
    this.setState(
      {
        playSongList: response.playlists
      }
    );

  }
  componentDidMount() {
    this.getPlayList()
  }

  render() {
    const {playSongList} = this.state
    return (
      <div className="recommList">
        <div className="recomm-song">
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => window.history.back()}
            title="歌曲推荐歌单"
          />
          <List
            itemLayout="horizontal"
            dataSource={playSongList}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src= {item.coverImgUrl}/>}
                  title={<a href="">{item.name}</a>}
                  description={item.creator.name}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default playList;
