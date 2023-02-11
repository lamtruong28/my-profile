import React from "react";
import configs from "~/configs";
import { IRoutes } from "~/interfaces";
const Home = React.lazy(() => import("~/pages/Home"));
const About = React.lazy(() => import("~/pages/About"));
const Project = React.lazy(() => import("~/pages/Project"));
const Contact = React.lazy(() => import("~/pages/Contact"));

const routes: IRoutes[] = [
    {
        path: configs.routes.home,
        component: Home,
    },
    {
        path: configs.routes.about,
        component: About,
    },
    {
        path: configs.routes.project,
        component: Project,
    },
    {
        path: configs.routes.contact,
        component: Contact,
    },
];

export default routes;
