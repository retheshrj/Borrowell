import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  public createUser(newUser) {
    console.log("service check");
    return this._http.post("/user", newUser);
  }

  public findUser(userID) {
    return this._http.get("/user/" + userID);
  }

  public loginUser(user) {
    return this._http.post("/login", user);
  }

  public logoutUser() {
    return this._http.get("/logout");
  }

  public getLogin() {
    return this._http.get("/login");
  }
}
