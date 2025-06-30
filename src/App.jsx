import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import Box from './components/Box.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const count = useSelector(state=> state.count) // useSelector는 상태를 가져오는 함수입니다. state는 현재 상태를 나타냅니다.
  let id = useSelector(state => state.id) // 로그인 상태를 가져옵니다.
  let password = useSelector(state => state.password) // 로그인 상태를 가져옵니다.


  const increase = () => {
    // dispatch는 액션을 보내는 함수입니다.
    // 액션은 특이한거 없이, 그냥 객체(오브젝트)를 이야기합니다.
    // 액션은 반드시 type이라는 속성을 가지고 있어야 합니다.
    // 그리고 과 payload라는 선택적 속성을 가질 수 있습니다.
    dispatch({type:"INCREMENT",payload:{num:5}}) // 액션을 보냅니다. 그리고 그 다음 작업은 reducer가 합니다.
    //payload는 함수에서 매개변수같은 역할을 합니다. 필요한 정보를 담아서 보낼 수 있습니다.
    //setCount(count + 1)
  }

  const decrement = () => {
    dispatch({type:"DECREMENT", payload:{num:1}})
  }

  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"홍길동",password:"1234"}}) // 로그인 액션을 보냅니다.
  }

  return (
   <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={login}>로그인_예시</button>  
      <Box/>
      <h3>깃테스트할꺼야...!!!</h3>
   </div>
  )
}

export default App
