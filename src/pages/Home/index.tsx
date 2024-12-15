import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Button from "~/components/Button";
import configs from "~/configs";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
const Home = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={"slide"}></div>
            <div className={cx("mask")}></div>
            <div className={cx("avatar")}>
                <div className={cx("image")}></div>
            </div>
            <div className={cx("content")}>
                <div className={cx("text")}>
                    <h1 className={cx("title")}>
                        Tran Lam Truong <span>Web Developer !</span>
                    </h1>
                    <p className={cx("greet")}>
                        Hi there! <br /> I'm Truong, a programming enthusiast.
                        In addition to learning knowledge at school, I also
                        learn other knowledge from many different websites. Mr.
                        Son's F8 Fullstack community is a page where I learned a
                        lot of useful knowledge. I have completed HTML, CSS,
                        JavaScript, and ReactJS courses... <br />
                        While studying at school and F8, I have a few personal
                        projects. I hope everyone will see and give me feedback
                        so that I can improve more and more.
                        <span className={cx("thanks")}>
                            Thank you for visiting my website!
                        </span>
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
