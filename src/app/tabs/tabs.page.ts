import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  toggleTheme(e: any) {
    document.body.classList.toggle('dark', e.detail.checked);
  }

}
