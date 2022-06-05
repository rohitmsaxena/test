import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header/Header.lazy";

function App() {
    return (
        <div className="App">
            <Header />
        </div>
  );
}

export default App;
