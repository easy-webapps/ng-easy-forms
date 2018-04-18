import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DemoRoutes } from '../components/route-data';
@Component({
  selector: 'app-demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.scss']
})
export class DemoAppComponent implements OnInit {
  dark = false;
  title = 'Angular EasyForms Demos';
  navItems = [];

  constructor(private _element: ElementRef, private _overlayContainer: OverlayContainer) {}

  ngOnInit() {
    this.navItems = DemoRoutes.map((data) => ({ name: this.toTitleCase(data.path.replace(/-/g, ' ')), route: '/' + data.path }));
    this.navItems.unshift({ name: 'Home', route: '/' });
  }

  private toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  toggleFullscreen() {
    const elem = this._element.nativeElement.querySelector('.demo-content');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}

/**
 * Home component for welcome message in DemoApp.
 */
@Component({
  selector: 'app-home',
  templateUrl: './demo-app.home.html'
})
export class HomeComponent {
  demos = {
    ngModel: '<app-email-field [placeholder]="placeholder" [(model)]="myModel"></app-email-field>',
    formControl: '<app-email-field [placeholder]="placeholder" [formControl]="control"></app-email-field>',
    output: '<app-email-field [placeholder]="placeholder" [inputValue]="myInput" valueChanged="myVar=$event"></app-email-field>'
  };
}
