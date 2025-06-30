import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {

    let count = useSelector(state => state.count) // useSelector는 상태를 가져오는 함수입니다. state는 현재 상태를 나타냅니다.
    let id = useSelector(state => state.id) // 로그인 상태를 가져옵니다.
    let password = useSelector(state => state.password) // 로그인 상태를 가져옵니다.

  return (
    <div>
        <h1>{count}</h1>
        <h1>id : {id}</h1>
        <h1>password : {password}</h1>
    </div>
  )
}

export default Box