import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined,BankOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
const items = [
  {
    label: 'Trang Chủ',
    key: 'mail',
    icon: <HomeOutlined />,
  },
  {
    label: 'Bank',
    key: 'app',
    icon: <BankOutlined />,
    //disabled: true,
  },
  {
    label: 'Bank 2',
    key: 'SubMenu2',
    icon: <BankOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Bank 3',
    key: 'SubMenu3',
    icon: <BankOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  // {
  //   key: 'alipay',
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  // },
];

  return <Menu 
  onClick={onClick} 
  selectedKeys={[current]} 
  mode="horizontal" 
  items={items} 
  />;
};
export default Header;