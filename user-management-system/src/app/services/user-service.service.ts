import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<IUser> {
    const getUserByIdUrl = `${this.apiUrl}/${userId}`;
    return this.http.get<IUser>(getUserByIdUrl);
  }

  addUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  editUser(user: IUser, userId: number): Observable<IUser> {
    const editUrl = `${this.apiUrl}/${userId}`;

    return this.http.put<IUser>(editUrl, user);
  }

  deleteUser(userId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${userId}`;
    return this.http.delete(deleteUrl);
  }
}
