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
    { title: 'Create Design', url: '/create-design', icon: 'create' },
    { title: 'My Designs', url: '/designs', icon: 'images' },
    { title: 'Drafts', url: '/drafts', icon: 'document' },
  ]

  public orderPages = [
    { title: 'Create Order', url: '/create-order', icon: 'create' },
    { title: 'My Orders', url: '/orders', icon: 'list' },
  ]

  public communityPage = [
    { title: 'Community', url: '/community', icon: 'people' }
  ]
  constructor() {}
}
