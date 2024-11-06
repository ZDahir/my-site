// src/components/TidyCalEmbed.js
import React, { useEffect, useRef } from 'react';

const TidyCalEmbed = () => {
  const embedContainer = useRef(null);

  useEffect(() => {
    // Check if the script already exists to prevent duplicate loading
    const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        console.log('TidyCal script loaded');
      };
    }

    // Directly add the data-path attribute without a wrapper
    if (embedContainer.current) {
      embedContainer.current.setAttribute("data-path", "zaidmdahir");
    }
  }, []);

  return <div ref={embedContainer} className="tidycal-embed"></div>;
};

export default TidyCalEmbed;




