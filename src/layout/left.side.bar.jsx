import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Image, Layout, Menu } from 'antd';
import RightSide from './right.side.data';
import myIcon from '../assets/icon1.png'; // Đường dẫn tới file SVG của bạn

const { Sider, Content } = Layout;

const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1',
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2',
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label: 'Option 3',
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
          },
        ],
      },
    ],
  },
];

const LeftSideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Left Sidebar */}
      <Sider collapsible collapsed={collapsed}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            margin: 16,
          }}
        >
          {collapsed ? 
           <MenuUnfoldOutlined /> 
          //<img src={myIcon} alt="custom icon" style={{ width: 32, height: 32 }} />
          : 
          <MenuFoldOutlined />
          //<img src={myIcon} alt="custom icon" style={{ width: 32, height: 32 }} />

          }
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </Sider>

      {/* Right Content */}
      <Layout>
        <Content style={{ padding: '24px' }}>
          <RightSide />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LeftSideBar;
