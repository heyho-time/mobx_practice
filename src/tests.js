// import React, { Component } from "react";
// import styled from "styled-components";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";

// @observer /*observer는 앞으로 거의 모든 컴포넌트에 사용하게 될 것이다. observer는 mobx.autorun라는 함수를 가지고 컴포넌트의 render함수를 감싸게 되면서, observable한 데이터가 변경될 때마다 observer가 선언된 컴포넌트는 재 렌더링하게 해준다.
// 모든 컴포넌트에서 observer를 사용하는것이 어플리케이션의 속도를 늦춘다고 걱정할 수도 있지만, mobx에서 이를 최적화하기 때문에 걱정할 필요는 없다. 가급적 모든 컴포넌트에 observer를 사용하는 것이 좋다.*/
// class Login extends Component {
//   @observable email = "";
//   @observable passwords = "";
//   /*mobx를 사용하게 되면 더이상 setState를 사용하지 않고 observable한 데이터를 직접 조작할 수 있게 된다. setState는 비동기적(asynchronous)으로 처리되기 때문에 가끔 react로만 프로젝트를 진행하다 보면 데이터가 변경되었는데도 렌더링이 즉각적으로 반영되지 않아 곤란할 때가 있었을 것이다. 변수에 observable선언만 해주면 이를 해결해줄 수 있고, 좀 더 사용이 간편하다. */
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   render() {
//     const { email, password } = this;

//     return (
//       <div className="App">
//         <header>Login</header>
//         <Input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={this.onChange}
//           value={email}
//           fluid
//         />
//         <Input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={this.onChange}
//           value={password}
//           fluid
//         />
//         <button onClick={this.onSubmit}>Submit</button>
//       </div>
//     );
//   }

//   @action.bound
//   onChange(event) {
//     const { name, value } = event.target;
//     this[name] = value;
//   }

//   onSubmit() {
//     const { email, password } = this;
//     console.log("결과확인 : ", email, password);
//   }
// }

// export default Login;

// const Input = styled.input`
//   display: flex;
//   margin: 10px 0;
// `;

// import React from "react";
// import ReactDOM from "react-dom";
// import { makeAutoObservable } from "mobx";
// import { observer } from "mobx-react-lite";

// class Timer {
//   secondsPassed = 0;

//   constructor() {
//     makeAutoObservable(this);
//   }

//   increaseTimer() {
//     this.secondsPassed += 1;
//   }
// }

// const myTimer = new Timer();

// // `observer`로 감싸진 함수 컴포넌트는
// // 이전에 사용했던 observable의 향후 변경 사항에 반응합니다.
// const TimerView = observer(({ timer }) => (
//   <span>Seconds passed: {timer.secondsPassed}</span>
// ));

// ReactDOM.render(<TimerView timer={myTimer} />, document.body);

// setInterval(() => {
//   myTimer.increaseTimer();
// }, 1000);

// export default Timer;

import React, { Component } from "react";
import { makeObservable, observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  number = 0;

  constructor() {
    super();
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });
  }

  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default Counter;
