import classNames from "classnames/bind";
import { useState } from "react";
import projectSlice from "~/redux/slices/projectSlice";
import { useAppDispatch } from "~/redux/store";
import styles from "./Project.module.scss";

const filters = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "HTML/CSS/JS",
        value: "HTML/CSS/JS",
    },
    {
        label: "ReactJS",
        value: "ReactJS",
    },
    {
        label: "React - TypeScript",
        value: "React - TypeScript",
    },
    {
        label: "NextJS",
        value: "NextJS",
    },
];

const cx = classNames.bind(styles);
const Filter = () => {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<string>("all");

    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
        dispatch(projectSlice.actions.setFilter(event.target.value));
    };
    return (
        <ul className={cx("filter")}>
            {filters?.map((item) => (
                <li className={cx("filter-item")}>
                    <input
                        checked={filter === item.value}
                        type="radio"
                        name="filter"
                        id={item.value}
                        hidden
                        value={item.value}
                        onChange={handleChangeFilter}
                    />
                    <label htmlFor={item.value}>{item.label}</label>
                </li>
            ))}
        </ul>
    );
};

export default Filter;
