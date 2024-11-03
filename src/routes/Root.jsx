import {Outlet} from "react-router-dom";
import Navigation from "../components/navigation/navigation.jsx";

export default function Root() {
    return (
        <>
            <Navigation />

            <Outlet />
        </>
    );
}
