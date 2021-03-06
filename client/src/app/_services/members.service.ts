import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  route = environment.apiUrl + 'users';

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get<Member[]>(this.route)
  }

  getMember(username: string) {
    return this.http.get<Member>(this.route + '/' + username)
  }
}
