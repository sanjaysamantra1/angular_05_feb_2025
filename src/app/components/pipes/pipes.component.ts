import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdinalPipe } from '../../ordinal.pipe';
import { RomanPipe } from '../../roman.pipe';
import { AgePipe } from '../../age.pipe';
import { SalutationPipe } from '../../salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,OrdinalPipe,RomanPipe,AgePipe,SalutationPipe],
  
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  employees = [
    { name: 'John Doe', gender: 'Male', position: 'Software Engineer' },
    { name: 'Alice Smith', gender: 'Female', position: 'Project Manager' },
    { name: 'Robert Brown', gender: 'Male', position: 'DevOps Engineer' },
    { name: 'Sophia Wilson', gender: 'Female', position: 'Data Scientist' },
    { name: 'David Johnson', gender: 'Male', position: 'Business Analyst' },
    { name: 'Emma Thomas', gender: 'Female', position: 'UX Designer' },
    { name: 'Michael White', gender: 'Male', position: 'Cybersecurity Specialist' },
    { name: 'Olivia Martinez', gender: 'Female', position: 'Product Manager' },
    { name: 'Daniel Lee', gender: 'Male', position: 'Cloud Architect' },
    { name: 'Charlotte Taylor', gender: 'Female', position: 'HR Manager' }
  ];
}
