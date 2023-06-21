import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Playground from './components/Playground/Playground';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <Router basename="/orbit-web">
            <div className="App max-w-screen-xl mx-auto px-4">
                {/*<Header />*/}
                <Routes>
                    <Route path="/playground" element={<Playground />} />
                    <Route path="/" element={<Main />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
