import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
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
                                <Suspense fallback={<p>Loading ...</p>}>
                                    <Page />
                                </Suspense>
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
