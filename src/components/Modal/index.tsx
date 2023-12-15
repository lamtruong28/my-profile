import classNames from "classnames/bind";
import { IChildren } from "~/interfaces";
import styles from "./Modal.module.scss";
import { useEffect } from "react";

interface ModalProps extends IChildren {
    open?: boolean;
    onHide?: () => void;
}

const cx = classNames.bind(styles);
const Modal = ({ children, open = false, onHide }: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "overlay";
    }, [open]);
    return (
        <div className={cx("wrapper", { open })} onClick={onHide}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
