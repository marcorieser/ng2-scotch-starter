import {Component} from '@angular/core';
import {User} from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    message: string = 'Hello!';

    users: User[] = [
        {id: 25, name: 'User1', username: 'user1'},
        {id: 26, name: 'User2', username: 'user2'},
        {id: 27, name: 'User3', username: 'user3'}
    ];

    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}
