import { Outlet, createRootRoute } from '@tanstack/react-router';
import { useState } from "react";
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PizzaOfTheDay from '../PizzaOfTheDay';
import Header from '../Header';
import { CartContext } from '../contexts';

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header />
            <Outlet />
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
