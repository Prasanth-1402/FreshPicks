import React from 'react';
import './Home.css';
import Product from './Product';
import cookingOil from './images/fortune.png';
import maida from './images/maida.png';
import maggi from './images/maggi.png';
import chakkiAtta from './images/chakkiAtta.png';
import parleG from './images/parle-G.png';
import sunflowerOil from './images/goldWinner.png';
import almond from './images/almond.png';
import badam from './images/badam.png';
import boost from './images/boost.png';
import surfExcel from './images/surfExcel.png';
import surfExcelLiquid from './images/surfExcelLiquid.png';
import Horlicks from './images/Horlicks.png';
import Roses3 from './images/3Roses.png';
import bru from './images/bru.png';
import HorlicksChoco from './images/HorlicksChoco.png';
import rin from './images/rin.png';
import hit from './images/hit.png';
import redLabel from './images/redLabel.png';
import dishWash from './images/dishWash.png';
import pooja from './images/pooja.png';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,h=280/layout-engine/2020-12/STF-Web-Adapt.jpg"
          alt="Demand"
        />

        <div className="home__row">
          <Product
            key="maida500g"
            id="maida500g"
            title="Maida 500g"
            price={2.99}
            image={maida}
            rating={3}
          />
          <Product
            key="cook500l"
            id="cook500l"
            title="Cooking Oil 1L"
            price={5.99}
            image={cookingOil}
            rating={4}
          />
          <Product
            key="maggiNoodlesMegaPack"
            id="maggiNoodlesMegaPack"
            title="Maggi Noodles MEGA Pack"
            price={1.99}
            image={maggi}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="chakkiAtta1kg"
            id="chakkiAtta1kg"
            title="Chakki Aatta 1KG"
            price={5.99}
            image={chakkiAtta}
            rating={4}
          />
          <Product
            key="goldWinnerOil1L"
            id="goldWinnerOil1L"
            title="Glod Winner Oil 1L"
            price={239.99}
            image={sunflowerOil}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="badam1kg"
            id="badam1kg"
            title="Badam 1KG"
            price={7.99}
            image={badam}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="rinsoap200g"
            id="rinsoap200g"
            title="Rin Soap 200g"
            price={1.29}
            image={rin}
            rating={4}
          />

          <Product
            key="parleGmediumPack"
            id="parleGmediumPack"
            title="Parle G"
            price={0.99}
            image={parleG}
            rating={4}
          />
          <Product
            key="boost250g"
            id="boost250g"
            title="Boost 250g"
            price={4.99}
            image={boost}
            rating={2}
          />
          <Product
            key="surfExcel2kg"
            id="surfExcel2kg"
            title="Surf Excel Powder 2KG"
            price={5.99}
            image={surfExcel}
            rating={5}
          />
          <Product
            key="surfExcelLiquid2l"
            id="surfExcelLiquid2l"
            title="Surf Excel Liquid 2L"
            price={8.99}
            image={surfExcelLiquid}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            key="horlicks750g"
            id="horlicks750g"
            title="Horlicks 750g"
            price={7.99}
            image={Horlicks}
            rating={3}
          />
          <Product
            key="almond1kg"
            id="almond1kg"
            title="Almond 1KG"
            price={11.99}
            image={almond}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            key="hit400ml"
            id="hit400ml"
            title="Hit 400ml"
            price={3.99}
            image={hit}
            rating={3}
          />

          <Product
            key="3roses250g"
            id="3roses250g"
            title="3 Roses 250g"
            price={4.99}
            image={Roses3}
            rating={4}
          />
          <Product
            key="bru500g"
            id="bru500g"
            title="Bru 500g"
            price={4.99}
            image={bru}
            rating={4}
          />
          <Product
            key="horlicks1kgChoco"
            id="horlicks1kgChoco"
            title="Horlicks 1KG - Chocolate Flavour "
            price={7.99}
            image={HorlicksChoco}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="redLabel1kg"
            id="redLabel1kg"
            title="Red Label 1KG"
            price={2.99}
            image={redLabel}
            rating={5}
          />
          <Product
            key="dishwashBudgetPack"
            id="dishwashBudgetPack"
            title="Dish Wash Soap 2+1"
            price={3.99}
            image={dishWash}
            rating={3}
          />
          <Product
            key="poojaOil1l"
            id="poojaOil1l"
            title="Pooja Oil 1L"
            price={6.99}
            image={pooja}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
