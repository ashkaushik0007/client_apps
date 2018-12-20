import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/index';
import { UserService } from '../../services/index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss',]
})
export class SidebarComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    
  }
}
