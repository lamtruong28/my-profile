import classNames from "classnames/bind";
import { IProject } from "~/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import styles from "./Project.module.scss";
import { FreeMode, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
interface IDetail {
    project: IProject;
    setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const cx = classNames.bind(styles);
function Detail({ project, setShowDetail }: IDetail) {
    return (
        <div className={cx("detail")}>
            <span
                className={cx("close-btn")}
                onClick={() => setShowDetail(false)}
            >
                <FontAwesomeIcon icon={faTimes} />
            </span>
            <div className={cx("left")}>
                <h2 className={cx("heading")}>
                    <span>{project?.name}</span>
                </h2>
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    modules={[FreeMode, Navigation]}
                    className={cx("slider")}
                >
                    {project?.images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={cx("img")}
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cx("right")}>
                <h2 className={cx("heading")}>
                    <span>Details</span>
                </h2>
                <div className={cx("detail-content-wrap")}>
                    <p>
                        <span>Description: </span> <span>{project?.desc}</span>
                    </p>
                    <p>
                        <span>Technology: </span>{" "}
                        <span>{project?.technology}</span>
                    </p>
                    <p>
                        <span>Responsive: </span>{" "}
                        <span>{project?.responsive ? "Có" : "Không"}</span>
                    </p>
                    <p>
                        <span>Link website: </span>
                        <a href={project?.link} target={"_blank"}>
                            {project?.link}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Detail;
