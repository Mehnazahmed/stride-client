import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";
import NewAddedProductCard from "./NewAddedProductCard";

const NewAddedProducts = () => {
  const {
    data: newAddedProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addedProducts"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://project-stride.vercel.app/addedproducts",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
      {newAddedProducts?.map((addedProduct) => (
        <NewAddedProductCard
          key={addedProduct.id}
          addedProduct={addedProduct}
        ></NewAddedProductCard>
      ))}
    </div>
  );
};

export default NewAddedProducts;
