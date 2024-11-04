import { useState } from 'react';
import { sendEmail } from '../utils/emailUtils';
import { downloadVCard } from '../utils/vCardUtils'; // Import the downloadVCard function

const useSaveContact = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveContact = (fullName, phoneNumber, notes) => {
    // Perform the download vCard function
    downloadVCard();
  
    // Send the collected information via email
    if (fullName && phoneNumber && notes) {
      setIsSaving(true);
      sendEmail(fullName, phoneNumber, notes) // Pass these three values
        .then((response) => {
          console.log('Email successfully sent!', response.status, response.text);
          alert('Your information has been sent successfully.');
        })
        .catch((error) => {
          console.error('Failed to send the email:', error);
          alert('Failed to send your information. Please try again later.');
        })
        .finally(() => {
          setIsSaving(false);
        });
    } else {
      alert("All fields are required.");
    }
  };
  

  return {
    handleSaveContact,
    isSaving,
  };
};

export default useSaveContact;
