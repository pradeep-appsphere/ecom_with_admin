import './header.scss';

function AdminHeaderTemplate() {
  return (
    <div className="Admin Header">    

        <div className="logo"></div>
    
        <div className="menu">
          <ul>
            <li>Categories</li>
            <li>Offers</li>
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
        
    </div>
  );
}

export default AdminHeaderTemplate;
