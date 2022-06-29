import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  student!: Student;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    // First get the id from the current route.
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.studentService.find(id)
      .subscribe((student: Student) => {
      this.student = student;
    }, (error) => {
      console.log(error);
    });

  }

}
