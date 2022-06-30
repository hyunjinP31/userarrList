
import './App.css';
import UserList from './Component/UserList';
import { useState, useRef, useReducer } from 'react';
import CreateUser from './Component/CreateUser';

 //useReducer에 들어갈 초깃값
const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
        id:1,
        username: 'green',
        email: 'green@gmail.com',
        active: false,
    },
    {
        id:2,
        username: 'blue',
        email: 'blue@gmail.com',
        active: false,
    },
    {
        id:3,
        username: 'yellow',
        email: 'yellow@gmail.com',
        active: false,
    }
  ],
}
function reducer(state, action){
  switch(action.type){
    case "CHANGE_INPUT":
        return {
          ...state,
          //input만 다시 업데이트를 해주겠다. name이 같으면 제일 뒤에 있는 애로 출력이 되기 때문에 스프레드 구문을 써서 관리한다.
          inputs: {
            ...state.inputs,
            [action.name]: action.value,
          }
        };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user), //원본배열에서 뒤에 하나를 더하겠다. (스프레드 구문으로 써도 되고 이건 concat배열 메서드 쓴 거)
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user=> user.id !== action.id),
      };
    case "ACTIVE_USER":
      return {
        ...state,
        users: state.users.map(user=>
          user.id === action.id ? {...user, active: !user.active} : user )
      };
    default:
      return state;
  }
}



function App() {

  //useReducer로 상태관리
  const [state, dispatch] = useReducer(reducer, initialState);

  //useReducer가 가지고 있는 초깃값 객체를 이용해 구조분해할당을 해준 것.
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = (e)=>{
    const {name, value } = e.target;
    dispatch({
      type:"CHANGE_INPUT",
      name: name,
      value: value,
    })
  }
  const onCreate = ()=>{
    dispatch({
      type:"CREATE_USER",
      user: {
        id: nextId.current,
        username: username,
        email: email,
      }
    })
    nextId.current += 1;
  }
  const onDelete = (id)=>{
    dispatch({
      type: "DELETE_USER",
      id: id,
    })
  }
  const onToggle = (id)=>{
    dispatch({
      type: "ACTIVE_USER",
      id: id,
    })
  }
  
  const nextId = useRef(4);

  return (
    <div className="App">
        <CreateUser email={email} username= {username} onChange={onChange} onCreate={onCreate}></CreateUser>
        <UserList users={users} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
