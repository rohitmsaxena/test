import React, {Component, FC, useState} from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header/Header.lazy";
import Catalog from "./components/Catalog/Catalog.lazy";

interface AppProps {
}

const App: FC<AppProps> = (props: AppProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div className="App">
            <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
            <Catalog />
        </div>
    );

}

export default App;
