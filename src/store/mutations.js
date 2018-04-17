const increment = state => {
  state.count = state.count + 5
}

const decrement = state => {
  state.count = state.count - 3
}

export default {
  increment,
  decrement
}
