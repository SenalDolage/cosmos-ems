import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/types';
import employees from './data/employees.json';

@Component({
  selector: 'ems-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})

export class EmployeesComponent implements OnInit {
  title: string = 'Cosmos Employee Management Solution';
  employees: Employee[] = employees;
  filteredEmployees: Employee[] = employees;
  showIcon: boolean = true;
  message: string ='';
  private _designationFilter: string = '';

  set designationFilter(value: string) {
    this._designationFilter = value;
    this.filterByDesignation();
  }

  get designationFilter(): string {
    return this._designationFilter;
  }

  constructor() {}

  ngOnInit(): void {}

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

  filterByDesignation() {
    this.filteredEmployees = this.employees.filter((item) =>
      item.designation.includes(this._designationFilter)
    );
  }

  onMessageReceived(value: string){
    this.message = value;
  }
}
