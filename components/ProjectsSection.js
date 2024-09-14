// components/ProjectsSection.js
import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const ProjectsSection = () => {
  const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' },
    { title: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <div>
      <Title>My Projects</Title>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col span={8} key={index}>
            <Card title={project.title} hoverable>
              <Paragraph>{project.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsSection;