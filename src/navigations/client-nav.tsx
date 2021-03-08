import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClientHeaderTemplate from "../template/client/header/header";
import ClientFooterTemplate from "../template/client/footer/footer";
import BestDealsPage from '../pages/best-deals/best-deals';
import CategoriesPage from '../pages/categories/categories';
import LoginPage from '../pages/login/login';
import RegisterPage from '../pages/register/register';
import LandingPage from '../pages/landing/landing';

export const ClientNav = (props: any) => {  
  
  return (
    <div>

      
        <Router>   

          <ClientHeaderTemplate/>        

            <Switch>
              <Route exact path="/">    
                  <LandingPage></LandingPage>
              </Route>    

              <Route path="/best-deals">                              
                <BestDealsPage></BestDealsPage>
              </Route>

              <Route path="/categories">                              
                <CategoriesPage></CategoriesPage>
              </Route>

              <Route path="/login">   
                <LoginPage></LoginPage>            
              </Route>  
              
              <Route path="/register">                              
                <RegisterPage></RegisterPage>
              </Route>
              
            </Switch>

            <ClientFooterTemplate/>       
            
        </Router>

    </div>
  );
};
