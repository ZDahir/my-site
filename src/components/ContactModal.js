import React, { useState } from 'react';
import styled from 'styled-components';

const ContactModal = ({ isOpen, onClose, onSubmit }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trim the values to ensure no empty spaces are submitted
    const trimmedFullName = fullName.trim();
    const trimmedPhoneNumber = phoneNumber.trim();
    const trimmedNotes = notes.trim();

    if (trimmedFullName && trimmedPhoneNumber && trimmedNotes) {
      // Pass individual arguments instead of an object
      onSubmit(trimmedFullName, trimmedPhoneNumber, trimmedNotes);
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Share Your Contact</h2>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <label>Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </InputGroup>
          <InputGroup>
            <label>Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            />
          </InputGroup>
          <ButtonGroup>
            <button type="submit">Send</button>
            <button type="button" onClick={onClose}>No Thanks</button>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;

// Styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 10px 20px;
    cursor: pointer;
  }
`;
