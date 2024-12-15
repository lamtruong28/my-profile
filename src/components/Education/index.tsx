import classNames from "classnames/bind";
import { IProcess } from "~/interfaces";
import styles from "./Education.module.scss";
import Process from "./Process";

const processes: IProcess[] = [
    {
        timeline: "March 2024 - Present",
        area: "Digitool Solutions",
        position: "Software Engineer",
        desc: "Work for Digitool Solutions.",
    },
    {
        timeline: "May 2023 - Feb 2024",
        area: "Đại Nam Group",
        position: "Frontend developer",
        desc: "Working at Dai Nam Group Corporation",
    },
    {
        timeline: "Nov 2022 - Feb 2023",
        area: "Alta software",
        position: "Intern frontend",
        desc: "Started internship at alta software company",
    },
    {
        timeline: "2020 - 2023",
        area: "Ly Tu Trong College",
        position: "IT Student",
        desc: "Start studying again with a major in information technology",
    },
    {
        timeline: "2017 - 2020",
        area: "Nidec Viet Nam Corporation",
        position: "Production worker",
        desc: "After graduating, I went to Saigon to work and experience urban life.",
    },
];

const cx = classNames.bind(styles);
const Education = () => {
    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("heading")}>Education & experience</h2>
            <div className={cx("process-list")}>
                {processes.map((process) => (
                    <Process
                        key={process.timeline}
                        timeline={process.timeline}
                        area={process.area}
                        position={process.position}
                        desc={process.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Education;
