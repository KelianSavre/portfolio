import React from "react";

import Header from "./components/header";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import './index.css';

function App(){
    return(
        <>
            <Header/>
            <div className="main-container">
                <Homepage/>
            </div>
            <Footer/>
        </>
    )
}

export default App