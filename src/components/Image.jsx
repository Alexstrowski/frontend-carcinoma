const Image = ({ image }) => {
  return (
    <div className="w-1/3 mr-8">
      <p className="text-2xl mb-4">Imagen</p>
      <div className="border-4 border-blue-600 h-96">
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt={image.name}
            className={"w-full h-full"}
            data-testid="image-box"
            id="photo-uploader"
          />
        ) : (
          <div className="text-gray-400 text-4xl flex justify-center items-center h-full">
            No hay imagen cargada
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
