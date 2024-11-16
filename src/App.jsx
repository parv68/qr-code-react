 import { useState } from'react'
 import { QRCodeCanvas } from 'qrcode.react';
 
 function App() {
  const [qrCode, setQrCode] = useState("")
  const [input, setInput] = useState("")
  function handleGenerateQRCode() {
    setQrCode(input)
  }
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div>
        <input 
        onChange={(e) => setInput(e.target.value)} 
        type="text" 
        name="qr-code" 
        placeholder="Enter text for QR Code" 
        value={input}
        />
        <button disabled={input && input.trim() !== " " ? false : true} 
        onClick={handleGenerateQRCode}>Generate QR Code</button>
      </div>
      <div className='qr-code'>
      {qrCode && <QRCodeCanvas value={qrCode} size={400} bgcolor="#fff" />}
      </div>
    </div>
  )
}

export default App
