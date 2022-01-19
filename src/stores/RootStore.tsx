import { TodoStore } from "./TodoStore";
import { UserStore } from "./UserStore";

// 여러개의 store들을 import하여 아래와 같이 사용할 수 있다.
// 이곳에 작성된 store들은 뷰컴포넌트에서 rootStore에 접근하여 모두 사용 가능하다.
export class RootStore {
  todoStore: any;
  userStore: any;

  constructor() {
    this.todoStore = new TodoStore(this);
    this.userStore = new UserStore(this);
  }
}
