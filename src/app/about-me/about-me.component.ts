import { Component } from '@angular/core';

@Component({
    selector: 'about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
    professionalProfiles: any[] = [
        {
            name: 'linkedIn',
            url: '',
            icon: '',
            description: ''
        },
        {
            name: 'github',
            url: '',
            icon: '',
            description: ''
        },
        {
            name: 'kaggle',
            url: '',
            icon: '',
            description: ''
        },
        {
            name: 'stackOverflow',
            url: '',
            icon: '',
            description: ''
        },
        {
            name: 'medium',
            url: '',
            icon: '',
            description: ''
        }
    ];
}
