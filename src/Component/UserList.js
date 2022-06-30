import React, { useEffect } from 'react';
import './UserStyle.css'

const User = ({user, onDelete, onToggle})=>{
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return ()=>{
            console.log('컴포넌트가 화면에서 사라짐')
        }
    },[])


    //&&: and연산자는 모든값이 true일 때 구문을 읽어내린다. user.active가 true면 뒤에까지 읽기 때문에 className에 active가 할당된다.
    //className={ user.active && 'active' } 
    return (
        <div>
            <span className={user.active ? "active" : ""} onClick={()=>{ onToggle(user.id)}}>
                유저네임 : {user.username}
                이메일 : {user.email}
            </span>
            <button onClick={()=>{
                onDelete(user.id);
            }}>삭제</button>
        </div>
    )
}
//App에서 보내준 props들을 여기서 받아야 밑에 JSX에서 부를 수 있다. JSX구문과 javascript구문을 잘 구별 할 것.
const UserList = ({users, onDelete, onToggle}) => { //App 에서 보내준 props
    return (
        <div>
            {users.map(user=>(<User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle} />))}
        </div>
    );
};

export default UserList;