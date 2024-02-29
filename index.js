const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;

console.log('initial state =>', store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('updated State =>', store.getState())
})


store.dispatch(icecreamActions.ordered())

 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())
 store.dispatch(cakeActions.ordered())

 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.ordered())
 store.dispatch(icecreamActions.restocked(4))



 store.dispatch(cakeActions.restocked(5))