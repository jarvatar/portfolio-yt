import React from "react";
import { urlFor } from "../sanity";
import { Brand } from "../typings";

type Props = {
  brand: Brand[];
};

function Brand({ brand }: Props) {
  return (
    <div>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Brands
      </h3>
      <div>
        {brand?.map((brand) => (
          <img
            className="h-10 w-10"
            key={brand._id}
            src={urlFor(brand.image).url()}
            alt={brand.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Brand;
