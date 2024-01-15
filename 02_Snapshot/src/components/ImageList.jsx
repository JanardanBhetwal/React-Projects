import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return (
    <div className="flex flex-row justify-evenly flex-wrap m-5 mx-8 ">
      {renderedImages}
    </div>
  );
}

export default ImageList;
