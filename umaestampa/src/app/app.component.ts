import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public homePage = [
    { title: 'Home', url: '/home', icon: 'home' },
  ]

  public designPages = [
    { title: 'Create Design', url: '/create-design' },
    { title: 'My Designs', url: '/designs' },
    { title: 'Drafts', url: '/drafts' },
  ]

  public orderPages = [
    { title: 'Create Order', url: '/create-order' },
    { title: 'My Orders', url: '/orders' },
  ]

  public communityPage = [
    { title: 'Community', url: '/community', icon: 'people' }
  ]
  constructor() {}
}
