import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  title = 'angular-phrase-example';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }
}
