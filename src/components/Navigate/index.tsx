import classNames from "classnames/bind";
import configs from "~/configs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./Navigate.module.scss";
import {
    faHome,
    faUser,
    faBriefcase,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { IMenuItem } from "~/interfaces";

const menus: IMenuItem[] = [
    {
        label: "Home",
        icon: faHome,
        link: configs.routes.home,
    },
    {
        label: "About",
        icon: faUser,
        link: configs.routes.about,
    },
    {
        label: "Project",
        icon: faBriefcase,
        link: configs.routes.project,
    },
    {
        label: "Contact",
        icon: faEnvelope,
        link: configs.routes.contact,
    },
];

const cx = classNames.bind(styles);
const Navigate = () => {
    return (
        <nav className={cx("wrapper")}>
            <ul className={cx("nav-list")}>
                {menus.map((item, index) => (
                    <li className={cx("nav-item")} key={index}>
                        <NavLink
                            className={(nav) =>
                                cx("nav-link", { active: nav.isActive })
                            }
                            to={item.link}
                        >
                            <span className={cx("label")}>{item.label}</span>
                            <span className={cx("icon")}>
                                <FontAwesomeIcon icon={item.icon} />
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigate;
