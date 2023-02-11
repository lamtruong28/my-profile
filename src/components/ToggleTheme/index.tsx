import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ToggleTheme.module.scss";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

// Check theme default browser:
const isBrowserDefaultDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

// load data from localStorage:
const themeLocal: string | null = localStorage.getItem("theme");

const ToggleTheme = () => {
    const [theme, setTheme] = useState<string>(() => {
        if (themeLocal) return themeLocal;
        else return isBrowserDefaultDark ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div
            className={cx("wrapper")}
            onClick={() =>
                setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
        >
            <span className={cx("icon", theme)}>
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faSun} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} />
                )}
            </span>
        </div>
    );
};

export default ToggleTheme;
