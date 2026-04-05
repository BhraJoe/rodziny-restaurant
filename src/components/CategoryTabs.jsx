export default function CategoryTabs({ categories, activeCategory, onSelect }) {
  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-tab${activeCategory === cat ? " active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
