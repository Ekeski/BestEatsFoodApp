import { categories } from "../data/data";
export default function Category() {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Category */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <h2 className="font-bold sm:text-xl">{category.name}</h2>
            <img className="w-20" src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
