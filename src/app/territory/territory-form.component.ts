import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {TerritoryEntry} from "./territory-entry";
import {TerritoryService} from "./territory.service";
import {Response} from "@angular/http";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'oz-territory-form',
  templateUrl: 'territory-form.component.html',
  styleUrls: ['territory-form.component.css']
})

export class TerritoryFormComponent implements OnInit {

  public terriForm: FormGroup;
  public territoryEntry: TerritoryEntry;

  constructor(private territoryService: TerritoryService,
              private _formBuilder: FormBuilder) {
  }

  @Output() entryCreated = new EventEmitter();

  ngOnInit() {
    this.terriForm = this._formBuilder.group({
      name: ['', [<any>Validators.required]]
    });
  }

  // saveTerritory() {
  //   console.log('save this shit', this.territory);
  //   this.territoryService
  //     .save(this.territory)
  //     .subscribe(
  //       (r: Response) => {
  //         console.log('gesaved');
  //       }
  //     );
  // }

  saveTerritory() {
    console.log('der formGroup', this.terriForm);
    console.log('geht zum speichern: ', this.territoryEntry);
    this.territoryService
      .save(this.territoryEntry)
      .subscribe(
        (r: Response) => {console.log('Raus per POST')}
      );
  }

}
