import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.scss']
})
export class DemoAppComponent {
  dark = false;
  title = 'Angular EasyForms Demos';
  navItems = [
    { name: 'Email Field', route: '/email-field' },
    { name: 'Password Field', route: '/password-field' },
    { name: 'Save Button', route: '/save-button' },
    { name: 'Toggle Field', route: '/toggle-field' },
  ];

  constructor(private _element: ElementRef, private _overlayContainer: OverlayContainer) {}

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
  template: `
    <p>Welcome to the development demos for Angular Easy forms!</p>
    <p>Open the sidenav to select a demo.</p>
  `
})
export class HomeComponent {}
