import  {useContext} from 'react';
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../checkout-item/checkout-item.component';

const Checkout = () => {
    const {cartItems, addItemToCart} = useContext(CartContext);
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Qnt</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            <h1>
                I am the checkout page
            </h1>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))};
                <span className="total">Total</span>
        </div>
    );
};

export default Checkout;