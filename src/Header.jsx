import logo from "./assets/vaccine-logo.png";

export function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "white",
          padding: "25px 0",
          fontSize: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div>Vaccine Finder</div>
        <div style={{ color: "grey", fontSize: "12px", fontStyle: "italic" }}>
          INDIA
        </div>
      </div>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          position: "relative",
          left: "10px",
        }}
      />
    </div>
  );
}
