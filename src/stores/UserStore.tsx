import { makeAutoObservable } from "mobx";

class User {
  userId;
  name;
  password;

  constructor(userId: any, name: any, password: any) {
    this.userId = userId;
    this.name = name;
    this.password = password;
  }
}

export class UserStore {
  rootStore: any;
  userList: any[] = [];

  constructor(rootStore: any) {
    makeAutoObservable(this);

    this.rootStore = rootStore;
    this.userList = [new User(1, "heyho", "1234")];
  }

  loginUser(name: string, password: string) {
    const idx = this.userList.findIndex((x) => x.name === name);
    if (idx !== -1) {
      if (this.userList[idx].password === password) {
        return true;
      } else {
        alert("wrong Password");
        return false;
      }
    } else {
      alert("who are you...?");
      return false;
    }
  }
}
