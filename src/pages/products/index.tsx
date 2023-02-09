/* eslint-disable @next/next/no-img-element */
import React from "react";
import FetchProducts from "../../api/products";
import Image from "next/image";
import Link from "next/link";

function Products() {
  const products = FetchProducts();
  console.log(products);

  return (
    <div className="container mx-auto grid grid-cols-3 place-items-center gap-16 my-36">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/item/${product.id}`}
          className="relative"
        >
          <div
            className="flex flex-col place-items-center justify-center  rounded-lg h-64 w-64 
          bg-gray-100 shadow-lg  group
           "
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover object-top rounded-lg hover:shadow-xl duration-300  absolute inset-0 group-hover:brightness-50 "
              />
            ) : (
              <h3 className="text-lg font-bold">{product.title}</h3>
            )}
            <h3
              className="relative opacity-0 group-hover:opacity-100  text-xl font-bold  text-white "
            >
              More
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Products;
