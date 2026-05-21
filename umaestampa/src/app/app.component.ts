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
    { title: 'Criar novo Design', url: '/create-design' },
    { title: 'Os meus Designs', url: '/designs' },
    { title: 'Rascunhos', url: '/drafts' },
  ]

  public orderPages = [
    { title: 'Encomendar design', url: '/create-order' },
    { title: 'As minhas Encomendas', url: '/orders' },
  ]

  public communityPage = [
    { title: 'Comunidade', url: '/community', icon: 'people' }
  ]
  constructor() {}
}
