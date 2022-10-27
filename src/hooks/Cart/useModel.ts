export type Person = {
    name: string;
    age: number;
  };


const useModel = () => {

    const dummydata = [
        {
            title: "Product 1",
            description: "Best headphone",
            price: 120.00,
            quantity: 3,
            image: "https://i.pinimg.com/originals/0d/86/b1/0d86b14bb6503907498ebff62062ae12.png"
        },
        {
            title: "Product 2",
            description: "Best headphone 2",
            price: 100.00,
            quantity: 1,
            image: "https://www.nicepng.com/png/detail/151-1512944_red-headphone-png-image-background-beats-by-dr.png"
        }
    ]
    return {
        dummydata
    }
}

export default useModel