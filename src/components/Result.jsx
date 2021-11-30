const Result = ({ prediction, isLoading }) => {
  return (
    <div className="w-2/3">
      <p className="text-2xl mb-4">Resultados</p>
      <div className="border-4 border-blue-600 h-96 flex flex-col justify-center items-center text-2xl">
        {prediction.bcc !== null ? (
          <div>
            <p className="mb-4">
              Es carcinoma basocelular: {formatNumber(prediction.bcc)}
            </p>
            <p>No es carcinoma basocelular: {formatNumber(prediction.nobcc)}</p>
          </div>
        ) : isLoading ? (
          <div className="text-gray-400 text-4xl flex justify-center items-center h-full">
            Cargando...
          </div>
        ) : (
          <div className="text-gray-400 text-4xl flex justify-center items-center h-full">
            Aún no hay resultados
          </div>
        )}
      </div>
    </div>
  );
};

const formatNumber = (number) => {
  return `${number * 100} %`;
};

export default Result;
