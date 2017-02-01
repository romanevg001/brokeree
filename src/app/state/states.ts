// import {Reducer} from "./reducer"
let reducer: Reducer<number> = (state: number, action: Action) => { 
    switch (action.type) {
        case 'INCREMENT':
            return state + 1; 
        case 'DECREMENT':
            return state - 1; 
        case 'PLUS':
            return state + action.payload;
        default:
            return state; // <-- dont forget! 
        }
}

let incrementAction: Action = { type: 'INCREMENT' }; 
console.log(reducer(0, incrementAction)); // -> 1 console.log(reducer(1, incrementAction)); // -> 2
let decrementAction: Action = { type: 'DECREMENT' }; 
console.log(reducer(100, decrementAction)); // -> 99
// any other action just returns the input state
let unknownAction: Action = { type: 'UNKNOWN' }; 
console.log(reducer(100, unknownAction)); // -> 100

console.log( reducer(3, { type: 'PLUS', payload: 7}) );


let store = new Store<number>(reducer, 0);
 console.log(store.getState());

 store.dispatch({ type: 'INCREMENT' });
 console.log(store.getState());


 // subscribe
let unsubscribe = store.subscribe(() => { 
    console.log('subscribed: ', store.getState());
});
store.dispatch({ type: 'INCREMENT' }); // -> subscribed: 1
store.dispatch({ type: 'INCREMENT' });