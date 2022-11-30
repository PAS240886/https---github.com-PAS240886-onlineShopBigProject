import  {useContext} from 'react';
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const {cartItems, addItemToCart} = useContext(CartContext);
    return (
        <div>
            <h1>
                I am the checkout page
            </h1>
            <div>
                {cartItems.map((cartItem) => {
                    const {Id, quantity, name} = cartItem;
                    
                    return (
                    
                    <div key={id}>
                        <h2>name</h2>
                        <span>quantity</span>
                        <span>Decrement</span>
                        <span onClick={()=>addItemToCart(cartItem)}>Increment</span>
                    </div>
                    
                    );
                })};
            </div>
        </div>
    );
};

export default Checkout;