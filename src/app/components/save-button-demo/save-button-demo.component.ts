import { Component, OnInit } from '@angular/core';

import { SaveButtonStatus, SaveButtonTitles, SaveButtonTranslations } from '../../lib/save-button';

@Component({
  selector: 'app-save-button-demo',
  templateUrl: './save-button-demo.component.html',
  styleUrls: ['./save-button-demo.component.scss']
})
export class SaveButtonDemoComponent implements OnInit {
  translations: SaveButtonTranslations = SaveButtonTitles;
  status = '';
  statusList = SaveButtonStatus;
  constructor() {}

  ngOnInit() {}

  onClick(data) {
    console.log(data);
  }
}
