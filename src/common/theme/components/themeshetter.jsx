import React, { useContext, useState } from "react";

import "./themebtn.scss";
import ThemeContext from "./contexts/themecontexts";
// img
// import { Image } from "react-bootstrap";
// import SunIcon from "../img/sun.png";
// import MoonIcon from "../img/moon.png";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
export default function ThemeSetter() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(theme === "light");

  checked ? setTheme("light") : setTheme("dark");

  return (
    <>
      <div className="theme-btn">
        <div className="checkbox-wrapper-54">
          <label className="switch">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(toggle)}
            />
            <span className="slider">
              {checked ? (
                <>
                  <BsMoonStarsFill />
                </>
              ) : (
                <>
                  <MdOutlineLightMode />
                </>
              )}
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
function toggle(value) {
  return !value;
}
