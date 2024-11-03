import {Link} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="/schedule">Schedule</Link>
                </li>
            </ul>
        </nav>
    )
}