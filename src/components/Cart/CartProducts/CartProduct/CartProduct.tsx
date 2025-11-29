import formatPrice from 'utils/formatPrice';
import { ICartProduct } from 'models';

import { useCart } from 'contexts/cart-context';
import rudderanalytics from '../../../../utils/rudderstack';

import * as S from './style';

interface IProps {
  product: ICartProduct;
}
const CartProduct = ({ product }: IProps) => {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart();
  const {
    sku,
    title,
    price,
    style,
    currencyId,
    currencyFormat,
    availableSizes,
    quantity,
  } = product;

  const handleRemoveProduct = () => {
    // Track product removed
    rudderanalytics.track('Product Removed', {
      product_id: sku,
      name: title,
      price: price,
      currency: currencyId,
      currency_format: currencyFormat,
      quantity: quantity,
      value: price * quantity
    });
    removeProduct(product);
  };

  const handleIncreaseProductQuantity = () => {
    const newQuantity = quantity + 1;
    // Track quantity updated
    rudderanalytics.track('Product Quantity Updated', {
      product_id: sku,
      name: title,
      price: price,
      currency: currencyId,
      currency_format: currencyFormat,
      old_quantity: quantity,
      new_quantity: newQuantity,
      value: price * newQuantity
    });
    increaseProductQuantity(product);
  };

  const handleDecreaseProductQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      // Track quantity updated
      rudderanalytics.track('Product Quantity Updated', {
        product_id: sku,
        name: title,
        price: price,
        currency: currencyId,
        currency_format: currencyFormat,
        old_quantity: quantity,
        new_quantity: newQuantity,
        value: price * newQuantity
      });
      decreaseProductQuantity(product);
    }
  };

  return (
    <S.Container>
      <S.DeleteButton
        onClick={handleRemoveProduct}
        title="remove product from cart"
      />
      <S.Image
        src={require(`static/products/${sku}-1-cart.webp`)}
        alt={title}
      />
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Desc>
          {`${availableSizes[0]} | ${style}`} <br />
          Quantity: {quantity}
        </S.Desc>
      </S.Details>
      <S.Price>
        <p>{`${currencyFormat}  ${formatPrice(price, currencyId)}`}</p>
        <div>
          <S.ChangeQuantity
            onClick={handleDecreaseProductQuantity}
            disabled={quantity === 1 ? true : false}
          >
            -
          </S.ChangeQuantity>
          <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>
            +
          </S.ChangeQuantity>
        </div>
      </S.Price>
    </S.Container>
  );
};

export default CartProduct;
