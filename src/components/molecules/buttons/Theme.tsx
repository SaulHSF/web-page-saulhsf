import { ThemeContext } from "@/contexts/Theme";
import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ButtonTheme = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center">
      <span className="mr-2">{isDarkMode ? <FaMoon /> : <FaSun />}</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={() => toggleDarkMode()}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ButtonTheme;
