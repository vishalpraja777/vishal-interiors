import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './style/services.css'
import './style/homepage.css'
import './style/navbar.css'
import './style/protfolio.css'
import './style/aboutus.css'
import './style/contactus.css'
import './style/feedback.css'
import './style/footer.css'
import './style/fixedContactUsBtn.css'

import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
