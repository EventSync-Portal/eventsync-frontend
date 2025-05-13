// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
// import '../../css/manager_css/scanner.css';

// function QRScanner() {
//   const [scanResult, setScanResult] = useState(null);
//   const [cameraReady, setCameraReady] = useState(false);
//   const [error, setError] = useState('');

//   const fakeDatabase = {
//     'VALID-123': {
//       name: 'Ayanda Nkosi',
//       email: 'ayanda@example.com',
//       eventName: 'Tech Expo 2025',
//       location: 'TUT eMalahleni Campus Hall',
//       used: false,
//     },
//     'EXPIRED-999': { used: true },
//   };

//   const handleScan = (data) => {
//     if (data) {
//       try {
//         const parsed = JSON.parse(data);
//         const record = fakeDatabase[parsed.code];

//         if (record && !record.used) {
//           setScanResult(record);
//           setError('');
//         } else {
//           setScanResult(null);
//           setError('❌ QR Code is used or expired.');
//         }
//       } catch (e) {
//         setScanResult(null);
//         setError('❌ QR content is not valid JSON.');
//       }
//     }
//   };

//   return (
//     <div className="qrscanner-container">
//       <h2>QR Scanner</h2>

//       <div className="qrscanner-preview">
//         {!cameraReady && <p>🎥 Loading camera...</p>}

//         <QrReader
//           constraints={{ facingMode: 'user' }} // ✅ Use front camera for laptop
//           onResult={(result, error) => {
//             if (!cameraReady) setCameraReady(true);
//             if (result?.text) handleScan(result.text);
//           }}
//           videoStyle={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             display: cameraReady ? 'block' : 'none',
//           }}
//         />
//       </div>

//       {scanResult && (
//         <div className="qrscanner-success">
//           <h3>✅ Attendee Verified</h3>
//           <p><strong>Name:</strong> {scanResult.name}</p>
//           <p><strong>Email:</strong> {scanResult.email}</p>
//           <p><strong>Event:</strong> {scanResult.eventName}</p>
//           <p><strong>Location:</strong> {scanResult.location}</p>
//         </div>
//       )}

//       {error && <p className="qrscanner-error">{error}</p>}
//     </div>
//   );
// }

// export default QRScanner;
