import Link from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "18px",
            padding: "10px",
          }}
        >
          Home
        </Link>
        <Link
          to="services"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "18px",
            padding: "10px",
          }}
        >
          Services
        </Link>
        <Link
          to="about"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "18px",
            padding: "10px",
          }}
        >
          About
        </Link>
        <Link
          to="contact"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "18px",
            padding: "10px",
          }}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
