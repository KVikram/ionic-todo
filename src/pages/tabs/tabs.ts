import { Component } from '@angular/core';

import { DonePage } from '../done/done';
// import { ContactPage } from '../contact/contact';
import { TodoPage } from '../todo/todo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodoPage;
  tab2Root = DonePage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
