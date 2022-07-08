import {Component, OnInit} from '@angular/core';
import {UserAccount} from '../../../model/UserAccount';
import {AdminService} from '../../../service/admin.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.scss']
})
export class PageUserComponent implements OnInit {
  totalElements: number = 0;
  users: UserAccount;
  loading: boolean;
  searchText;
  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getListRequest({page:0,size:15})
  }

  private getListRequest(request) {
    this.loading = true;
    this.adminService.pageUser(request).subscribe(data => {
      this.users = data['content'];
      console.log('data[content]--------', data['content']);
      this.totalElements = data['totalElements'];
      this.loading = false;
    },error => {
      this.loading=false;
    });
  }
  nextPage(event:PageEvent) {
    console.log('event=====', event);
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    console.log('request[size]=====', request['size']);
    this.getListRequest(request);
  }
}
