import pizza22 from "../../data/pizza.json";
import Pizza from "../cards/Pizza.jsx"
function Menu() {
  const pizzaData = pizza22.object;
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <h2
        style={{
          display: "inline-block",
          padding: "1rem 0",
          borderTop: "2px solid currentColor",
          borderBottom: "2px solid currentColor",
          fontSize: "2.4rem",
          textTransform: "uppercase",
          letterSpacing: "3px",
          fontWeight: "500",
        }}
      >
        Our menu
      </h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4.8rem",
            }}
          >
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mushrooms"
          price={12}
          photoName="pizzas/funghi.jpg"
        /> */}
    </main>
  );
}

export default Menu;
