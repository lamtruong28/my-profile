import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </Router>
        </Provider>
    </React.StrictMode>
);
