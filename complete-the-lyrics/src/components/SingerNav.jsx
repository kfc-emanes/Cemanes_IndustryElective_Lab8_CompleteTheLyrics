import { NavLink } from 'react-router-dom'
import { singers } from '../data/singers.js'

export default function SingerNav() {
    return (
        <nav className="singer-nav" aria-label="Singer Selection">
            {singers.map((singer) => (
                <NavLink
                    key={singer.id}
                    to={`singer/${singer.id}`}
                    style= {{ backgroundColor: singer.color }}
                    className = {({ isActive}) =>
                        `singer-tab ${isActive ? 'active-tab' : ''}`
                    }
                >
                    {singer.label}
                </NavLink>
            ))}
        </nav>
    );
}