export function Search(props) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <input
        type="text"
        placeholder="enter pincode"
        onChange={(event) => props.pinCodeHandler(event.target.value)}
      />
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => props.searchHandler()}
      >
        Search
      </button>
    </div>
  );
}
