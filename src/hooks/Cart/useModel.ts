import { CartItemsProps } from "src/types";
import {useDispatch,useSelector} from "react-redux"
import  {setShoppingCart}  from "src/store/actions/cart";
import React from "react";

const useModel = (props:CartItemsProps) => {
    const dispatch = useDispatch()
    const [cartQty,setCartQty] = React.useState(0)
    const {dataIn,dataLoad, dataOut} = props
    const [total,setTotal] = React.useState(0)
    const action = dataIn?.action

    const CartItems = useSelector((state: any) => state?.cart?.cartItems);

    function numberWithCommas(x:any) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getQty = async () => {
        var tempTotal = 0
        var tempQty = 0
        if(CartItems?.data){
            const mapState = await CartItems?.data.map((cartItem:any )=> {
                tempTotal += cartItem?.quantity * cartItem?.price
                tempQty += cartItem?.quantity
            })
            setCartQty(tempQty)
            setTotal(tempTotal)
        }
    }
    const handleDataOut = () => {
        dataOut([...CartItems?.data,{total:total}])
    }
    
    React.useEffect( () => {
        dispatch(setShoppingCart(dataLoad))
    },[props])

    React.useEffect( () => {
        getQty()
    },[CartItems])
    
    return {
        CartItems,
        cartQty,
        getQty,
        action,
        handleDataOut,
        total,
        numberWithCommas
    }
}

export default useModel