import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  toolbarItems: any[] = [
    { path: '/about-me', displayTitle: 'ABOUT ME' },
    { path: '/education', displayTitle: 'EDUCATION' },
    { path: '/experience', displayTitle: 'EXPERIENCE' },
    //'PROJECTS',
    //'CERTIFICATIONS',
    //'RESEARCH',
    //'AWARDS',
    //'BLOG',
    //'CV',
    //'CONTACT'
  ];
}
