import classNames from "classnames/bind";
import { IProcess } from "~/interfaces";
import styles from "./Education.module.scss";
import Process from "./Process";

const processes: IProcess[] = [
    {
        timeline: "05/2023 - Hiện tại",
        area: "Đại Nam Group",
        position: "Frontend developer",
        desc: "Làm việc tại CTCP tập đoàn Đại Nam Group",
    },
    {
        timeline: "11/2022 - 02/2023",
        area: "Alta software",
        position: "Thực tập sinh Front end",
        desc: "Đầu tháng 11, tôi đã bắt đầu thực tập tại công ty alta software",
    },
    {
        timeline: "2020 - 2023",
        area: "Cao đăng Lý Tự Trọng",
        position: "Sinh viên IT",
        desc: "Bắt đầu quá trình học lại với chuyên ngành công nghệ thông tin",
    },
    {
        timeline: "2017 - 2020",
        area: "Nidec Việt Nam Corporation",
        position: "Công nhân sản xuất",
        desc: "Sau khi vừa tốt nghiệp, tôi đã vào Sài Gòn làm việc để trải nghiệm cuộc sống thành thị.",
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
