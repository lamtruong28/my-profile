import classNames from "classnames/bind";
import styles from "./Input.module.scss";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    type?: React.HTMLInputTypeAttribute;
}

const cx = classNames.bind(styles);
const Input = ({ className, type = "text", ...props }: IInput) => {
    return (
        <input
            type={type}
            className={cx("input", className)}
            {...props}
            spellCheck={false}
        />
    );
};

export default Input;
