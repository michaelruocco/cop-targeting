import * as React from 'react';
import { useState, useContext, FC } from 'react';
import { Link } from 'react-router-dom';
import NavigationItem from './navigation-item';
import AuthContext from '../../contexts/auth/auth-context';
import config from '../../config';

const Banner: FC = () => {
  const { logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
    console.log(`menu toggled ${mobileMenuOpen}`);
  };

  const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    logout(window.location.origin.toString());
  };

  const calculateButtonClassName = () => {
    const className = 'govuk-header__menu-button govuk-js-header-toggle';
    if (mobileMenuOpen) {
      return `${className} govuk-header__menu-button--open`;
    }
    return className;
  };

  const calculateNavListClassName = () => {
    const className = 'govuk-header__navigation';
    if (mobileMenuOpen) {
      return `${className} govuk-header__navigation--open`;
    }
    return className;
  };

  return (
    <header className="govuk-header" role="banner" data-module="govuk-header">
      <a href="#main-content" className="govuk-skip-link">
        Skip to main content
      </a>

      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__content">
          <Link
            to="/"
            className="govuk-header__link govuk-header__link--service-name"
          >
            Cerberus Targeting
            <span style={{ display: 'block', fontSize: '0.55em' }}>
              powered by the Central Operations Platform
            </span>
          </Link>
          <button
            type="button"
            className={calculateButtonClassName()}
            aria-controls="navigation"
            aria-label="Show or hide navigation menu"
            onClick={(e) => {
              toggleMenu(e);
            }}
          >
            Menu
          </button>
          <nav>
            <ul
              id="navigation"
              className={calculateNavListClassName()}
              aria-label="Navigation menu"
            >
              <NavigationItem href="/roro/tasks" text="RoRo" />
              <NavigationItem
                href="/air-passenger/tasks"
                text="Air Passenger"
                visible={config.copTargetingApiEnabled}
              />
              <NavigationItem href="/pnr-access" text="PNR Access" />
              <li className="govuk-header__navigation-item">
                <Link
                  to="/"
                  onClick={(e) => handleLogout(e)}
                  className="govuk-header__link"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Banner;
