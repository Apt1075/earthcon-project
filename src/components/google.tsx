import { Link } from 'react-router-dom';
const GoogleMapEmbed = () => {
    return (
        <div style={{ width: "100%", height: "400px", textAlign: "center" }}>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.37474030999016!2d80.24564666919412!3d26.48801175028853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3738d8b41ce9%3A0xfbfc25b97d767892!2sVision%20Enclave%201!5e0!3m2!1sen!2sin!4v1743158054439!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default GoogleMapEmbed;
