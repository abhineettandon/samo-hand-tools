import type { Product } from "../types/Product";

export const hammers: Product = {
  name: "Hammers",
  slug: "hammers",
  img: "/img/products/hammers/hammers.png",
  variants: [
    {
      name: "SM-188 Ball Pein",
      img: "/img/products/hammers/sm-188.png",
      description: "",
      specs: [
        {
          label: "Weight",
          value: "200, 300 and 500 Grams",
        },
        {
          label: "Qty/Bag/Pcs",
          value: "11'', 13'' and 14'' Handle",
        },
      ],
    },
    {
      name: "SM-189 Cross Pein",
      img: "/img/products/hammers/sm-189.png",
      description: "",
      specs: [
        {
          label: "Weight",
          value: "200, 300 and 500 Grams",
        },
        {
          label: "Qty/Bag/Pcs",
          value: "11'', 13'' and 14'' Handle",
        },
      ],
    },
    {
      name: "SM-190 Clum Hammer",
      img: "/img/products/hammers/sm-190.png",
      description: "",
      specs: [
        {
          label: "Weight",
          value: "1KG, 2KG",
        },
        {
          label: "Qty/Bag/Pcs",
          value: "10'', 12'' Handle",
        },
      ],
    },
    {
      name: "SM-191 Claw",
      img: "/img/products/hammers/sm-191.png",
      description: "",
      specs: [
        {
          label: "Weight",
          value: "200 and 300 Grams",
        },
        {
          label: "Qty/Bag/Pcs",
          value: "Claw 11'' Handle 1/2, Claw 13'' Handle 3/4",
        },
      ],
    },
  ],
};
