import formatPrice from 'utils/formatPrice';
import CartProducts from './CartProducts';
import posthog from '../utils/posthog'; // Add PostHog import
import { useCart } from 'contexts/cart-context';

import * as S from './style';

const Cart = () => {
  const { products, total, isOpen, openCart, closeCart } = useCart();

  const handleCheckout = () => {
    if (total.productQuantity) {
      const orderId = `order_${Date.now()}`;

      // Track with PostHog
      posthog.capture('checkout_completed', {
        order_id: orderId,
        revenue: total.totalPrice,
        currency: total.currencyId,
        currency_format: total.currencyFormat,
        products: products.map(product => ({
          product_id: product.sku,
          name: product.title,
          price: product.price,
          quantity: product.quantity,
        })),
        total_quantity: total.productQuantity,
        installments: total.installments || null
      });

      // Also track individual product purchases
      products.forEach(product => {
        posthog.capture('product_purchased', {
          product_id: product.sku,
          product_name: product.title,
          price: product.price,
          quantity: product.quantity,
          currency: total.currencyId,
          order_id: orderId
        });
      });

      alert(
        `Checkout - Subtotal: ${total.currencyFormat} ${formatPrice(
          total.totalPrice,
          total.currencyId
        )}`
      );
    } else {
      alert('Add some product in the cart!');
    }
  };

  const handleToggleCart = (isOpen: boolean) => () => {
    if (isOpen) {
      posthog.capture('cart_closed');
      closeCart();
    } else {
      posthog.capture('cart_opened', {
        products_in_cart: total.productQuantity
      });
      openCart();
    }
  };

  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={handleToggleCart(isOpen)}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <S.CartIcon>
            <S.CartQuantity title="Products in cart quantity">
              {total.productQuantity}
            </S.CartQuantity>
          </S.CartIcon>
        )}
      </S.CartButton>

      {isOpen && (
        <S.CartContent>
          <S.CartContentHeader>
            <S.CartIcon large>
              <S.CartQuantity>{total.productQuantity}</S.CartQuantity>
            </S.CartIcon>
            <S.HeaderTitle>Cart</S.HeaderTitle>
          </S.CartContentHeader>

          <CartProducts products={products} />

          <S.CartFooter>
            <S.Sub>SUBTOTAL</S.Sub>
            <S.SubPrice>
              <S.SubPriceValue>{`${total.currencyFormat} ${formatPrice(
                total.totalPrice,
                total.currencyId
              )}`}</S.SubPriceValue>
              <S.SubPriceInstallment>
                {total.installments ? (
                  <span>
                    {`OR UP TO ${total.installments} x ${
                      total.currencyFormat
                    } ${formatPrice(
                      total.totalPrice / total.installments,
                      total.currencyId
                    )}`}
                  </span>
                ) : null}
              </S.SubPriceInstallment>
            </S.SubPrice>
            <S.CheckoutButton onClick={handleCheckout} autoFocus>
              Checkout
            </S.CheckoutButton>
          </S.CartFooter>
        </S.CartContent>
      )}
    </S.Container>
  );
};

export default Cart;