import { ICartItemsProps } from "src/types";
import {useDispatch,useSelector} from "react-redux"
import  {setShoppingCart}  from "src/store/actions/cart";
import Moment from "moment"
import React from "react";

const useModel = (props:ICartItemsProps) => {
    const dispatch = useDispatch()
    const [cartQty,setCartQty] = React.useState(0)
    const {dataIn,dataLoad, dataOut} = props
    const [total,setTotal] = React.useState(0)
    const action = dataIn?.action

    const cartItems = useSelector((state: any) => state?.cart?.cartItems);

    function numberWithCommas(x:any) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getQty = async () => {
        var tempTotal = 0
        var tempQty = 0
        if(cartItems?.data){
            const mapState = await cartItems?.data.map((cartItem:any )=> {
                tempTotal += cartItem?.quantity * cartItem?.price
                tempQty += cartItem?.quantity
            })
            setCartQty(tempQty)
            setTotal(tempTotal)
        }
    }
    const handleDataOut = () => {
        dataOut([...cartItems?.data,{total:total}])
    }
    const sortByDate = (items:any) => {
        if (items?.data) {
          items?.data.sort(function (a:any, b:any) {
            var c:any = Moment(new Date(a.dateAdded));
            var d:any = Moment(new Date(b.dateAdded));
            return c - d;
          });
          console.log(items)
          return items;
        }
      };
    
    React.useEffect( () => {
        dispatch(setShoppingCart(sortByDate(dataLoad)))
    },[props])

    React.useEffect( () => {
        getQty()
    },[cartItems])
    
    return {
        cartItems,
        cartQty,
        getQty,
        action,
        handleDataOut,
        total,
        numberWithCommas
    }
}

export default useModel