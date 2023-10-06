import './index.css'
import {WithProviders} from "./providers/withProviders";
import {Routing} from "@/pages";

export const App = () => {
    return (
        <WithProviders>
            <Routing/>
        </WithProviders>
    );
}