import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'  // 更新 index.css 的路徑
import App from './view/App'  // 更新 App 的路徑

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)