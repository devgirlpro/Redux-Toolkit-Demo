const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('initial state =>', store.getState());

const unsubscribe = store.subscribe(() => {
    //logger middleware do this job
    // console.log('updated State =>', store.getState())
})

 store.dispatch(fetchUsers())

//  store.dispatch(cakeActions.ordered())
//  store.dispatch(cakeActions.ordered())
//  store.dispatch(cakeActions.ordered())
//  store.dispatch(cakeActions.restocked(8))


//  store.dispatch(icecreamActions.ordered())
//  store.dispatch(icecreamActions.ordered())
//  store.dispatch(icecreamActions.restocked(5))



 //unsubscribe()