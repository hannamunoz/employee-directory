import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header>
            <h1 className="text-center">Employee Directory</h1>
            <p className="text-center">
                Click on headers to filter employees or use the search function to find your results.
            </p>
        </header>
    );
};

export default Header;