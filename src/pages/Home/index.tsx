import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/components/Button";
import configs from "~/configs";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
const Home = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("mask")}></div>
            <div className={cx("avatar")}>
                <div className={cx("image")}></div>
            </div>
            <div className={cx("content")}>
                <div className={cx("text")}>
                    <h1 className={cx("title")}>
                        I'm Trần Lâm Trường <span>Web Developer !</span>
                    </h1>
                    <p className={cx("greet")}>
                        Xin chào mọi người! Mình là Trường, là sinh viên vừa mới
                        tốt nghiệp trường Cao đẳng Lý Tự Trọng. Ngoài việc học
                        kiến thức ở trường, mình còn tự học thêm các kiến thức
                        khác từ nhiều website khác nhau. Cộng đồng F8 Fullstack
                        của anh Sơn là một trang mình học được rất nhiều kiến
                        thức bổ ích. Mình đã hoàn thành các khóa học HTML, CSS,
                        JavaScript, ReactJS,... Khi học ở trường và F8, mình có
                        một vài dự án cá nhân, mong mọi người xem và góp ý cho
                        mình, để mình ngày càng hoàn thiện hơn.
                        <span className={cx("thanks")}>Mình xin cảm ơn!</span>
                    </p>
                    <div className={cx("button")}>
                        <Button
                            to={configs.routes.about}
                            outline
                            rounded
                            leftIcon={<FontAwesomeIcon icon={faArrowRight} />}
                        >
                            ABOUT
                        </Button>
                        <Button
                            to={configs.routes.project}
                            outline
                            rounded
                            leftIcon={<FontAwesomeIcon icon={faArrowRight} />}
                        >
                            PROJECT
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
