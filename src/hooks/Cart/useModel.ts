import { CardProps } from "src/types";
import {useDispatch,useSelector} from "react-redux"
import  {setShoppingCart}  from "src/store/actions/cart";
import React from "react";

const useModel = (props:CardProps) => {
    const dispatch = useDispatch()
    const [cartQty,setCartQty] = React.useState(0)
    const {dataIn,dataLoad, dataOut} = props
    const [total,setTotal] = React.useState(0)
    const action = dataIn?.action

    const state = useSelector((state: any) => state?.cart?.cartItems);
    const getQty = async () => {
        if(state?.data){
            const mapState = await state?.data.map((res:any )=> {
                setTotal((prevState) => prevState + res?.quantity * res?.price)
                setCartQty((prevState) => prevState + res?.quantity)
                return res
            })
        }

    }

    const handleDataOut = () => {
        dataOut([...state?.data,{total:total}])
    }
    React.useEffect( () => {
        dispatch(setShoppingCart(dataLoad))
        getQty()
    },[state])
    

    return {
        state,
        cartQty,
        getQty,
        action,
        handleDataOut,
        total
    }
}

export default useModel