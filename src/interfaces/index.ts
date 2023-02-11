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
