import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  darkMode:boolean = false;

  ngOnInit() {}



  toggleTheme(e: any) {
      document.body.classList.toggle('dark', e.detail.checked);
  }

}
