import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    toolbarItems: string[] = [
        'ABOUT ME',
        'EDUCATION',
        'EXPERIENCE',
        //'PROJECTS',
        //'CERTIFICATIONS',
        //'RESEARCH',
        //'AWARDS',
        //'BLOG',
        //'CV',
        //'CONTACT'
    ];


}
