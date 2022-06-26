import Product from "./Product";
import Hero from "./Hero";
import { useGlobal } from "../context/GlobalContext";
export default function Products() {
    const { productsData } = useGlobal();

    return (

        <section className="single-product">
            <Hero />
            <div className="section-center single-product-center">
                <img src="" className="single-product-center" alt="" />
                <article className="single-product-info">
                    <div>
                        {/* bring product title */}
                        <h2 className="single-product-title"></h2>
                        {/* made by company name here below */}
                        <p className="single-product-company text-slanted"></p>
                        {/* price of product below here */}
                        <p className="single-product-price"></p>
                        <div className="single-product-colors">
                            <span className="product-color"></span>
                            <span className="product-color"></span>
                        </div>
                        <p className="single-product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur earum doloribus architecto ipsum quasi! Ipsa suscipit provident alias a sunt itaque praesentium sed consequatur eius maxime quae excepturi quia perspiciatis, deleniti non. Aliquid obcaecati architecto error neque officia ex! Eum non, repudiandae quasi odio neque quam recusandae tempore suscipit incidunt.</p>
                        <button className="addToCartBtn btn" data-id="id">add to cart</button>
                    </div>
                </article>
            </div>
        </section>
    );
}
