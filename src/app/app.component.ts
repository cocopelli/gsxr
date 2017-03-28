import { Component } from '@angular/core';
import {TerritoryService} from "./territory/territory.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TerritoryService]
})
export class AppComponent {
  title = 'Welcome!';
}
