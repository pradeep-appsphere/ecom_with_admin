import React from 'react';
import { ClientNav } from './client-nav';
import { AdminNav } from './admin-nav';

export const AppNavigator = (props: any) => {

  const {token} = props;

  return (
    <div>             
      { token ? <AdminNav/> : <ClientNav /> }
    </div>
  );
};

