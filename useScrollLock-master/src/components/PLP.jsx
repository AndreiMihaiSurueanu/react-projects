import React from "react";
import ProductCard from "./ProductCard";

import { products } from "../products.js";
import { useScrollLock } from "../hooks/useScrollLock";

const PLP = () => {
  const [quickViewProductId, setQuickViewProductId] = React.useState(0);
  const { lockScroll, unlockScroll } = useScrollLock();

  const displayQuickView = (productId) => {
    lockScroll();
    setQuickViewProductId(productId);
  }

  const hideQuickView = () => {
    unlockScroll();
    setQuickViewProductId(0);
  }

  return (
    <React.Fragment>
      {quickViewProductId > 0 && (
        <div className="quick-view-modal">
          <button onClick={hideQuickView} className="quick-view-modal--close">&#10799;</button>
          <div className="quick-view-image-container">
            <img src={products.find(product => product.id === quickViewProductId).image} alt="product"/>
          </div>
          <div className="quick-view-content">
            <h1>{products.find(product => product.id === quickViewProductId).name}</h1>
            <div>
              ${products.find(product => product.id === quickViewProductId).price}
            </div>
            <div className="product-card__configurations">
              <div className="product-card__configuration configuration--red" />
              <div className="product-card__configuration configuration--white" />
              <div className="product-card__configuration configuration--blue" />
              <div className="product-card__configuration configuration--green" />
              <div className="product-card__configuration configuration--yellow" />
            </div>
            <div className="product-card__configurations">
              <div className="product-card__configuration">S</div>
              <div className="product-card__configuration">M</div>
              <div className="product-card__configuration">L</div>
              <div className="product-card__configuration">XL</div>
            </div>

            <strong>Description</strong>

            <div className="product-card__description">
              'Twas the night before Christmas, when all through the house
              Not a creature was stirring, not even a mouse;
              The stockings were hung by the chimney with care,
              In hopes that St. Nicholas soon would be there;
              <br/><br/>
              The children were nestled all snug in their beds,
              While visions of sugar-plums danced in their heads;
              And mamma in her 'kerchief, and I in my cap,
              Had just settled down for a long winter's nap,
              <br/><br/>
              When out on the lawn there arose such a clatter,
              I sprang from the bed to see what was the matter.
              Away to the window I flew like a flash,
              Tore open the shutters and threw up the sash.
              <br/><br/>
              The moon on the breast of the new-fallen snow
              Gave the lustre of mid-day to objects below,
              When, what to my wondering eyes should appear,
              But a miniature sleigh, and eight tiny reindeer,
              <br/><br/>
              With a little old driver, so lively and quick,
              I knew in a moment it must be St. Nick.
              More rapid than eagles his coursers they came,
              And he whistled, and shouted, and called them by name;
              <br/><br/>
              "Now, DASHER! now, DANCER! now, PRANCER and VIXEN!
              On, COMET! on CUPID! on, DONNER and BLITZEN!
              To the top of the porch! to the top of the wall!
              Now dash away! dash away! dash away all!"
            </div>
          </div>
        </div>
      )}
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onQuickView={() => displayQuickView(product.id)}
            />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PLP;
