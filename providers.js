import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProductProvider } from "@/context/ProductContext";
import { FavoriteProvider } from "@/context/FavoriteContext";
import { ModalProvider } from "@/context/ModalContext";
import { LayoutProvider } from "@/context/LayoutContext";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <ModalProvider>
        <ProductProvider>
          <CartProvider>
            <FavoriteProvider>
              <OrderProvider>
                <LayoutProvider>
                  {children}
                </LayoutProvider>
              </OrderProvider>
            </FavoriteProvider>
          </CartProvider>
        </ProductProvider>
      </ModalProvider>
    </AuthProvider>
  );
}
