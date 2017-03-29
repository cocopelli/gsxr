import {Component, Output, EventEmitter, OnInit, Inject} from "@angular/core";
import {TerritoryEntry} from "./territory-entry";
import {TerritoryService} from "./territory.service";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'oz-territory-form',
  templateUrl: 'territory-form.component.html',
  styleUrls: ['territory-form.component.css']
})

export class TerritoryFormComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private territoryService: TerritoryService) {
  }


  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });

    console.log('da tut sich was');

    // (<FormControl>this.myForm.controls['name'])
    //   .setValue('', { onlySelf: true });
  }

  save(value: TerritoryEntry, isValid: boolean) {

    console.log(value, isValid);
    console.log('Antwort von POST: ', this.territoryService.postOne(value));
    this.territoryService.postOne(value
    );
  }
}
