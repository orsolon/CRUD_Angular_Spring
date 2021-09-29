import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name:'Angular', category: 'front-end'},
    {_id: '2', name:'React', category: 'front-end'},
    {_id: '3', name:'.Net', category: 'backend'},
  ];
  displayedColumns = ['name', 'category'];

  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
