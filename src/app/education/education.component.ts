import { Component } from '@angular/core';

import lodash from 'lodash';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  educations: any[] = [
    {
      id: 4,
      degree: 'Master of Applied Science (MASc)',
      institution: 'Concordia University,  Montreal, Quebec, Canada',
      faculty: 'Gina Cody School of Engineering and Computer Science',
      department: 'Concordia Institute for Information Systems Engineering',
      program: 'Master of Applied Science Quality Systems Engineering',
      passing_year: 'Ongoing',
      result: 'Yet to Publish',
    },
    {
      id: 3,
      degree: 'Bachelor of Science (BSc)',
      institution: 'American International University-Bangladesh (AIUB)',
      faculty: 'Faculty of Science and Technology',
      department: 'Department of Computer Science',
      program: 'Bachelor of Science in Computer Science & Engineering',
      passing_year: '2018 (December)',
      result:
        '3.95 out of 4.00, last two semesters GPA (by chronological order): 4.00/4.00 & 3.94/4.00',
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Govt. Rajendra College, Faridpur',
      area: 'Science',
      passing_year: '2013',
      result: 'GPA 5.00',
    },
    {
      id: 1,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Faridpur Zilla School, Faridpur',
      area: 'Science',
      passing_year: '2011',
      result: 'GPA 5.00',
    },
  ];

  processEducationData(education: any): any {
    const educationProcessed: unknown = lodash.cloneDeep(education);

    delete educationProcessed['degree'];
    delete educationProcessed['id'];

    return educationProcessed;
  }
}
