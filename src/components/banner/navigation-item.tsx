import * as React from 'react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

class Props {
  href: string;
  text: string;
  visible?: boolean;
}

const NavigationItem: FC<Props> = ({ href, text, visible = true }) => {
  if (!visible) {
    return <></>;
  }

  const calculateClassName = (href: string): string => {
    const className = 'govuk-header__navigation-item';
    if (isActive(href)) {
      return `${className} govuk-header__navigation-item--active`;
    }
    return className;
  };

  const isActive = (href: string): boolean => {
    const location = useLocation();
    return location.pathname === href;
  };

  return (
    <li className={calculateClassName(href)}>
      <Link to={href} className="govuk-header__link">
        {text}
      </Link>
    </li>
  );
};

export default NavigationItem;
