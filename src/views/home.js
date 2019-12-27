import React from "react";
import "../style/home.less";
import { Icon, Tabs } from "antd";
import { AutoComplete } from 'antd';
import PopLeft from "../views/pop-left";
import DailyRecomm from "../views/daily-recomm";
import httpApi from "../api/api";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1528553_cdzlv5y0gpr.js"
});

const { Option,OptGroup  } = AutoComplete;
class Home extends React.Component {
  state = {
    visible: false,
    value: '',
    SearchHot: [],
    dataSource: [],
    suggestList: []
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  changeStatus = status => {
    this.setState({
      visible: status
    });
  };
  onSearch = searchText => {

    this.setState({
      dataSource: !searchText ? [] : this.state.suggestList,
    });
  };
  onSelect = value => {
    let path = {
      pathname: '/songList',
      state: {
        value
      }
    }
    this.props.history.push(path)
  }
  onChange = value => {
    this.getSuggestList(value)
    this.setState({ value });
  };
  onFocus = () => {
    this.getSearchHot()

  };
  async getSearchHot() {

    const response = await httpApi.fetchSearchHot();

    if (response.code == "200" && this.mounted) {
      this.setState(
        {
          SearchHot: response.data
        }
      );
    }

  }
  async getSuggestList(keyword) {
    let value = keyword;
    let params = {
      limit: 5,
      keywords: value
    };

    const response = await httpApi.fetchSuggestList(params);

    // const midList=[]
    // response.result.songs.map(item=>{
    //   midList.push(item.name)
    // })
    if (response.code == "200" && this.mounted) {
      this.setState(
        {
          suggestList: response.result.songs
        }
      );
    }


  }
  renderOption1 = item => {

    return (
      <Option key={item.id} text={item.name}>
        <div className="global-search-item">

          <span className="global-search-item-count">{item.name}</span>
        </div>
      </Option>
    );
  }
  renderOption2 = item => {

    return (
        
      <Option key={item.content} text={item.searchWord}>
        <div className="global-search-item">
          <span className="global-search-item-desc">

            <span className="global-search-item-count">{item.searchWord}</span>

          </span>
        </div>
      </Option>
    );
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    const { TabPane } = Tabs;
    const { value, dataSource, suggestList, SearchHot } = this.state;

    return (
      <div className="home">
        <div className="head-wrap">
          <div className="head">
            <IconFont
              className="icon-h icon-hl"
              type="icon-mulu"
              onClick={this.showDrawer}
            />
            {/* 左侧弹框 */}
            <PopLeft status={this.changeStatus} visible={this.state.visible} />
            <div className="searchBox">

              <AutoComplete
                dataSource={!value ? SearchHot.map(this.renderOption2) : dataSource.map(this.renderOption1)}
                style={{ width: 200 }}
                onSelect={this.onSelect}
                onSearch={this.onSearch}
                onChange={this.onChange}
                onFocus={this.onFocus}
                placeholder="input here"
              />
            </div>
            <Icon className="icon-h icon-hl" type="bar-chart" />
          </div>
        </div>
        <div className="content">
          <Tabs defaultActiveKey="1">
            <TabPane tab="每日推荐" key="1">
              <DailyRecomm />
            </TabPane>
            <TabPane tab="福利" key="2">
              福利
            </TabPane>
            <TabPane tab="干货定制" key="3">
              Tab 3
            </TabPane>
            <TabPane tab="大安卓" key="4">
              大安卓
            </TabPane>
          </Tabs>

        </div>
        <Tabs className="foot-tab" defaultActiveKey="1">
          <TabPane tab="发现音乐" key="1">

          </TabPane>
          <TabPane tab="更多音乐" key="2">
          </TabPane>
          <TabPane tab="朋友" key="3">
          </TabPane>
          <TabPane tab="账号" key="4">
          </TabPane>
        </Tabs>

      </div>
    );
  }
}

export default Home;
