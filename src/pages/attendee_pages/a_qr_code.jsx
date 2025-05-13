import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const ResponsiveQRCode = ({ value }) => {
  const [qrSize, setQrSize] = useState(600);

  useEffect(() => {
    const handleResize = () => {
      let newSize;
      if (window.innerWidth <= 600) {
        newSize = 120;
      } else if (window.innerWidth <= 1024) {
        newSize = 160;
      } else {
        newSize = 600;
      }
      console.log('Setting QR size to:', newSize);
      setQrSize(newSize);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ width: qrSize, height: qrSize, margin: '0 0 0 -3rem' }}>
      <QRCodeCanvas value={value} size={qrSize} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default ResponsiveQRCode;