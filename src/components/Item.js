export default function Item({ item, handleDeleteItems, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          handleToggleItem(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.Description}
      </span>
      <button
        onClick={() => {
          handleDeleteItems(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
