import classes from './product.module.css';

function product({ title, Discount, starCount, avalibility, price,  onSetItemCart }) {
  return (
    <>
        <div id='productcard '
            className={classes.productcard}>
            <h2 id='productTitle'>{title}</h2>
            <h4 id='producsubtTitle'>Discount:{Discount}%</h4>
            <h4>Rating:{starCount}</h4>
            
            <span id='priceAndweightinfo'>
                <h2 id='priceinfo'>₹{price}</h2>
              
            </span>
            <h4>Avalibility:{avalibility}</h4>
            <button  
                id='addcardbtn'
                onClick={()=>onSetItemCart(title, subtitle, verified, price, weight)}
            >
                Add to cart
            </button>
        </div>
    </>
  )
}

export default product
