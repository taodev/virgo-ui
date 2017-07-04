import React from 'react';
import { Layout, Menu } from 'antd';
// import { logo } from '../../utils/config';
import styles from './Header.less';

class Header extends React.Component {
  render() {
    return (
      <Layout.Header style={{ padding: '0 0', height: '48px' }}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="VirgoUI-Logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '48px' }}
        >
          <Menu.Item key="1">数据中心</Menu.Item>
          <Menu.Item key="2">客服中心</Menu.Item>
          <Menu.Item key="3">运维中心</Menu.Item>
          <Menu.Item key="4">管理中心</Menu.Item>
        </Menu>
      </Layout.Header>
    );
  }
}

Header.propTypes = {
};

export default Header;
