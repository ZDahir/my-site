import { useState } from 'react';
import { sendEmail } from '../utils/emailUtils';
import { downloadVCard } from '../utils/vCardUtils'; // Import the downloadVCard function

const useSaveContact = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveContact = (fullName, phoneNumber, notes) => {
    
  
    // Send the collected information via email
    if (fullName && phoneNumber && notes) {
      setIsSaving(true);
      sendEmail(fullName, phoneNumber, notes) // Pass these three values
        .then((response) => {
          console.log('Email successfully sent!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Failed to send the email:', error);
        })
        .finally(() => {
          setIsSaving(false);
        });
    } else {
      alert("All fields are required.");
    }
  // Perform the download vCard function
  downloadVCard();

  };
  

  return {
    handleSaveContact,
    isSaving,
  };
};

export default useSaveContact;
