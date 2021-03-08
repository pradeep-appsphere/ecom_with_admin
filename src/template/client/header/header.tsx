
import './header.scss';
import { NavLink } from 'react-router-dom';

function ClientHeaderTemplate() {
  return (
    <div className="Client Header">  
      <header className="header d-flex space-between">   
        <NavLink to="/"><div className="logo"></div></NavLink>
    
        <div className="menu">
          <ul>
            <li><NavLink to="best-deals">Best Deals</NavLink></li>            
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="register" activeClassName='is-active-menu'>Register</NavLink></li>            
          </ul>
        </div>
      </header>

      <section className="category-menu">   
        <div className="menu">
          <ul>
            <li><NavLink to="best-deals">Best Deals</NavLink></li>            
            <li><NavLink to="login">Login</NavLink></li>
            <li><NavLink to="register" activeClassName='is-active-menu'>Register</NavLink></li>            
          </ul>
        </div>
      </section>
        
    </div>
  );
}

export default ClientHeaderTemplate;
