import React from 'react';
import './app.scss';
import { AppHeader } from '../app-header/app-header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import { Main } from '../../pages/main/main';
import { Child } from '../../pages/child/child';
import { Mother } from '../../pages/mother/mother';
import { Timeline } from '../../pages/timeline/timeline';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { ResetPassword } from '../../pages/reset-password/reset-password';
import { Register } from '../../pages/register/register';
import { Login } from '../../pages/login/login';
import { MainWithoutLogin } from '../../pages/main-without-login/main-without-login';
import { ProtectedRoute } from '../protected-route/protected-route';



export const App = () => {

  return (
    <Router>
      <AppHeader />
      <Switch>
        <ProtectedRoute path='/' exact>
          <Main />
        </ProtectedRoute>
        < Route path='/main' exact>
          <MainWithoutLogin/>
        </Route>
        <Route path='/child' exact>
          <Child />
        </Route>
        <Route path='/mother' exact>
          <Mother />
        </Route>
        <Route path='/timeline' exact>
          <Timeline />
        </Route>
        <Route path='/register' exact>
          <Register />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        <Route path='/reset-password' exact>
          <ResetPassword />
        </Route>
      </Switch>
    </Router>
  )
};
