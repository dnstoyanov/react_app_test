import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import classes from './Layout.module.scss'

export const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
      <Footer/>
    </>
  );
};
