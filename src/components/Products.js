import React, { Component } from "react";
import util from "../util";

export default class Products extends Component {
  render() {
    const productItems = this.props.products.map((product, index) => (
      <div className="col-md-4" key={index}>
        <div className="thumbnail text-center">
          <a
            href={`#${product.id}`}
            onClick={e => {
              this.props.handleAddToCart(e, product);
            }}
          >
            <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
          <div>
            <b>{util.formatCurrency(product.price)}</b>
            <button
              className="btn btn-primary"
              onClick={e => {
                this.props.handleAddToCart(e, product);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{productItems}</div>;
  }
}