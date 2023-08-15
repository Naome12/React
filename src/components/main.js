import React from 'react'

const main = () => {
  return (
    <div>
    <main className="main" id="main">
    <section
      className="hero section"
      id="home"
      style="background-image: url('./assets/media/bg-hero.jpg')"
    >
      <h1 className="hero__title">
        Start Your Day <br />
        With Favorite Coffee <br />
        And Cozy Place.
      </h1>
      <button className="hero__button">Order Now</button>
    </section>

    // special 
    <div className="special section container" id="special">
      <div className="special__container">
        <div className="special__box">
          <h2 className="section__title">
            Best coffees that make you <br />
            happy and cheer you up!
          </h2>
        </div>

        <div className="special__category">
          <div className="special__group">
            <div className="special__img__border">
              <img
                src="./assets/media/coffee-beans.png"
                alt=""
                className="special__img"
              />
            </div>
            <h3 className="special__title">Original Coffee</h3>
            <p className="special__description">
              We select the best beans coffee, for a true taste.
            </p>
          </div>
          <div className="special__group">
            <div className="special__img__border">
              <img
                src="./assets/media/hot-drink.png"
                alt=""
                className="special__img"
              />
            </div>
            <h3 className="special__title">Hot Coffee</h3>
            <p className="special__description">
              Enjoy your coffee with some hot with true taste.
            </p>
          </div>
          <div className="special__group">
            <div className="special__img__border">
              <img
                src="./assets/media/coffee-cup.png"
                alt=""
                className="special__img"
              />
            </div>
            <h3 className="special__title">Ice Coffee</h3>
            <p className="special__description">
              Enjoy your coffee with some ice wtih true taste.
            </p>
          </div>
        </div>
      </div>
    </div>

    // products
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Find delicious food and <br />
          choose what you love
        </h2>

        <ul className="products__filters">
          <li
            className="products__item products__line active-product"
            data-filter=".delicacies"
          >
            <h3 className="products__title">Main Menu</h3>
            <span className="products__stock">3 products</span>
          </li>
          <li className="products__item products__line" data-filter=".coffee">
            <h3 className="products__title">Coffee</h3>
            <span className="products__stock">4 products</span>
          </li>
          <li className="products__item" data-filter=".cake">
            <h3 className="products__title">Desserts</h3>
            <span className="products__stock">4 products</span>
          </li>
        </ul>

        <div className="products__content grid">
          <article className="products__card main-menu">
            <div className="products__shape">
              <img
                src="./assets/media/main-menu1.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$5</h2>
              <h3 className="products__name">Cookies</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card main-menu">
            <div className="products__shape">
              <img
                src="./assets/media/main-menu2.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$6</h2>
              <h3 className="products__name">Croissant</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card main-menu">
            <div className="products__shape">
              <img
                src="./assets/media/main-menu3.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$4</h2>
              <h3 className="products__name">Croissant</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card main-menu">
            <div className="products__shape">
              <img
                src="./assets/media/main-menu4.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$4</h2>
              <h3 className="products__name">Croissant</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          
          <article className="products__card coffee">
            <div className="products__shape">
              <img
                src="./assets/media/coffee.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$7</h2>
              <h3 className="products__name">Black Coffee</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card coffee">
            <div className="products__shape">
              <img
                src="./assets/media/coffee2.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$12</h2>
              <h3 className="products__name">Pure Coffee</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card coffee">
            <div className="products__shape">
              <img
                src="./assets/media/coffee3.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$9</h2>
              <h3 className="products__name">Milk Coffee</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
        //    3 
          <article className="products__card dessert">
            <div className="products__shape">
              <img
                src="./assets/media/dessert1.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$6</h2>
              <h3 className="products__name">Cream dessert</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card dessert">
            <div className="products__shape">
              <img
                src="./assets/media/dessert2.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$5</h2>
              <h3 className="products__name">Chocolate Croissant</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card dessert">
            <div className="products__shape">
              <img
                src="./assets/media/dessert3.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$15</h2>
              <h3 className="products__name">Pandessert</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
          <article className="products__card dessert">
            <div className="products__shape">
              <img
                src="./assets/media/dessert4.jpg"
                alt=""
                className="products__img"
              />
            </div>
            <div className="products__data">
              <h2 className="products__price">$12</h2>
              <h3 className="products__name">Milk dessert</h3>

              <button className="button products__button">
                <i className="bx bx-shopping-bag"></i>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    //  place 
    <section className="place section" id="place">
      <div className="place__container container">
        <h2 className="section__title">
          Make you feels good With <br />
          our comfy fasilities
        </h2>

        <div className="place__content grid">
          <div className="place__images">
            <img
              src="./assets/media/place1.jpg"
              alt=""
              className="place__img-big"
            />
            <div className="place__img-smalls">
              <img
                src="./assets/media/place1.jpg"
                alt=""
                className="place__img-small active"
              />
              <img
                src="./assets/media/place2.jpg"
                alt=""
                className="place__img-small"
              />
              <img
                src="./assets/media/place3.jpg"
                alt=""
                className="place__img-small"
              />
            </div>
          </div>

          <div className="place__data">
            <h2 className="place__title">Find a place you love</h2>
            <p className="place__description">
              We provide the best place to stay productive <br />
              and focus with good vibes and beautiful design.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__title">
          Our blogs coffee with <br />
          insightful topic
        </h2>

        <div className="blog__content grid">
          <article className="blog__card">
            <div className="blog__image">
              <img src="./assets/media/blog1.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>12</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>76,5k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to grow coffee beans</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how to grow
                coffee beans with hign standard.
              </p>
            </div>
          </article>
          <article className="blog__card">
            <div className="blog__image">
              <img src="./assets/media/blog2.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>96</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>356,7k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to make coffee for beginner</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how to make a
                coffee with a good place coffee.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
    </div>
  )
}

export default main
