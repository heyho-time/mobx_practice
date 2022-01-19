import { makeAutoObservable, makeObservable, observable, action } from "mobx";

class Todo {
  id;
  content;
  rate;
  name;

  constructor(id: any, content: any, rate: any, name: string) {
    this.id = id;
    this.content = content;
    this.rate = rate;
    this.name = name;
  }
}

//클래스형으로 작성
export class TodoStore {
  rootStore: any;
  //변화를 감지할 배열 변수
  todos: any[] = [];

  constructor(root: any) {
    //구독할 변수와 action함수 지정
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      deleteTodo: action,
      changeRate: action,
    });
    // makeAutoObservable(this); //this를 쓰면 위처럼 하나씩 지정해줄 필요없고 데코레이터도 필요없다.
    //어떤 원리일까,..?

    this.rootStore = root;

    this.todos = [new Todo(1, "fd", 3, "gd")]; //initial state 설정하는 곳. 근데 왜 안될까,..
  }

  // action
  addTodo(content: string, rate: Number, name: string) {
    if (this.todos.length === 0) {
      this.todos = [new Todo(1, content, 0, name)];
    } else {
      this.todos = [
        ...this.todos,
        new Todo(this.todos[this.todos.length - 1].id + 1, content, rate, name),
      ];
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((x) => x.id !== id);
  }

  changeRate(id: Number, rate: Number, name: string) {
    const idx = this.todos.findIndex((x) => x.id === id);
    const todo = this.todos[idx];

    this.todos = [
      ...this.todos.slice(0, idx),
      new Todo(todo.id, todo.content, rate, name),
      ...this.todos.slice(idx + 1, this.todos.length),
    ];
  }
}
