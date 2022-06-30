import React, { useEffect, useState } from 'react';

//useEffect의 두 번째 인자는 useEffect가 감시하는 대상. 아무것도 넣어주지 않으면 마운트가 생성될 때와 업데이트 될 때 둘 다 불러오지만
//두 번째 인자에 빈 배열을 넣어주면 감시할 대상이 없어지기 때문에 처음 마운트 될 때만 호출이 된다.

const App2 = () => {

    const [ count, setCount ] = useState(1);
    const [ input, setInput ] = useState("");

    useEffect(()=>{
        //componentDidMount && componentDidUpdate
        console.log('렌더링 될 때 마다 useEffect 호출')
    })
    //useEffect에 두 번째 인자로 []을 넘겨주면 마운트 될 때만 호출됨
    //componentDidMount
    useEffect(()=>{
        console.log('처음 마운트 될 때만 useEffect 호출')
    },[])
    useEffect(()=>{
        console.log('배열요소안의 값이 업데이트 되면 useEffect 호출')
    },[count])

    const handleCount = ()=>{
        setCount(count+1);
    }
    const onChange = (e)=>{
        setInput(e.target.value);
    }





    return (
        <div>
            <button onClick={handleCount}>수정하기</button>
            <span>count: {count}</span>
            <input onChange={onChange} value={input} />

        </div>
    );
};

export default App2;