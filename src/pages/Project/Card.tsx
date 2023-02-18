import classNames from "classnames/bind";
import { Fragment, useState } from "react";
import Modal from "~/components/Modal";
import { IProject } from "~/interfaces";
import Detail from "./Detail";
import styles from "./Project.module.scss";

interface ICard {
    project: IProject;
}

const cx = classNames.bind(styles);
const Card = ({ project }: ICard) => {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    return (
        <Fragment>
            <div className={cx("card")} onClick={() => setShowDetail(true)}>
                <div
                    className={cx("card__image")}
                    style={{ backgroundImage: `url(${project?.images[0]})` }}
                ></div>
                <h3 className={cx("card__name")}>{project?.name}</h3>
            </div>
            <Modal open={showDetail} onHide={() => setShowDetail(false)}>
                <Detail project={project} setShowDetail={setShowDetail} />
            </Modal>
        </Fragment>
    );
};

export default Card;
