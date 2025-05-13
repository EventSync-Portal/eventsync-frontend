import React, { useState } from 'react';
import { ArrowLeft, Upload, ChevronDown } from 'lucide-react';
import '../../css/manager_css/branding.css'; 

function BrandingCustomization() {
  const [theme, setTheme] = useState('');
  const [logo, setLogo] = useState(null);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogo(imageUrl);
    }
  };

  const handleApprove = () => {
    console.log('Approved:', { theme, logo });
    alert('Branding approved!');
  };

  const handleReject = () => {
    setTheme('');
    setLogo(null);
    alert('Branding rejected!');
  };

  return (
    <div className="branding-container">
      <div className="branding-header">
        <button className="back-button" onClick={() => console.log('Go Back')}>
          <ArrowLeft size={20} />
        </button>
      </div>

      <h2 className="branding-title">BRANDING CUSTOMIZATION</h2>

      <div className="branding-content">
        {/* Left side */}
        <div className="branding-left">
          <div className="branding-field">
            <label>Theme:</label>
            <div className="select-wrapper">
              <select value={theme} onChange={handleThemeChange}>
                <option value="">Select theme</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <ChevronDown className="select-icon" size={18} />
            </div>
          </div>

          <div className="branding-field">
            <label>Logo:</label>
            <div className="upload-wrapper">
              <input
                type="file"
                id="logo-upload"
                accept="image/*"
                onChange={handleLogoUpload}
              />
              <label htmlFor="logo-upload" className="upload-button">
                <Upload size={18} />
                Upload
              </label>
            </div>
          </div>

          <button className="approve-button" onClick={handleApprove}>
            Approve
          </button>
        </div>

        {/* Right side */}
        <div className="branding-right">
          <label>Logo:</label>
          <div className="logo-preview">
            {logo ? (
              <img src={logo} alt="Uploaded Logo" />
            ) : (
              <div className="placeholder">
                <img
                  src="https://via.placeholder.com/150x150?text=Logo"
                  alt="Placeholder"
                />
              </div>
            )}
          </div>

          <button className="reject-button" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>

      <div className="branding-footer">
        <button className="back-menu-button" onClick={() => console.log('Back to Menu')}>
          Back to Menu
        </button>
      </div>
    </div>
  );
}

export default BrandingCustomization;
