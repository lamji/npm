export interface CardProps {
    dataOut: (i:any) => void,
    dataLoad: {
      data?: { [key: string]: any }[];
    }
    dataIn: {
      action?: {
        shoplink: () => void,
        decreaseQty: (i:any) => void,
        increaseQty: (i:any) => void,
        removeItems: (i:any) => void 
      }
    }  
  }