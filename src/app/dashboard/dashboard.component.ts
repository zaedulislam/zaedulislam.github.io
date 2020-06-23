import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    toolbarItems: string[] = [
        'About Me',
        'Education',
        'Experience',
        'Projects',
        'Certifications',
        'Research',
        'Awards',
        'Blog',
        'CV',
        'Contact'
    ];


}
