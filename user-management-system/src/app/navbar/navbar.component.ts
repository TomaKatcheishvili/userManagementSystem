import { Component } from '@angular/core';
import { TranslationService } from '../tranlsations/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private translationService: TranslationService) {}

  changeLanguage(event: any) {
    const selectedLang = event.target.value;
    this.translationService.setLanguage(selectedLang);
  }
}
