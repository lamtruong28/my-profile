import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import files from "~/assets/files";
import images from "~/assets/images";
import Button from "~/components/Button";
import Education from "~/components/Education";
import Heading from "~/components/Heading";
import Skill from "~/components/Skill";
import styles from "./About.module.scss";
const cx = classNames.bind(styles);
interface IPersonalInfo {
    firstName: string;
    lastName: string;
    yearOfBirth: string;
    gender: string;
    address: string;
    phone: string;
    github: string;
    email: string;
}
const personalInfo: IPersonalInfo = {
    firstName: "Trần Lâm",
    lastName: "Trường",
    yearOfBirth: "1999",
    gender: "Nam",
    address: "Quảng Ngãi, Việt Nam",
    phone: "0966007935",
    github: "github.com/lamtruong28",
    email: "lamtruongpk31@gmail.com",
};

const About = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={"slide"}></div>
            <Heading label={"About"} highlight={"Me"} watermark={"Resume"} />
            <div className={cx("info")}>
                <div className={cx("info__basic")}>
                    <h2 className={cx("title")}>PERSONAL INFOS</h2>
                    <div className={cx("wrap__basic")}>
                        <p className={cx("info__detail")}>
                            First Name: {personalInfo.firstName}
                        </p>
                        <p className={cx("info__detail")}>
                            Last Name: {personalInfo.lastName}
                        </p>
                        <p className={cx("info__detail")}>
                            Year of Birth: {personalInfo.yearOfBirth}
                        </p>
                        <p className={cx("info__detail")}>
                            Gender: {personalInfo.gender}
                        </p>
                        <p className={cx("info__detail")}>
                            Address: {personalInfo.address}
                        </p>
                        <p className={cx("info__detail")}>
                            Phone:{" "}
                            <a
                                className={cx("link")}
                                href={`tel:+ ${personalInfo.phone}`}
                            >
                                {personalInfo.phone}
                            </a>
                        </p>
                        <p className={cx("info__detail")}>
                            Email:{" "}
                            <a href={`mailto: ${personalInfo.email}`}>
                                {personalInfo.email}
                            </a>
                        </p>
                        <p className={cx("info__detail")}>
                            Github:{" "}
                            <a
                                href={`http://${personalInfo.github}`}
                                target="_blank"
                            >
                                {personalInfo.github}
                            </a>
                        </p>
                    </div>
                    <Button
                        outline
                        rounded
                        leftIcon={<FontAwesomeIcon icon={faArrowRight} />}
                        href={files.myCV}
                        download
                    >
                        DOWNLOAD CV
                    </Button>
                </div>
                <div className={cx("info__more")}>
                    <div className={cx("card")}>
                        <h3 className={cx("quantity")}>
                            1
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={cx("icon")}
                            />
                        </h3>
                        <p className={cx("label")}>
                            Years of <span>experience</span>
                        </p>
                    </div>
                    <div className={cx("card")}>
                        <h3 className={cx("quantity")}>
                            10
                            <FontAwesomeIcon
                                icon={faPlus}
                                className={cx("icon")}
                            />
                        </h3>
                        <p className={cx("label")}>
                            Completed <span>projects</span>
                        </p>
                    </div>
                </div>
            </div>
            <hr className={cx("separator")} />
            <Skill />
            <hr className={cx("separator")} />
            <Education />
        </div>
    );
};

export default About;
