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

  useEffect(() => {
    const product = products.find((product: Product ) => product.id === productId);
    setProduct(product);
  }, [id]);
    
  console.log(product);

  //tow columns
  return (
    <div className="container mx-auto flex place-items-center my-36">
      <div
        className="flex flex-col w-1/2  rounded-lg  
      bg-zinc-300"
      >
        <h1 className="text-3xl font-extrabold p-2 m-6" >{product?.title}</h1>
        <div className="p-2 m-6  flex  gap-6"> 
          <img
            src={product?.authorImage}
            alt={product?.author}
            className="h-16 w-16 rounded-full object-cover object-top  "
          />
          <div className="flex flex-col space-y-2">

          <span className=" font-medium">{product?.author}</span>
          <span className="font-light"> {new Date(product?.dateOfPublication).toDateString()} </span>
          </div>
          
        </div>
        <p className="text-lg  p-2 m-6">
          {product?.desc}
        </p>
      </div>

      <div>right</div>
    </div>
  );
};

export default Item;
