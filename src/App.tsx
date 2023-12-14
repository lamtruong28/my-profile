import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import MainLayout from "./layouts/MainLayout";
const NotFound = React.lazy(() => import("~/pages/NotFound"));
import routes from "./routes";

function App() {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Layout: any = route.layout ? route.layout : MainLayout;
                const Page = route.component;
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Suspense fallback={<Loading />}>
                                    <Page />
                                </Suspense>
                            </Layout>
                        }
                    />
                );
            })}
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
