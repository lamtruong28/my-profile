import classNames from "classnames/bind";
import { url } from "inspector";
import images from "~/assets/images";
import styles from "./Skill.module.scss";

interface ISkill {
    image: string;
    label: string;
}

const skills: ISkill[] = [
    {
        image: images.html,
        label: "Html",
    },
    {
        image: images.css,
        label: "Css",
    },
    {
        image: images.scss,
        label: "Scss",
    },
    {
        image: images.javascript,
        label: "Javascript",
    },
    {
        image: images.reactjs,
        label: "ReactJs",
    },
    {
        image: images.ts,
        label: "TypeScript",
    },
    {
        image: images.redux,
        label: "Redux",
    },
    {
        image: images.nextJS,
        label: "NextJS",
    },
    {
        image: images.python,
        label: "Python",
    },
    {
        image: images.antd,
        label: "Ant design",
    },
    {
        image: images.mui,
        label: "MUI",
    },
    {
        image: images.mysql,
        label: "MySQL",
    },
    {
        image: images.postgres,
        label: "Postgres",
    },
    {
        image: images.firebase,
        label: "Firebase",
    },
    {
        image: images.cPlus,
        label: "C++",
    },
    {
        image: images.cSharp,
        label: "C#",
    },
    {
        image: images.php,
        label: "PHP",
    },
    {
        image: images.git,
        label: "Git",
    },
];

const cx = classNames.bind(styles);
const Skill = () => {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("heading")}>My skills</h2>
            <div className={cx("skill-list")}>
                {skills.map((skill) => (
                    <div className={cx("skill-item")} key={skill.label}>
                        <div className={cx("image-wrap")}>
                            <div
                                title={skill.label}
                                className={cx("image")}
                                style={{
                                    backgroundImage: `url(${skill.image})`,
                                }}
                            ></div>
                        </div>
                        <span className={cx("label")}>{skill.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
