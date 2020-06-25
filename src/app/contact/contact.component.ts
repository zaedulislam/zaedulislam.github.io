import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    contacts = {
        emails: [
            { work: 'zaedul.islam@enosisbd.com' },
            { personal: 'islam.zaedul@gmail.com' }
        ],
        skype: 'islam.zaedul',
        linkedIn: 'Zaedul Islam',
        phone: '+8801824844655',
        location: 'Dhaka, Bangladesh'
    };
}
