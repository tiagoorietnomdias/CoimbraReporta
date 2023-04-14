import { link } from "fs";
import { Fragment } from "react";
export default function ListGroup() {
  let items = ["isto", "e", "fixe"];
  let selecedIndex = 0;
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>bruh</h1>

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selecedIndex === index
                ? "list-group-item active"
                : "list-group-active"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
