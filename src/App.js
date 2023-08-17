import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'

import './assets/css/style.css'

import Header from './components/Header';
import Footer from "./components/Footer";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
    return (
        <HashRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Footer />
        </HashRouter>
    )
}