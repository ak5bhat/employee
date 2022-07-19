import { Component, Input, OnInit } from '@angular/core';
import { Format } from 'src/app/emp-format';

@Component({
  selector: 'app-emp-item',
  templateUrl: './emp-item.component.html',
  styleUrls: ['./emp-item.component.css']
})
export class EmpItemComponent implements OnInit {
  @Input() fo ?: Format;


  constructor() { }

  ngOnInit(): void {
  }

}
