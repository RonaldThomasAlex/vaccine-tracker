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
          padding: "20px 0",
          fontSize: "20px",
        }}
      >
        Vaccine Finder
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
