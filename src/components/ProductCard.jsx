import { Button } from "react-bootstrap"
// import { useShoppingCart } from "../context/ShoppingCartContext"
const ProductCard = ({ product_name, price, farmer_name, img }) => {
  // const {
  //   getItemQuantity,
  //   increaseCartQuantity,
  //   decreaseCartQuantity,
  //   removeFromCart,
  // } = useShoppingCart()
  // const quantity = getItemQuantity ? getItemQuantity(id) : 0;
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ">
      <img src={img} alt="item_image" className="w-[200px] h-[200px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-black my-10">
        {product_name}
      </p>

      <div className="flex flex-row">
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
            {price}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-black">
            {farmer_name}
          </p>
          <Button className="w-100 " style={{ background: '#6688AA', borderColor: '#6688AA', borderRadius: 10 }} >
              + Add To Cart
            </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard