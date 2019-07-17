import React, { Component } from "react";
import util from "../util";

export default class Basket extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>You have {cartItems.length} products in the basket</div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <b>{item.title}</b> X {item.count} = {item.price * item.count}
                  <button
                    className="btn btn-danger"
                    onClick={e => this.props.handleRemoveFromCart(e, item)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
            Total:{" "}
            {util.formatCurrency(
              cartItems.reduce((a, b) => a + b.price * b.count, 0)
            )}
          </div>
        )}
        <button
          className="btn btn-primary"
          onClick={() => alert("checkout needs to be implement")}
        >
          Checkout
        </button>
      </div>
    );
  }
}
