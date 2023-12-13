import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faGithub = faGithub
  flipMenu:boolean = false

  onMenu() {
    this.flipMenu = !this.flipMenu
  }

  lastScrollTop = 0;
  scrollingDown = false;

  onScroll(event: any): void {
    const currentScroll = event.target.scrollTop;
    this.scrollingDown = currentScroll > this.lastScrollTop;
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
  }
}
