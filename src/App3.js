import React, { useState } from 'react';
import Timer from './Component/Timer';

const App3 = () => {
    const [ showTimer, setShowTimer ] = useState(false);

    //&& 연산자는 true일 때만 다음을 읽어나가기 때문에 showTimer가 false라면 거기서 멈춰 <Timer />를 읽지 않는다 == showTimer가 true일 때만 <Timer />가 화면에 그려진다.
    return (
        <div>
            { showTimer && <Timer />}
            <button onClick={()=>{ setShowTimer(!showTimer)}}>Timer</button>
        </div>
    );
};

export default App3;   