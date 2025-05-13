import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './ReportDetail.css';
import '../../css/admin_css/ReportDeatail.css';

const ReportDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="report-container">
      {/* Header */}
      <div className="report-header">
        <button className="back-button" onClick={() => navigate('/report')}>&#8592;</button>
      </div>

      {/* Main Content */}
      <div className="report-content">
        {/* Image Placeholder */}
        <div className="image-box">
          <div className="image-placeholder">🖼️</div>
        </div>

        {/* Text Content */}
        <div className="text-section">
          <h2>Graduation</h2>
          <p className="date">Date: 22 May 2025</p>
          <p>
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </p>
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect
            nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely
            queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power
            pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia
            Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
          <button className="done-button" onClick={() => navigate('/report')}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
