import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { IProcess } from "~/interfaces";
import styles from "./Education.module.scss";

const cx = classNames.bind(styles);
const Process = ({ timeline, area, position, desc }: IProcess) => {
    return (
        <div className={cx("process-item")}>
            <span className={cx("wrap-icon")}>
                <FontAwesomeIcon icon={faBriefcase} className={cx("icon")} />
            </span>
            <span className={cx("timeline")}>{timeline}</span>
            <h4 className={cx("work")}>
                {area} - <span>{position}</span>
            </h4>
            <p className={cx("desc")}>{desc}</p>
        </div>
    );
};

export default Process;
