import React, {useContext} from "react";
import { ThemeContext } from "../context/themecontext";
import "../styles/toggletheme.css";


function ToggleTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="theme-btn">
            Switch to {theme === "dark" ?  "🌙 Dark":"☀️ Light" } mode
        </button>
    )
};
export default ToggleTheme;