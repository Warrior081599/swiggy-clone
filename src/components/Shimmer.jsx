const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((value, index) => {
          return <div key={index} className="single-simmer"></div>;
        })}
    </div>
  );
};

export default Shimmer;
