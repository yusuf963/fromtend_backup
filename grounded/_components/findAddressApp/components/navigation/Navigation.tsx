import {FC} from 'react'
import './style.css'

const Navigation: FC = () => {
  return (
    <div className="navbar-header">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand-container">
            <a className="navbar-brand" href="/">
              <img
                src="https://bequest.com/wp-content/themes/bequestwp/assets/img/logo.svg"
                alt="Bequest"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarMainNavigation">
            <ul id="menu-main-navigation-1" className="nav navbar-nav">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-192">
                <a
                  title="Life insurance"
                  href="https://bequest.com/life-insurance/"
                >
                  <span>Life insurance</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-220">
                <a title="Wills" href="https://bequest.com/wills/">
                  <span>Wills</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-260">
                <a title="About" href="https://bequest.com/about-us/">
                  <span>About</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-292">
                <a title="Claims" href="https://bequest.com/claims/">
                  <span>Claims</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-318">
                <a title="Insights" href="https://bequest.com/insights/">
                  <span>Insights</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1490">
                <a title="Partnerships" href="https://bequest.com/ourpartners/">
                  <span>Partnerships</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-340">
                <a title="Contact" href="https://bequest.com/contact-us/">
                  <span>Contact</span>
                </a>
              </li>
              <li className="left-auto menu-item-btn menu-item-btn--login menu-item-btn--signin menu-item menu-item-type-custom menu-item-object-custom menu-item-16">
                <a
                  title="Sign in"
                  target="_blank"
                  href="https://bequest.app?aid=dea3762e-6682-4c5f-9a2a-94027f62aa2b"
                  rel="noreferrer"
                >
                  <span>Sign in</span>
                </a>
              </li>
              <li
                data-testid="for-testing"
                className="apply-now-btn menu-item-btn menu-item-btn--get-a-quote menu-item menu-item-type-custom menu-item-object-custom menu-item-17"
              >
                <a
                  title="APPLY NOW"
                  target="_blank"
                  href="https://bequest.app?aid=dea3762e-6682-4c5f-9a2a-94027f62aa2b"
                  rel="noreferrer"
                >
                  <span>APPLY NOW</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
