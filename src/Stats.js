export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">Start Adding some items to your packing list</p>
    );
  const itemsNum = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemsPacked / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go ✈`
          : `💼 you have ${itemsNum} items on your list, and you already packed ${itemsPacked} (${percentage}%)`}{" "}
      </em>
    </footer>
  );
}
