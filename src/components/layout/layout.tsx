import * as React from 'react';
import { FC } from 'react';
import Banner from '../banner/banner';

class Props {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Banner />

      <div className="govuk-width-container">
        <main className="govuk-main-wrapper" id="main-content" role="main">
          {children}
        </main>
      </div>

      <footer className="govuk-footer " role="contentinfo">
        <div className="govuk-width-container ">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow" />
            <div className="govuk-footer__meta-item">
              <a
                className="govuk-footer__link govuk-footer__copyright-logo"
                href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              >
                © Crown copyright
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
