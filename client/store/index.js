import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import destination from './destination'
import user from './user'

const rootReducer = combineReducers({
  destination,
  user
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(rootReducer, middleware)

export default store
export * from './user'
export * from './destination'
