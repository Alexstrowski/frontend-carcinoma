import "./App.css";
import { useState } from "react";
import { Card, Image, Result, UploadFileContainer } from "./components";

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState({
    bcc: null,
    nobcc: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="container mx-auto">
      <p className="text-6xl mt-8 text-center">
        Predicción del carcinoma basocelular
      </p>
      <p className="text-3xl mt-8 text-center text-gray-600">
        Cargar la imagen en formato .png o .jpg
      </p>
      <UploadFileContainer
        updateImage={setImage}
        updatePrediction={setPrediction}
        setIsLoading={setIsLoading}
      />
      <Card>
        <div className="flex">
          <Image image={image} />
          <Result prediction={prediction} isLoading={isLoading} />
        </div>
      </Card>
    </div>
  );
}

export default App;
