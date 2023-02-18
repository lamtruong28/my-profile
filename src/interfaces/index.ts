import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface IChildren {
    children: JSX.Element;
}

export interface IRoutes {
    path: string;
    component:
        | React.LazyExoticComponent<() => JSX.Element>
        | (() => JSX.Element);
    layout?: JSX.Element;
}

export interface IMenuItem {
    label: string;
    icon: IconDefinition;
    link: string;
}

export interface IProcess {
    timeline: string;
    area: string;
    work: string;
    desc: string;
}

export interface IProject {
    id: string;
    name: string;
    desc: string;
    link: string;
    technology: string;
    type: string;
    images: string[];
    responsive: string;
}
