import React from 'react'
import App from './App.jsx'
import { ThemeProvider } from './GlobalComponents/ThemeProvider.jsx'
import { render } from 'react-dom'
import { CartProvider } from 'react-use-cart'

render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>      
    </ThemeProvider>  
  </React.StrictMode>
,document.getElementById('root'))


