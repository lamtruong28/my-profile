import classNames from "classnames/bind";
import { useEffect } from "react";
import Heading from "~/components/Heading";
import Loading from "~/components/Loading";
import { loadingSelector, projectRemain } from "~/redux/selectors";
import { fetchAllProject } from "~/redux/slices/projectSlice";
import { useAppDispatch, useAppSelector } from "~/redux/store";
import Card from "./Card";
import Filter from "./Filter";
import styles from "./Project.module.scss";

const cx = classNames.bind(styles);
const Project = () => {
    const dispatch = useAppDispatch();
    const projects = useAppSelector(projectRemain);
    const loading = useAppSelector(loadingSelector);
    useEffect(() => {
        dispatch(fetchAllProject());
    }, []);
    console.log({ loading });
    return (
        <div className={cx("wrapper")}>
            <div className={"slide"}></div>
            <Heading label={"My"} highlight={"Project"} watermark={"Works"} />
            <Filter />
            <div className={cx("project__list")}>
                {loading ? (
                    <Loading />
                ) : (
                    projects.map((project) => (
                        <Card project={project} key={project.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Project;
