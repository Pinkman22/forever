import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: false,
  
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})

export class FirstComponent {
  constructor(private router:Router){}

  
}
