/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import FetchProducts, { Product } from "@/api/products";

const Item = () => {
  const router = useRouter();
  const products = FetchProducts();
  const [product, setProduct] = React.useState<any>([]);
  const { id } = router.query;
  const productId = parseInt(id as string);
  // const [quantity, setQuantity] = React.useState(1);

  useEffect(() => {
    const product = products.find(
      (product: Product) => product.id === productId
    );
    setProduct(product);
  }, [id]);

  console.log(product);

  //tow columns
  return (
    <div className="container mx-auto grid grid-cols-2 place-items-center my-36">
      <div
        className="flex flex-col rounded-xl bg-zinc-300 h-full justify-around "
      >
        <h1 className="text-3xl font-bold p-2 m-6">{product?.title}</h1>
        <div className="p-2 mx-6  flex  gap-6">
          <img
            src={product?.authorImage}
            alt={product?.author}
            className="h-16 w-16 rounded-full object-cover object-top  "
          />
          <div className="flex flex-col space-y-2">
            <span className=" font-medium">{product?.author}</span>
            <span className="font-light">
              {" "}
             Published Date:  {new Date(product?.dateOfPublication).toDateString()}{" "}
            </span>
          </div>
        </div>
        <p className="text-lg  p-2 m-6">{product?.desc}</p>
      </div>

      <div className=" rounded-xl h-full bg-red flex flex-col justify-between space-y-10">
        <div
          className="flex flex-col place-items-center justify-center  rounded-lg h-64 w-64 
          bg-gray-100 shadow-lg  
           "
        >
          {product.image && (
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover object-top rounded-lg "
            />
          )}
        </div>
        <div className="space-y-2 ">
          <p className="text-2xl "> Price: ${product?.price} </p>
          <p className="text-2xl "> Quantity: 1 </p>
        </div>
        <button className=" w-full bg-sky-600 text-white text-lg p-4 rounded-lg "     >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
