import classNames from "classnames/bind";
import { useFormik } from "formik";
import * as Yup from "yup";
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
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().trim().required("Name is required!"),
            email: Yup.string()
                .email("Invalid email!")
                .trim()
                .required("Email is required!"),
            subject: Yup.string().trim().required("Subject is required!"),
            message: Yup.string().trim().required("Message is required!"),
        }),

        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
        },
    });
    const { name, email, subject, message } = formik.values;
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
                <form
                    className={cx("content__right")}
                    onSubmit={formik.handleSubmit}
                >
                    <div className={cx("wrap__name-email")}>
                        <div className={cx("name")}>
                            <Input
                                placeholder="Your name"
                                name="name"
                                value={name}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.name && formik.touched.name && (
                                <span className={cx("message-err")}>
                                    {formik.errors.name}
                                </span>
                            )}
                        </div>
                        <div className={cx("email")}>
                            <Input
                                placeholder="Your email"
                                name="email"
                                value={email}
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <span className={cx("message-err")}>
                                    {formik.errors.email}
                                </span>
                            )}
                        </div>
                    </div>
                    <div>
                        <Input
                            placeholder="Subject"
                            name="subject"
                            value={subject}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.subject && formik.touched.subject && (
                            <span className={cx("message-err")}>
                                {formik.errors.subject}
                            </span>
                        )}
                    </div>
                    <div className="">
                        <textarea
                            className={cx("message")}
                            placeholder="Message"
                            spellCheck={false}
                            name="message"
                            value={message}
                            onChange={formik.handleChange}
                        ></textarea>
                        {formik.errors.message && formik.touched.message && (
                            <span className={cx("message-err")}>
                                {formik.errors.message}
                            </span>
                        )}
                    </div>
                    <Button
                        type="submit"
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
