State management in Angular using rxjs:
https://www.youtube.com/watch?v=DuwI4EKQznE&list=PLw5h0DiJ-9PC4DS4ZJ8QA8mY1W9-mhYdM&index=1

// how to achieve push based architecture:

// Below are 4 simple steps we will follow:

// 1. First design the state that you want.
// 2. Wrap the state under Behaviour Subject.
// 3. Write Pure Functions to change the state.
// 4. Create selectors(observables) to subscribe change of state.

// Modeling shopping cart using push based architecture.

// Defining the state | Shopping cart state | Step 1

interface CartItem {
    name: string;
    quantity: number;
    id: number;
}

// Cart State

interface CartState {
    items: [];
}

// Cart Initial State

const initialState: CartState = {
    items: []
}


// Creating BehaviorSubject | Cart Store | Step 2

export class CartStore {
    _cartState = new BehaviorSubject<CartState>(initialState);

    get state() {
        return this._cartState.getValue();
    }

    setState(newCartState: CartState){
        this._cartState.next(newCartState);
    }

    get state$() {
        return this._cartState.asObservable();
    }
}


// Writing Pure Functions For State Change | Cart Store | Step 3

// Add Cart Item Method 

addCartItem(newCartItem: CartItem) {
    console.log("[cart Item] Add");
    logLine();
    logState("Previous", this.state);

    const newState = {
        ...this.state,

        items: [].concat(this.state.items, newCartItem)
    } as CartState;

    this.setState(newState);
    logState("Current", this.state);
    logLine();
}

function logLine() {
    console.log(`-----------------------`);
}

function logState(which, state){
    console.log(`${which} State`, state);  
}

// In the get state$() we are converting as observable, so anywhere where this is observable is subscribed they will get the new values
// whenever a new item is pushed to the subject, now these new items might or might not be needed, so we can add a check using pipe and
// map operators, as shown below.


// Creating Selectors to subscribe change of state | Cart Store | Step 4

const cartItemCount$ = cartstore.state$.pipe(
    map(s => s.items.length),
    distinctUntilChanged()
);

