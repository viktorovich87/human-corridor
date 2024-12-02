import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import mainReducer from './reducers/mainReducer'

const combinedReducer = combineReducers({
  mainReducer
})

const masterReducer = (state, action) => {
    return combinedReducer(state, action);
}

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(
    applyMiddleware()
  ))
}

export const wrapper = createWrapper(initStore)
