/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React ?",
    content: "asdha",
  },
  {
    title: "What is html ?",
    content: "asdha",
  },
  {
    title: "What is css ?",
    content: "asdha",
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
