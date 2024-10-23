const Navbar = () => {
  return (
    <>
      <div className="absolute top-5 left-0 w-[1439.53px] h-[40px] flex flex-row items-center px-[80px] gap-[342px]">
        <div className="w-[124px] h-[32px] gap-0 flex items-center">
          <div className="flex-none order-0 w-[38.53px] h-[38.53px]">
            <img src="logo1.png" alt="Logo" className="w-full h-full" />
          </div>
          <p className="font-open-sans text-[23.71px] font-semibold leading-[32.29px] text-left text-[#008080] ">
            PDFSCRIBE
          </p>
        </div>
        <div className="flex flex-row items-start gap-[17px] w-[321px] h-[22px] flex-none order-1 font-open-sans text-[16px] font-normal leading-[21.79px] text-left text-[#676768]">
          <a href="home">Home</a>
          <a href="features">Features</a>
          <a href="testimonials">Testimonials</a>
          <a href="contact">About Us</a>
        </div>
        <div className="flex flex-row right-0 items-center w-[112px] h-[40px] p-[12px_16px] gap-[8px] rounded-[10px_10px_10px_10px] flex-none order-2 bg-[#008080]">
          <span className="text-white">Get Started</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
