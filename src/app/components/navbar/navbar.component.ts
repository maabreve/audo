import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
