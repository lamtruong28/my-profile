import classNames from "classnames/bind";
import { IProcess } from "~/interfaces";
import styles from "./Education.module.scss";
import Process from "./Process";

const processes: IProcess[] = [
    {
        timeline: "2017",
        area: "Trường THPT số 2 Đức Phổ",
        work: "Học sinh",
        desc: "Tốt nghiệp trung học phổ thông.",
    },
    {
        timeline: "2020 - 2023",
        area: "Cao đăng Lý Tự Trọng",
        work: "Sinh viên IT",
        desc: "Bắt đầu quá trình học lại với chuyên ngành công nghệ thông tin",
    },
    {
        timeline: "2017 - 2020",
        area: "Nidec Việt Nam Corporation",
        work: "Công nhân sản xuất",
        desc: "Sau khi vừa tốt nghiệp, tôi đã vào Sài Gòn làm việc để trải nghiệm cuộc sống thành thị.",
    },
    {
        timeline: "11/2022 - 02/2023",
        area: "Alta software",
        work: "Thực tập sinh Front end",
        desc: "Đầu tháng 11, tôi đã bắt đầu thực tập tại công ty alta software",
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
                        work={process.work}
                        desc={process.desc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Education;
