import { Component } from '@angular/core';

@Component({
    selector: 'education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent {
    educations: any[] = [
        {
            id: 4,
            title: 'Master of Applied Science (MASc)',
            institution: 'Concordia University,  Montreal, Quebec, Canada',
            area: 'Quality Systems Engineering',
            passingYear: 'Ongoing',
            result: 'Yet to Publish'
        },
        {
            id: 3,
            title: 'Bachelor of Science (B.Sc.)',
            institution: 'American International University-Bangladesh (AIUB)',
            area: 'Computer Science & Engineering (CSE)',
            passingYear: '2018 (December)',
            result: '3.95 out of 4.00, last two semesters GPA (by chronological order): 4.00/4.00 & 3.94/4.00'
        },
        {
            id: 2,
            title: 'Higher Secondary Certificate (HSC)',
            institution: 'Govt. Rajendra College, Faridpur',
            area: 'Science',
            passingYear: '2013',
            result: 'GPA 5.00'
        },
        {
            id: 1,
            title: 'Secondary School Certificate (SSC)',
            institution: 'Faridpur Zilla School, Faridpur',
            area: 'Science',
            passingYear: '2011',
            result: 'GPA 5.00'
        }
    ];
}
