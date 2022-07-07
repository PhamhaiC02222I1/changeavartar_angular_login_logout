import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  avatar:string;
  constructor(private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.avatar=this.tokenService.getAvatar();
    }
  }
logOut(){
// this.tokenService.logOut();
  window.sessionStorage.clear();
  this.router.navigate(['']).then(()=>{
    window.location.reload();
  })
}
}
