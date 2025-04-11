import React, { useState } from "react";

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    consent: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Left Side - We Promise */}
        <div style={styles.leftPanel}>
          <h3 style={{ color: "#b38c2c" }}>We Promise</h3>
          <div style={styles.iconSection}>
            <p>📞 Instant Call Back</p>
            <p>🚗 Free Site Visit</p>
            <p>💰 Unmatched Price</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={styles.rightPanel}>
          <button onClick={() => setShowPopup(false)} style={styles.closeBtn}>×</button>
          <h2>EarthCon Prjects</h2>
          <p style={{ margin: "0", fontWeight: "bold" }}>
            Register Here And Avail The <span style={{ color: "red" }}>Best Offers!!</span>
          </p>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <div style={styles.inputGroup}>
              <span role="img" aria-label="flag">🇮🇳</span>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No"
                value={formData.mobile}
                onChange={handleChange}
                style={{ ...styles.input, marginLeft: 8 }}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail Address"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <div style={styles.checkboxContainer}>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <small style={styles.consentText}>
                I give my consent for the privacy policy to apply... (shortened for brevity)
              </small>
            </div>
            <button type="submit" style={styles.submitBtn}>Get Instant Call Back</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles (inline for simplicity)
const styles: Record<string, React.CSSProperties> = {
    overlay: {
        position: "fixed",
        top: 0, left: 0, width: "100%", height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 999,
        display: "flex", justifyContent: "center", alignItems: "center",
        padding: "20px",
      },
      modal: {
        backgroundColor: "#fff",
        width: "90%",
        maxWidth: "800px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        flexWrap: "wrap",
      },
      leftPanel: {
        flex: "1",
        backgroundColor: "#f9f6f1",
        padding: "20px",
        minWidth: "200px",
      },
      iconSection: {
        marginTop: "20px",
        lineHeight: "1.6",
        fontSize: "16px",
      },
      rightPanel: {
        flex: "2",
        padding: "20px",
        position: "relative",
      },
      closeBtn: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "none",
        border: "none",
        fontSize: "24px",
        cursor: "pointer",
      },
      form: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      },
      input: {
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        width: "100%",
      },
      inputGroup: {
        display: "flex",
        alignItems: "center",
      },
      checkboxContainer: {
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
        fontSize: "12px",
      },
      consentText: {
        fontSize: "11px",
        lineHeight: "1.3",
        color: "#555",
      },
      submitBtn: {
        backgroundColor: "#d1ae4b",
        color: "#fff",
        padding: "12px",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      },
};

// const styles = {
//     overlay: {
//       position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
//     },
//     popup: {
//       backgroundColor: '#005c6e', color: 'white', padding: '30px', borderRadius: '10px', width: '300px', position: 'relative'
//     },
//     input: {
//       display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: '5px', border: 'none'
//     },
//     submitBtn: {
//       width: '100%', padding: '10px', backgroundColor: 'white', color: 'white',
//       border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer'
//     },
//     closeBtn: {
//       position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer'
//     }
//   };
export default PopupForm;
