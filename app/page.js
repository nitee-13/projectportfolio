// app/page.js
'use client'

import React, { useRef, useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { UserOutlined, ProjectOutlined, MailOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const { Header, Content, Footer } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - (collapsed ? 32 : 64),
      behavior: 'smooth'
    });
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    {
      key: 'about',
      icon: <UserOutlined />,
      label: 'About',
      onClick: () => scrollToSection(aboutRef)
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: 'Projects',
      onClick: () => scrollToSection(projectsRef)
    },
    {
      key: 'contact',
      icon: <MailOutlined />,
      label: 'Contact',
      onClick: () => scrollToSection(contactRef)
    },
    {
      key: 'collapse',
      icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
      label: collapsed ? 'Expand' : 'Collapse',
      onClick: toggleCollapsed
    }
  ];

  return (
    <Layout>
      <Header 
        style={{ 
          position: 'fixed', 
          zIndex: 1, 
          width: '100%', 
          padding: 0, 
          height: collapsed ? '32px' : '64px',
          transition: 'height 0.3s'
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ 
            lineHeight: collapsed ? '32px' : '64px',
            transition: 'line-height 0.3s'
          }}
          items={menuItems}
        />
      </Header>
      <Content style={{ padding: '0 50px', marginTop: collapsed ? 32 : 64, transition: 'margin-top 0.3s' }}>
        <div ref={aboutRef} style={{ padding: '24px 0' }}>
          <AboutSection />
        </div>
        <div ref={projectsRef} style={{ padding: '24px 0' }}>
          <ProjectsSection />
        </div>
        <div ref={contactRef} style={{ padding: '24px 0' }}>
          <ContactSection />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Your Name ©{new Date().getFullYear()} Created with Next.js and Ant Design</Footer>
    </Layout>
  );
}