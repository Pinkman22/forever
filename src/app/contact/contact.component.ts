import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  constructor( private http: HttpClient) { }

  'fg': UntypedFormGroup;
  name_fc = new UntypedFormControl(null, Validators.required)
  email_fc = new UntypedFormControl(null, [Validators.required, Validators.email]);
  message_fc = new UntypedFormControl(null, Validators.required);

  ngOnInit() {
    this.fg = new UntypedFormGroup({
      name_db: this.name_fc,
      email_db: this.email_fc,
      message_db: this.message_fc,
    });
  }

  onSubmit() {
    
  }

  // sendDatatoServer(data:any) {
  //   this.http.post(' , data').subcribe( );
  // }
}
