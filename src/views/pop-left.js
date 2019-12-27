import React from 'react';
import '../style/pop-left.less';

import { Drawer } from 'antd';
import { Menu, Icon } from 'antd';


import userBg from '../assets/user-bg.jpg'
import userPhoto from '../assets/user-photo.jpg'
import { Link } from 'react-router-dom';



class PopLeft extends React.Component {

  state = { visible: false, placement: 'left' };


  onClose = () => {
    let status = false
    this.props.status(status)
  };



  render() {
    const { visible } = this.props
    return (
      <div className="pop-left">
        <Drawer
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <div className="user-title" style={{ backgroundImage: `url(${userBg})` }}>
            <div className="user"><img alt="" src={`${userPhoto}`} /></div>
            <p>gone with the wind</p>
          </div>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            mode="inline"
          >
            <Menu.Item
              key="1"
            >
              <Icon type="home" />
              <span>项目主页</span>
            </Menu.Item>
            <Menu.Item
              key="2"
            >
              <Icon type="qrcode" />
              <span>扫码下载</span>
            </Menu.Item>
            <Menu.Item
              key="3"
            >
              <Icon type="setting" />
              <span>问题反馈</span>
            </Menu.Item>
            <Menu.Item
              key="4"
            >
              <Icon type="exclamation-circle" />
              <span>关于云阅</span>
            </Menu.Item>
            <Menu.Item
              key="5"
            >
              <Icon type="user" />
              <span><Link path='' to='/Login'>账号登录</Link></span>
            </Menu.Item>
            <Menu.Item
              key="6"
            >
              <Icon type="heart" />
              <span>我的收藏</span>
            </Menu.Item>
            <Menu.Item
              key="7"
            >
              <Icon type="import" />
              <span>退出应用</span>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>


    );
  }

}

export default PopLeft;
