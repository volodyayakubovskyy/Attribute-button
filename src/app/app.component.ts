import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    color: new FormControl('primary'),
    size: new FormControl('default'),
    disabled: new FormControl(false),
    hasIcon: new FormControl(true),
  });
}
