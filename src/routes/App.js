import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { Header } from '../components/Layout';
import { footerText } from '../utils/config';
import styles from './App.less';

const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
    sidebarMode: 'inline',
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      sidebarMode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100%' }}>
        <Header />
        <Layout>
          <Layout.Sider
            width={200}
            breakpoint="lg"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{ background: '#fff' }}
          >
            <Icon className={styles.trigger} type="menu-unfold" onClick={this.toggle} />
            <Menu
              mode={this.state.sidebarMode}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text" >subnav 1</span></span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" /><span className="nav-text" >subnav 2</span></span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" /><span className="nav-text" >subnav 3</span></span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Layout.Sider>
          <Layout style={{ padding: '0 16px 0' }}>
            <Breadcrumb style={{ margin: '8px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout.Content
              style={{ background: '#fff', minHeight: 300 }}
            />
            <Layout.Footer style={{ padding: '0', textAlign: 'center', color: '#000', height: '32px', lineHeight: '32px' }}>
              {footerText}
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(App);
