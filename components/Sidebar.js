// components/Sidebar.js
'use client'

import React,{useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  {
    key: '/',
    label: <Link href="/">Home</Link>,
    icon: <MailOutlined />,
  },
  {
    key: '/about',
    label: <Link href="/about">About</Link>,
    icon: <AppstoreOutlined />,
  },
  {
    key: '/projects',
    label: <Link href="/projects">Projects</Link>,
    icon: <SettingOutlined />,
  },
  {
    key: '/contact',
    label: <Link href="/contact">Contact</Link>,
    icon: <MailOutlined />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => { 
    setCollapsed(!collapsed)
  }
  return (
    <div 
    style={{
        width:256,
    }}>
        <Button 
        type = "primary"
        onClick={toggleCollapsed}
        style={{
            marginBottom:16,
        }}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
   
    <Menu
      selectedKeys={[pathname]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      items={items}
    /> 
    </div>
  );
};

export default Sidebar;