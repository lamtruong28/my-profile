import classNames from "classnames/bind";
import { useState } from "react";
import projectSlice from "~/redux/slices/projectSlice";
import { useAppDispatch } from "~/redux/store";
import styles from "./Project.module.scss";

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
            <li className={cx("filter-item")}>
                <input
                    checked={filter === "all"}
                    type="radio"
                    name="filter"
                    id="all"
                    hidden
                    value={"all"}
                    onChange={handleChangeFilter}
                />
                <label htmlFor="all">All</label>
            </li>
            <li className={cx("filter-item")}>
                <input
                    checked={filter === "HTML/CSS/JS"}
                    type="radio"
                    name="filter"
                    id="HTML/CSS/JS"
                    hidden
                    value={"HTML/CSS/JS"}
                    onChange={handleChangeFilter}
                />
                <label htmlFor="HTML/CSS/JS">HTML/CSS/JS</label>
            </li>
            <li className={cx("filter-item")}>
                <input
                    checked={filter === "ReactJS"}
                    type="radio"
                    name="filter"
                    id="ReactJS"
                    hidden
                    value={"ReactJS"}
                    onChange={handleChangeFilter}
                />
                <label htmlFor="ReactJS">ReactJS</label>
            </li>
            <li className={cx("filter-item")}>
                <input
                    checked={filter === "React - TypeScript"}
                    type="radio"
                    name="filter"
                    id="React - TypeScript"
                    hidden
                    value={"React - TypeScript"}
                    onChange={handleChangeFilter}
                />
                <label htmlFor="React - TypeScript">React - TypeScript</label>
            </li>
        </ul>
    );
};

export default Filter;
