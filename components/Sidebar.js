// components/Sidebar.js
'use client'

import React,{useState} from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () =>{
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    const items = [
        {
            key : '/', 
            label:<Link href='/'>Home</Link>,
            icon:<MailOutlined />,
        },
        {
            key:'/about',
            label:<Link href='/about'>About</Link>,
            icon:<SettingOutlined/>,
        },
        {
            key:'/contact',
            label:<Link href='/contact'>Contact</Link>,
            icon:<AppstoreOutlined/>,
        },
        {
            key:'collapse',
            label:collapsed?'Expand':'Collapse',
            icon:collapsed?<MenuUnfoldOutlined/>:<MenuFoldOutlined/>,
            onClick:toggleCollapsed,
        },
    ];
    return (
        <div style = {{width:collapsed?80:256, transition:'0.3s'}}>
            <Menu 
            style= {{ height:'100vh'}}
            selectedKeys={[pathname]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            />
        </div>
    )
};

export default Sidebar