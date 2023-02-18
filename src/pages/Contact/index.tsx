import classNames from "classnames/bind";
import {
    faEnvelope,
    faLocationDot,
    faPhoneVolume,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "~/components/Heading";
import styles from "./Contact.module.scss";
import { FacebookIcon, GithubIcon } from "~/assets/icons";
import Input from "~/components/Input";
import Button from "~/components/Button";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

interface IContactInfo {
    icon: IconDefinition;
    label: string;
    info: string | JSX.Element;
}

const contactInfo: IContactInfo[] = [
    {
        icon: faLocationDot,
        label: "Address",
        info: "Quảng Ngãi, Việt Nam",
    },
    {
        icon: faEnvelope,
        label: "Email",
        info: (
            <a href="mailto:lamtruongpk31@gmail.com">lamtruongpk31@gmail.com</a>
        ),
    },
    {
        icon: faPhoneVolume,
        label: "Phone",
        info: <a href="tel:+0966007935">0966007935</a>,
    },
];

const cx = classNames.bind(styles);
const Contact = () => {
    return (
        <div className={cx("wrapper")}>
            <div className={"slide"}></div>
            <Heading
                label={"Get in"}
                highlight={"touch"}
                watermark={"Contact"}
            />
            <div className={cx("content")}>
                <div className={cx("content__left")}>
                    <h3 className={cx("title")}>DON'T BE SHY !</h3>
                    <p className={cx("desc")}>
                        Feel free to get in touch with me. I am always open to
                        discussing new projects, creative ideas or opportunities
                        to be part of your visions.
                    </p>
                    <ul className={cx("contact-info__list")}>
                        {contactInfo.map((item) => (
                            <li
                                className={cx("contact-info__item")}
                                key={item.label}
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className={cx("icon")}
                                />
                                <div className={cx("info__wrap")}>
                                    <span className={cx("label")}>
                                        {item.label}
                                    </span>
                                    <span className={cx("info")}>
                                        {item.info}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={cx("social")}>
                        <a
                            href="https://www.facebook.com/lamtruong.tran.161"
                            target={"_blank"}
                        >
                            <FacebookIcon className={cx("icon")} />
                        </a>
                        <a
                            href="https://github.com/lamtruong28"
                            target={"_blank"}
                        >
                            <GithubIcon className={cx("icon")} />
                        </a>
                    </div>
                </div>
                <form className={cx("content__right")}>
                    <div className={cx("wrap__name-email")}>
                        <Input
                            placeholder="Your name"
                            onChange={(e) => console.log(e.target.value)}
                        />
                        <Input
                            placeholder="Your email"
                            onChange={(e) => console.log(e.target.value)}
                        />
                    </div>
                    <Input
                        placeholder="Subject"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <textarea
                        className={cx("message")}
                        placeholder="Message"
                        spellCheck={false}
                    ></textarea>
                    <Button
                        className={cx("send-btn")}
                        outline
                        rounded
                        leftIcon={<FontAwesomeIcon icon={faPaperPlane} />}
                    >
                        Send message
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
