import Product from "./product";
import classes from "./products.module.css";

function Products({ products , onSetItemCart }) {
  // console.log(DUMMAY_PRODUCTS)
  return (
    <>
      <section id="products">
        <div id="productinfo" className={classes.productsgrid}>
          {products.map((p) => (
            <Product
              key={p.id}
            //   image={p.image}
              title={p.title}
              Discount={p.Discount}
              starCount={p.starCount}
              verified={p.verified}
              price={p.price}
              avalibility={p.avalibility}
              onSetItemCart={onSetItemCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}
export default Products;
