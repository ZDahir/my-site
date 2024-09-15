import React, { useEffect } from 'react';

const TidyCalEmbed = () => {
  useEffect(() => {
    // Dynamically load the TidyCal script
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tidycal-embed" data-path="zaidmdahir"></div>
  );
};

export default TidyCalEmbed;
