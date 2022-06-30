
import Hero from "./Hero";
import { useGlobal } from "../context/GlobalContext";
export default function ProductDetails() {
    const { selectedProduct, handleAddToCart } = useGlobal();

    return (

        <section className="single-product">
            <Hero />
            {
                selectedProduct ? <div className="section-center single-product-center">
                    <img src={selectedProduct.fields.image[0].thumbnails.full.url} className="single-product-img" alt="" />
                    <article className="single-product-info">
                        <div>
                            <h2 className="single-product-title">{selectedProduct.fields.name}</h2>
                            <p className="single-product-company text-slanted">by {selectedProduct.fields.company}</p>
                            <p className="single-product-price">${(selectedProduct.fields.price)/100}</p>
                            <div className="single-product-colors">
                                {
                                    selectedProduct.fields.colors && selectedProduct.fields.colors.map((color) => {
                                        return (
                                            <span
                                                style={{ backgroundColor: `${color}` }}
                                                className="product-color"
                                            >
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            <p className="single-product-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur earum doloribus architecto ipsum quasi! Ipsa suscipit provident alias a sunt itaque praesentium sed consequatur eius maxime quae excepturi quia perspiciatis, deleniti non. Aliquid obcaecati architecto error neque officia ex! Eum non, repudiandae quasi odio neque quam recusandae tempore suscipit incidunt.</p>
                            <button className="addToCartBtn btn" data-id="id" onClick={(e) => handleAddToCart(selectedProduct, e)}>add to cart</button>
                        </div>
                    </article>
                </div> : "LOADING..."
            }
        </section>
    );
}
