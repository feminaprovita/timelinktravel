import axios from 'axios'

//action types
export const CREATED_ORDER = 'CREATED_ORDER'
export const COMPLETED_ORDER = 'COMPLETED_ORDER'
export const GOT_ORDERS_BY_USER = 'GOT_ORDERS_BY_USER'

//action creators
export const createdOrder = order => {
  return {
    type: CREATED_ORDER,
    order
  }
}

export const completedOrder = () => {
  return {
    type: COMPLETED_ORDER
  }
}

//thunk creators
export const createOrder = (userId = null) => {
  return async dispatch => {
    const order = {userId: userId}
    const {data} = await axios.post('/api/order', order)
    dispatch(createdOrder(data))
  }
}

export const completeOrder = order => {
  console.log(order) ///currently undefined
  console.log('IN COMPLETE ORDER THUNK CREATOR')
  return async dispatch => {
    console.log('IN THE COMPLETE ORDER THUNK')
    const {data} = await axios.put(`/api/order/${order.id}`, order)
    console.log('I THINK I WENT TO THE DATABASE FOR COMPLETE ORDER')
    dispatch(completedOrder(data))
  }
}

//initial state
const initialState = {
  activeOrder: {}
}

const order = (state = initialState, action) => {
  const newState = {...state}

  switch (action.type) {
    case CREATED_ORDER:
      newState.activeOrder = action.order
      return newState
    case COMPLETED_ORDER:
      newState.activeOrder = {}
      return newState
    default:
      return state
  }
}

export default order
