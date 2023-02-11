import classNames from "classnames/bind";
import Navigate from "~/components/Navigate";
import ToggleTheme from "~/components/ToggleTheme";
import { IChildren } from "~/interfaces";
import styles from "./MainLayout.module.scss";

const cx = classNames.bind(styles);
const MainLayout = ({ children }: IChildren) => {
    return (
        <div className={cx("wrapper")}>
            <div>{children}</div>
            <Navigate />
            <ToggleTheme />
        </div>
    );
};

export default MainLayout;
