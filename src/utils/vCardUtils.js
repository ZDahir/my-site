
export const generateVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Dahir;Zaid;;;',                  
      'FN:Zaid Dahir',                      
      'ORG:BLACKBOYSCODE CHAPTER LEAD | NSBE EAST CANADA VICE CHAIR',  
      'TEL;TYPE=MOBILE:+16475096135',   
      'EMAIL:zaid.dahir@blackboyscode.com',        
      'URL:https://zaiddahir.com',     
      'item1.URL:https://www.linkedin.com/in/zaiddahir',
      'item2.URL:https://blackboyscode.ca/',
      'item1.X-ABLABEL:LinkedIn',
      'item2.X-ABLABEL:Work',
      'END:VCARD'
    ].join('\n');
  
    return vCardData;
  };
  
  // Function to trigger the vCard download
  export const downloadVCard = () => {
    const vCardContent = generateVCard();
    const blob = new Blob([vCardContent], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Zaid Dahir.vcf';
    document.body.appendChild(link);
    link.click();
  

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  