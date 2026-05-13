import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity,
} from '../redux/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div>
      <div className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#plants">Plants</a>
          <a href="#cart">Cart</a>
        </div>
      </div>

      <div className="cart-container">
        <h1>Shopping Cart</h1>

        <h2>Total Cart Amount: ${totalAmount}</h2>

        {cartItems.map((item) => (
          <div
            className="cart-item"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
            />

            <div>
              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>Total Cost: ${item.totalPrice}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        type: 'decrease',
                      })
                    )
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        type: 'increase',
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  dispatch(removeItem(item.id))
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={() => alert('Coming Soon')}
        >
          Checkout
        </button>

        <button>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartItem;
