import { useState } from "react";
import { getBase64Image } from "../utils";
import axiosClient from "../plugins/axios";

const UploadFileContainer = ({
  updateImage,
  updatePrediction,
  setIsLoading,
}) => {
  const [selectedFile, setSelectedFile] = useState(undefined);

  const handleInputFile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      updateImage(event.target.files[0]);
    }
  };

  const handleFileUpload = (params) => {
    let reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = async function (e) {
      let dataURL = reader.result;
      const base64Image = getBase64Image(dataURL);
      const payload = {
        image: base64Image,
      };
      setIsLoading(true);
      const response = await axiosClient.post("/predict", payload);
      setIsLoading(false);
      updatePrediction(response.data.prediccion);
    };
  };

  return (
    <div className="mt-8 text-center">
      <input
        type="file"
        onChange={handleInputFile}
        data-testid="fileInput"
        className="mr-4"
      />
      <button
        className="bg-blue-500 disabled:opacity-10 text-white font-bold py-2 px-4 rounded"
        onClick={handleFileUpload}
        disabled={!selectedFile}
      >
        Predecir
      </button>
    </div>
  );
};

export default UploadFileContainer;
