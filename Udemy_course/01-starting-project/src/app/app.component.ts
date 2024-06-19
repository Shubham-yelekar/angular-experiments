import { Component } from '@angular/core';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',  // Corrected templateUrl
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponentComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserId = 'u1'
  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!
  }

  onSelectUser(id:string){
    console.log('selected user with id ' + id)
  }
}
