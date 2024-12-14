import "../../index.css"
function Order({ closeHour, openHour }) {
  return (
    <div
      className="order"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.4rem",
      }}
    >
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button
        className="btn"
        style={{
          color: "inherit",
          fontFamily: "inherit",
          border: "none",
          fontSize: "1.4rem",
          fontWeight: "500",
          backgroundColor: "#edc84b",
          padding: "1.4rem 3.2rem",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        Order
      </button>
    </div>
  );
}

export default Order;
