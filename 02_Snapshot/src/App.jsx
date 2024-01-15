import Header from "./components/Header";
import Search from "./components/Search";
import ImageSearch from "./Api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImage] = useState([]);

  const handleSubmit = async (value) => {
    const result = await ImageSearch(value);
    setImage(result);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200 mx-auto">
      <Header />
      <Search onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
