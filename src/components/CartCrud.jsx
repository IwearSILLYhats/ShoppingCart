import { useState } from "react"

export default function CartCrud ({cart, setCart, product}) {
    return (
        <div>
            <button 
            onClick={() =>{
                if(cart.find((e) =>{
                    return e.id === product.id
                }) && product.quantity > 1){
                    setCart(cart.map((e)=>{
                        if(e.id === product.id){
                            return {...e, quantity: product.quantity-= 1}
                        }
                        return e
                    }))
                }
            }}>{"<"}</button>
            <input 
            type="text" 
            value={product.quantity} 
            onChange={(j) => {
                setCart(cart.map((e) => {
                if(e.id === product.id){
                    return {...e, quantity: parseInt(j.target.value)}
                }
                return e
            }))}} />
            <button
            onClick={() =>{
                if(cart.find((e) =>{
                    return e.id === product.id
                })){
                    setCart(cart.map((e)=>{
                        if(e.id === product.id){
                            return {...e, quantity: product.quantity += 1}
                        }
                        return e
                    }))
                }
            }}
            >{">"}</button>
        <button className="remove" onClick={() => {
            setCart(cart.filter((j) => {
                return j.id !== product.id
            }))
        }}>Delete Item</button>
        </div>
    )
}