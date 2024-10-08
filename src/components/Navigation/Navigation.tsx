import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { memo } from 'react';

const makeLinkClass = ({ isActive }: { isActive: boolean }) => {
  return clsx(css.link, isActive && css.isActive);
};

const Navigation = memo(function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={makeLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
});
export default Navigation;
