import * as React from "react";
import * as ReactDOM from "react-dom/client";

import "@/app/index.css";
import {App} from "@/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
