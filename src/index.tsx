import { StrictMode } from 'react';
// @ts-ignore - React 18 types issue
import * as ReactDOMClient from 'react-dom/client';

/* Theme */
import { ThemeProvider } from 'commons/style/styled-components';
import { theme } from 'commons/style/theme';
import GlobalStyle from 'commons/style/global-style';

/* Context Providers */
import { ProductsProvider } from 'contexts/products-context';
import { CartProvider } from 'contexts/cart-context';
import { AuthProvider } from 'contexts/auth-context';

import App from 'components/App';

const root = document.getElementById('root')!;
const container = ReactDOMClient.createRoot(root);

container.render(
  <StrictMode>
    {/* @ts-ignore - ThemeProvider type compatibility issue */}
    <ThemeProvider theme={theme}>
      {/* @ts-ignore - GlobalStyle type compatibility issue */}
      <GlobalStyle />
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
