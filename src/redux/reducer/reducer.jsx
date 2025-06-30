
let initialState = {
    // 초기 상태를 정의합니다.
    count: 0,
    id: "", // 로그인 상태를 저장할 변수입니다.
    password: "" // 로그인 상태를 저장할 변수입니다.
}

function reducer(state=initialState,action) {
    // state는 현재 상태를 나타내고, action은 상태를 변경하기 위한 정보를 담고 있습니다.
    // action의 type에 따라 상태를 변경합니다.
    // action을 받았으면, 반드시 새로운 상태를 반환해야 합니다.
    console.log("action은 뭘까?", action.type);


    if (action.type === "INCREMENT") {
        // count를 증가시키는 액션
        return {
            ...state, // 현재 상태를 복사합니다.
            //count: state.count + 1, // count를 1 증가시킵니다.
            count: state.count + (action.payload?.num || 1) // count를 action.payload.num만큼 증가시킵니다. 기본값은 1입니다.
        }
    } else if 
        (action.type === "DECREMENT") {
            
            console.log("감소", action.payload)
            
            return {
                ...state, // 현재 상태를 복사합니다.
                count: state.count - (action.payload?.num || 1) // count를 action.payload.num만큼 감소시킵니다. 기본값은 1입니다.
            }
    }

    //이런 방법도 있다.
    /**
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1} // count를 1 감소시킵니다.
        default:
            return {...state} // 현재 상태를 그대로 반환합니다. (기본값)
    }
     */

    if (action.type === "LOGIN") {
        // 로그인 액션
        return {
            ...state,
            id: action.payload.id, // 로그인 상태를 저장합니다. payload에 name이 들어있다고 가정합니다.
            password: action.payload.password // 로그인 상태를 저장합니다. payload에 name이 들어있다고 가정합니다.
        }
    }


    return {...state} // 현재 상태를 그대로 반환합니다. (기본값)
}

export default reducer;