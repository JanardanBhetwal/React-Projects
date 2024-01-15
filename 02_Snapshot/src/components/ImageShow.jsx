function ImageShow({ image }) {
  console.log("Received in ImageShow");
  return (
    <div className="m-4 w-96 rounded-sm">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
}
export default ImageShow;
