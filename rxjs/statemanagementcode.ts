import $ from "jquery";

import { BehaviorSubject } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

interface CartItem {
  name: string;
  quantity: number;
  id: number;
}

interface CartState {
  items: [];
}

const initialState: CartState = {
  items: []
};

export class CartStore {
  _cartState = new BehaviorSubject<CartState>(initialState);

  get state() {
    return this._cartState.getValue();
  }

  setState(newCartState: CartState) {
    this._cartState.next(newCartState);
  }

  get state$() {
    return this._cartState.asObservable();
  }

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

  updateCartItem(cartItemToUpdate: CartItem) {
    console.log("[cart Item] Update");
    logLine();
    logState("Previous", this.state);
    const newState = {
      ...this.state,

      items: this.state.items.map((item: CartItem) =>
        item.id === cartItemToUpdate.id ? cartItemToUpdate : item
      )
    } as CartState;

    this.setState(newState);
    logState("Current", this.state);
    logLine();
  }
}

function logLine() {
  console.log(`----------------------------------------`);
}

function logState(which, state) {
  console.log(`${which} State`, state);
}

const cartStore = new CartStore();

const cartItemCount$ = cartStore.state$.pipe(
  map(s => s.items.length),
  distinctUntilChanged()
);

export function addItem() {
  cartStore.addCartItem({
    name: "apple",
    quantity: 2,
    id: 1
  });
}

export function updateItem() {
  cartStore.updateCartItem({
    name: "apple",
    quantity: 7,
    id: 1
  });
}

$(() => {
  $("#add-item").on("click", addItem);
  $("#update-item").on("click", updateItem);
  cartItemCount$.subscribe(count => console.log("Cart Item Count is: ", count));
});
