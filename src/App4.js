import React, { Component, useState, useEffect} from 'react';

const App4 = () => {
    //클래스 컴포넌트 보이기
    const [funcShow, setFuncShow ] = useState(true);
    return (
        <div>
            <h1>hello world</h1>
            <input type="button" value="클래스 컴포넌트 보이기/안 보이기" onClick={()=>{setFuncShow(!funcShow)}} />
            {funcShow && <ClassComp initNumber={2} />}
        </div>
    );
};

//class컴포넌트 만들기
class ClassComp extends Component {
    //state생성
    //props값을 state값으로 지정
    state = {
        number : this.props.initNumber,
        date : new Date().toLocaleTimeString(),

    }
    //렌더가 끝난 다음 실행사이클 메서드
    componentDidMount(){
        console.log("class형 컴포넌트 => componentDidMount");
    }
    //컴포넌트 Unmount되기 직전 실행사이클 메서드
    componentWillUnmount(){
        console.log("class형 컴포넌트 => componentWillUnmount")
    }
    render(){
        console.log("class형 컴포넌트 => render");
        return(
            <div className='container'>
                <h2>클래스 컴포넌트 입니다.</h2>
                <p>Number : <span> {this.state.number} </span></p>
                <p>Date : <span> {this.state.date} </span></p>
            </div>
        )
    }
}


export default App4;