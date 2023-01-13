import Button from "@material-ui/core/Button";

import { cartItemType } from "../App";

import { Wrapper } from "./Item.styles";

type Props = {
  item: cartItemType;
  handleAddToCart: (clickedItem: cartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>

      <h2>
        ${item.price}
        {"    "}
        <span
          style={{
            fontWeight: "lighter",
            fontSize: "15px",
            marginLeft: "15px",
          }}
        >
          In stock :
          <span style={{ fontWeight: "bolder" }}>{item.rating.count}</span>
        </span>
      </h2>
    </div>
    {/* <Button onClick={() => handleAddToCart(item)}> Add to cart</Button> */}
    {item.rating.count !== 0 ? (
      <Button onClick={() => handleAddToCart(item)} className="cart-btn">Add to cart</Button>
    ) : (
      <p style={{ fontWeight: "bold", textAlign: "center" }}>
        Items Not in Stocks
      </p>
    )}
  </Wrapper>
);

export default Item;
