import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AdminHeaderTemplate from "../template/admin/header/header";
import AdminFooterTemplate from "../template/admin/footer/footer";



export const AdminNav = (props: any) => {  
  
  return (
    <div>

     <AdminHeaderTemplate/>         
        <Router>   
        
            <Switch>
              <Route exact path="/">    
                                     
              </Route>    

              <Route path="/contact-us">   
                          
              </Route>  
              
              <Route path="/login">                              
            
              </Route>
              
            </Switch>

        </Router>

        <AdminFooterTemplate/>       

    </div>
  );
};
