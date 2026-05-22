import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiDotsVertical, HiMenuAlt2 } from "react-icons/hi";
import { GifState } from "../context/context";

function Header() {
  const [category, setCategory] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  const { gf } = GifState();

  // useEffect is used to fetch the categories of gifs from the giphy api when the component is mounted
  useEffect(() => {
    const fetchGifCategory = async () => {
      const { data } = await gf.categories();
      setCategory(data);
    };

    fetchGifCategory();
  }, [gf]);
  

  return (
    <nav>
      <div className="flex items-center justify-between px-4 py-2 border-b-2">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-10 h-10" src="/logo.svg" alt="logo" />
          <h1 className="text-2xl font-bold">Grify</h1>
        </Link>

        {/* Gradient hover button */}
        <div className="hidden md:flex items-center gap-4">
          {category?.slice(0, 5).map((categories) => {
            return (
              <Link key={categories.name} to={`/search/${categories.name_encoded}`} className="px-4 py-2 border-2 hover:bg-gradient-to-r, hover:from-green-500 hover:to-blue-500">
                {categories.name}
              </Link>
            );
          })}


            


        </div>

        <button
          onClick={() => setShowCategory(!showCategory)}
          className="px-4 py-2 border-2 text-white hover:bg-gradient-to-r,hover:from-green-500, hover:to-blue-500"
        >
          <HiDotsVertical size={30} />
        </button>

        <div className="flex items-center gap-4">
          <Link
            to="/favarious"
            className="px-4 py-2 border-2 hover:bg-gray-700"
          >
            favarious gif
          </Link>

          <button className="px-4 py-2 border-2 hover:bg-yellow-700">
            <HiMenuAlt2 size={30} />
          </button>
        </div>
      </div>

    
      {showCategory && (<div className="absolute right-4 top-16 bg-gray-800 text-white rounded-md shadow-lg w-48">
        <span>Category</span>
        <hr />
        <div>
          <Link className="block px-4 py-2 hover:bg-gray-700">
            Reaction
          </Link>
        </div>
      </div>)
      }
    </nav>
  );
}

export default Header;