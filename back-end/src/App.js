import commerce from "";
import Grid from "antd";
import emptyCart from "";
import footer from "";
import { useState, useEffect } from "react";
import Navigation from "./Components/";
function App() {
  const [status, setStatus] = useState(false);
  const [cart, setCart] = useState();

  const addToCart = (productId, variantInfo) => {
    if (variantInfo) {
      commerce.cart.add(productId, 1, variantInfo).then((res) => {
        setCart(res.cart);
      });
    } else {
      window.alert("Please Select a Shirt Size");
    }
  };
  useEffect(() => {
    commerce.cart.retrieve().then((res) => {
      setCart(res);
    });
  }, []);
  const cartHelperFunctions = {
    deleteItem: (lineItemId) => {
      commerce.cart.remove(lineItemId).then((res) => {
        setCart(res.cart);
      });
    },
    addQaunity: (lineItemId, newQuanity) => {
      commerce.cart.update(lineItemId, { quantity: newQuanity }).then((res) => {
        setCart(res.cart);
      });
    },
    subtractQuanity: (lineItemId, newQuanity) => {
      if (newQuanity === 0) {
        cartHelperFunctions.deleteItem(lineItemId);
      } else {
        commerce.cart
          .update(lineItemId, { quantity: newQuanity })
          .then((res) => {
            setCart(res.cart);
          });
      }
    },
  };
  return (
    <div>
      <Navigation cart={cart} emptyCart={emptyCart} />
      <Grid centered stackable padded relaxed>
        <Grid.Column className="left-column" width={5}>
          <LeftPanel />
        </Grid.Column>
        <Grid.Column width={9}>
          <ProductContainer addToCart={addToCart} />
        </Grid.Column>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
