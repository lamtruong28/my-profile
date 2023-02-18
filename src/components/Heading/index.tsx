import classNames from "classnames/bind";
import styles from "./Heading.module.scss";

interface IHeading {
    label: string;
    highlight: string;
    watermark: string;
}

const cx = classNames.bind(styles);
const Heading = ({ label, highlight, watermark }: IHeading) => {
    return (
        <div className={cx("wrapper")}>
            <h1 className={cx("heading")}>
                {label} <span>{highlight}</span>
            </h1>
            <span className={cx("watermark")}>{watermark}</span>
        </div>
    );
};

export default Heading;
