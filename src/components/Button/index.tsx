import classNames from "classnames/bind";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

interface ButtonPropsType
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    to?: string;
    href?: string;
    download?: boolean;
    primary?: boolean;
    outline?: boolean;
    rounded?: boolean;
    small?: boolean;
    large?: boolean;
    secondary?: boolean;
    disabled?: boolean;
    className?: any;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    onClick?: () => void;
}

function Button({
    children,
    to,
    href,
    download,
    primary,
    outline,
    rounded,
    small,
    large,
    secondary,
    disabled,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}: ButtonPropsType) {
    let Comp: any = "button";
    const props = {
        onClick,
        ...passProps,
    } as any;

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        props.download = download;
        Comp = "a";
    }

    // Remove all event listener when button is disabled:
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function")
                delete props[key];
        });
    }

    const classes = cx("wrapper", {
        [className]: className,
        primary,
        outline,
        rounded,
        disabled,
        secondary,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx("icon", "left")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
