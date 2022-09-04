import React from "react";
import { Button, Card } from "react-bootstrap";
// import { CardImg } from './StoreItems.styles'
import { StoreitemsProps } from "./StoreItems.interface";
import { formatCurrency } from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const StoreItems = ({ id, name, price, imgUrl }: StoreitemsProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className=" h-100 flex-3">
      <Card.Img variant="top" src={imgUrl} width="100%" height="300px" style={{ objectFit: "contain" }} />

      <Card.Body className="d-flex flex-column mt-4 ">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex align-items -center
              flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex  align-items-center
               justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                  in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItems;
