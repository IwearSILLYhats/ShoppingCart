import useLocal from "./useLocal";

export default function localCart () {
    //init - check if cart exists in localstorage, creates it if not
    const [cart, setCart] = useLocal('cart', null);    
    //add -add to cart
    //update - update cart qty
    //remove - remove from cart
    //subtotal - adds (price * qty) for each item in cart
}