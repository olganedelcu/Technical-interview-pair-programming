import React from 'react';
import ProductCatalog from './components/ProductCatalog';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🛍️ Product Catalog</h1>
        <p>Lightspeed Commerce - Interview Challenge</p>
      </header>
      <main>
        <ProductCatalog />
      </main>
    </div>
  );
}

export default App;