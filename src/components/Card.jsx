const Card = ({ children }) => {
  return (
    <div className="rounded-3xl shadow-lg w-full my-16 bg-white">
      <div className="px-8 py-12">
        <div className="text-gray-700 text-base">{children}</div>
      </div>
    </div>
  );
};

export default Card;
