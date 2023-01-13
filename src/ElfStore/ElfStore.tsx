import React, { useState } from "react";
import { useQuery } from "react-query";

import { createStore, select, withProps } from "@ngneat/elf";

type rating = {
  count: number;
};

type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: rating;
};

const getProducts = async (): Promise<cartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemType[]);

  const { data, isLoading, error } = useQuery<cartItemType[]>(
    "products",
    getProducts
  );
  console.log("ElfStoreData=>", data);

  const getTotalItems = (items: cartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
}

interface AuthProps {
  user: { id: string } | null;
}

export const authStore = createStore(
  { name: "auth" },
  withProps<AuthProps>({ user: null })
);

authStore.subscribe((state) => {
  console.log(state);
});

export const user$ = authStore.pipe(select((state) => state.user));

authStore.update((state) => ({
  ...state,
  user: { id: "foo" },
}));
