import { CardProps } from "src/types";
import {useDispatch,useSelector} from "react-redux"
import  {setShoppingCart}  from "src/store/actions/cart";
import React from "react";

const useModel = (props:CardProps) => {
    const dispatch = useDispatch()
    const [cartQty,setCartQty] = React.useState(0)
    const {dataIn} = props
    const state = useSelector((state: any) => state?.cart?.cartItems);
    const getQty = async () => {
        if(state?.data){
            const mapState = await state?.data.map((res:any )=> {
                setCartQty((prevState) => prevState + res?.quantity)
                return res
            })
        }

    }
    React.useEffect( () => {
        dispatch(setShoppingCart(dataIn))
        getQty()
    },[state])
    

    return {
        state,
        cartQty,
        getQty
    }
}

export default useModel