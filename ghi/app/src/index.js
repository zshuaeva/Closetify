import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function loadShoes() {
  const shoesResponse = await fetch('http://localhost:8080/api/shoes/')
  const hatsResponse = await fetch('http://localhost:8090/api/hats/')
  if (shoesResponse.ok && hatsResponse.ok) {
    const shoeData = await shoesResponse.json();
    const data = await hatsResponse.json()
    console.log(data)
    root.render(
      <React.StrictMode>
        <App shoes={shoeData.shoes} hats={data.hats} />
      </React.StrictMode>
    )
  } else {
    console.error("Error message")
  }
}
loadShoes();
