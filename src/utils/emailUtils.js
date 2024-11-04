

import emailjs from 'emailjs-com';

export const sendEmail = (fullName, phoneNumber, notes) => {
  return emailjs.send(
    'emailJS', 
    'newContact',
    {
      fullName: fullName,
      phoneNumber: phoneNumber,
      notes: notes,
    },
    'ZhbV0hJ4nMclVtGfw'
  );
};
