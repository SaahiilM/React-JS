import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "Whatis React ?",
    content: "asdha",
  },
  {
    title: "Whatis html ?",
    content: "asdha",
  },
  {
    title: "Whatis css ?",
    content: "asdha",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
