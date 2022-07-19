import { Component, OnInit } from '@angular/core';
import { Format } from 'src/app/emp-format';
import { EmpService } from 'src/app/service/emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  format: Format[]=[];
  constructor(private empService: EmpService ) { }

  ngOnInit(): void {
    this.empService
        .getEmp()
        .subscribe((format)=>(
          this.format = format
        ));
  }
  
  


}
