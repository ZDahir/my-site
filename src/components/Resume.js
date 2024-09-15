import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'; 

const Resume = () => {
  
  const resumeUrl = '/Other/Zaid Dahir Resume.pdf'; 

  
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* Wrap Viewer with Worker to enable Web Worker for better performance */}
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`}>
        <div style={{ height: '100%' }}>
          {/* Use the Viewer component here */}
          <Viewer fileUrl={resumeUrl} plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
    </div>
  );
};

export default Resume;
