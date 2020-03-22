import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-site';


  prepareRoute(outlet: RouterOutlet): boolean {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
	}
}
