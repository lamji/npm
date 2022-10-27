import { CardProps } from "src/types";
import {useDispatch,useSelector} from "react-redux"
import  {setShoppingCart}  from "src/store/actions/cart";

const useModel = (props:CardProps) => {
    const dispatch = useDispatch()
    const {dataIn} = props
    console.log(dataIn)
    dispatch(setShoppingCart(dataIn))

    
    return {
        
    }
}

export default useModel