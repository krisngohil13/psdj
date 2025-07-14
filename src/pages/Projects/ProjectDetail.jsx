import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { projectsData } from './projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  
  // Try to get project from state first, if not available, find it in projectsData
  const project = state?.project || projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '1.2rem'
      }}>
        Project not found
      </div>
    );
  }

  // For now, just return the raw data as JSON for verification
  return (
    <pre style={{ 
      padding: '20px', 
      background: '#f5f5f5', 
      borderRadius: '8px',
      overflow: 'auto',
      margin: '20px'
    }}>
      {JSON.stringify(project, null, 2)}
    </pre>
  );
};

export default ProjectDetail; 