import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./Pages/onboarding/onboarding.page').then( m => m.OnboardingPage)
  },
  {
    path: 'messenger',
    loadComponent: () => import('./Pages/messenger/messenger.page').then( m => m.MessengerPage)
  },
  {
     path: 'chat/:chatId', loadComponent: () => import('./Pages/chat/chat.page').then(m => m.ChatPage) 
  },
  {
    path: 'profile',
    loadComponent: () => import('./Pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./Pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'users',
    loadComponent: () => import('./Pages/user-list/user-list.page').then( m => m.UsersListPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./Pages/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
];
