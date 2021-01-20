import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {

selectedEmployee: Employee;

employees: Employee[];

  constructor(
  private employeeService: EmployeeService,
  private messageService: MessageService
              ) { }

    ngOnInit() {
    this.getEmployees();
    }


    onSelect(employee: Employee): void {
      this.selectedEmployee = employee;
      this.messageService.add(employee.name + ' selected');
   }


  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

}
