// components/PopupForm.js
import React, { useState, useEffect } from 'react';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(true); // Auto-show on load
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(false);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;
  return (
    <div style={{
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#005c6e',
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        width: '300px',
        position: 'relative' as const
      }}>
        <button onClick={handleClose} style={{
          position: 'absolute' as const,
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer'
        }}>×</button>
        <h3 style={{ marginBottom: '20px' }}>GET MORE DETAILS</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={styles.input} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
          <input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} style={styles.input} />
          <button type="submit" style={styles.submitBtn}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
  },
  popup: {
    backgroundColor: '#005c6e', color: 'white', padding: '30px', borderRadius: '10px', width: '300px', position: 'relative'
  },
  input: {
    display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: 'none'
  },
  submitBtn: {
    width: '100%', padding: '10px', backgroundColor: 'white', color: 'black',
    border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer'
  },
  closeBtn: {
    position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer'
  }
};

export default PopupForm;
