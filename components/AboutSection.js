// components/AboutSection.js
import React from 'react';
import { Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const AboutSection = () => {
  return (
    <Space direction="vertical" size="large">
      <Title>About Me</Title>
      <Paragraph>
        Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. 
        I specialize in [Your Skills/Expertise].
      </Paragraph>
      <Paragraph>
        [Add more details about your background, experience, and what drives you in your work]
      </Paragraph>
    </Space>
  );
};

export default AboutSection;