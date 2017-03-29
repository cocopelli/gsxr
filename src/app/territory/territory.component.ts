import {TerritoryEntry} from './territory-entry';
import {Component, OnInit} from "@angular/core";
import {TerritoryService} from "./territory.service";

@Component({
  selector: 'oz-territory',
  templateUrl: 'territory.component.html',
  styleUrls: ['territory.component.css']
})
export class TerritoryComponent implements OnInit{
  entries: TerritoryEntry[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;
  dump: any;

  constructor(private territoryService : TerritoryService){ }

  ngOnInit(){
    this.dump = this.territoryService
      .getAll()
      .subscribe(
        /* happy path */ p => this.entries = p,
        /* error path */ e => this.errorMessage = e,
        /* onComplete */ () => this.isLoading = false);
  }
}
