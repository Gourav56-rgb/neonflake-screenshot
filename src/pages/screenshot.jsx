import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Screenshot = () => {
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");
  const url = `https://api.apiflash.com/v1/urltoimage?access_key=${
    import.meta.env.VITE_ACCESS_KEY
  }&url=${search}&fresh=true&full_page=true&format=png`;

  const screenshot = async () => {
    setSearch("");
    const res = await fetch(url);
    if (res.ok) {
      setImage(res);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    screenshot();
  };

  useEffect(() => {
    setSearch("");
    screenshot();
  }, []);

  return (
    <>
      <button>
        <Link to="/fetch">Fetch image from Cloudinary</Link>
      </button>
      <button>
        <Link to="/upload">Upload image to cloudinary</Link>
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter an url"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">See screenshot</button>
      </form>

      <div>{image && <img src={image.url} alt="background" />}</div>
    </>
  );
};

export default Screenshot;
