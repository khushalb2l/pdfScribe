const Card = ({ image, title, rating, para }) => {
  const starCount = Math.max(0, Math.min(5, rating));
  return (
    <div className="flex flex-col justify-center items-center w-[350.05px] h-[321.57px] p-[29.7917px_17.875px] gap-[11.92px] border-[1.48958px] border-[#008080] rounded-[23.8333px] box-border">
      <img src={image} className="w-[126.61px] h-[126.61]" />
      <div className="flex flex-col items-center w-[314.3px] h-[123.45px] p-0 gap-[11.92px]">
        <span className="w-[145px] h-[27px] font-sans font-bold text-[17.875px] leading-[150%] text-center text-[#353535]">
          {title}
        </span>
        {/* <div className="flex flex-row items-start p-0 gap-[5.96px] w-[116.93px] h-[18.62px]">
          <span className="flex-none order-1 flex-grow-0 text-[#008080]">★</span>
          <span className="flex-none order-1 flex-grow-0 text-[#008080]">★</span>
          <span className="flex-none order-1 flex-grow-0 text-[#008080]">★</span>
          <span className="flex-none order-1 flex-grow-0 text-[#008080]">★</span>
          <span className="flex-none order-1 flex-grow-0 text-gray-400">☆</span>
        </div> */}
        <div className="flex flex-row items-start p-0 gap-[5.96px] w-[116.93px] h-[18.62px]">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`flex-none order-1 flex-grow-0 ${
                index < starCount ? "text-[#008080]" : "text-gray-400"
              }`}
            >
              {index < starCount ? "★" : "☆"}
            </span>
          ))}
        </div>
        <p className="w-[314.3px] h-[54px] font-sans font-normal text-[11.9167px] leading-[150%] text-center text-[#000000] flex-none order-2 flex-grow-0">
          {para}
        </p>
      </div>
    </div>
  );
};
export default Card;
