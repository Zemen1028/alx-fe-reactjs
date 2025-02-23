function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      &copy; {new Date().getFullYear()} Our Company. All rights reserved.
    </div>
  );
}

export default Footer;
