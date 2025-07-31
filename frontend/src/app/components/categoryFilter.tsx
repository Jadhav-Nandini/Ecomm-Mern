const categories = ["All", "Necklace", "Rings", "Bracelets", "Earrings"];

const CategoryFilter = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2 text-[#5c4433]">Categories</h3>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat}>
            <button className="text-sm text-[#5c4433] hover:underline">{cat}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
