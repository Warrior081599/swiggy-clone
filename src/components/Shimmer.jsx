const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap gap-4 p-4">
      {Array(10)
        .fill("")
        .map((value, index) => {
          return (
            <div
              key={index}
              className="single-simmer w-[250px] h-[300px] bg-gray-300 rounded-lg animate-pulse"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
