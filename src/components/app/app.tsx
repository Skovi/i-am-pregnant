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
import { Profile } from '../../pages/profile/profile';
import { ProfileChild } from '../../pages/profile-child/profile-child';
import { ProfileMother } from '../../pages/profile-mother/profile-mother';
import { Timeline } from '../../pages/timeline/timeline';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { ResetPassword } from '../../pages/reset-password/reset-password';
import { Register } from '../../pages/register/register';
import { Login } from '../../pages/login/login';



export const App = () => {

  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/profile/child' exact>
          <ProfileChild />
        </Route>
        <Route path='/profile/mother' exact>
          <ProfileMother />
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
