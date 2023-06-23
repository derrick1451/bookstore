import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'BOOKS' },
  { path: 'categories', text: 'CATEGORIES' },
];
export default function NavBar() {
  return (
    <header>
      <h3>BookStore CMS</h3>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
