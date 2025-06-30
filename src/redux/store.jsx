//store를 만들어주는 마법의 단어...?
import { createStore } from 'redux'
import reducer from './reducer/reducer.jsx'

// 앱의 상태를 보관하는 Redux 저장소를 만듭니다.
// API로는 { subscribe, dispatch, getState }가 있습니다.
let store = createStore(reducer)


export default store