import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];
export default function NavBar() {
  return (
    <header className="bg-color">
      <div className="logo">
        <h3 className="header-logo mont-font">BookStore CMS</h3>
        <nav>
          <ul className="list-itemz flex">
            {links.map((link) => (
              <li key={link.text}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button type="button" className="login-btn">
        <FontAwesomeIcon icon={faUser} />
      </button>
    </header>
  );
}
