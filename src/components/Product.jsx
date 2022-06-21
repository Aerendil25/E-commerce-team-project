import { useGlobal } from "../context/GlobalContext";
export default function Product() {
  const { productsData } = useGlobal();

  return (
    <div className="grid">
      {productsData.map((item) => (
        <div key={item.id}>
          <h3>{item.fields.company}</h3>
          <h4>{item.fields.name}</h4>
          <p>${item.fields.price}</p>
          <img src={item.fields.image.url} alt="" />
        </div>
      ))}
    </div>
  );
}
