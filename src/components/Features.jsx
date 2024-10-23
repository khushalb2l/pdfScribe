import "./features.css";

const Features = () => {
  return (
    <section id="features" className="relative w-[1440px] h-[521px] top-[849px] p-[51px] px-[83.88px] pb-[50.66px] border-t border-gray-400 bg-[#FDFFFF80] custom-border">
      <div className="absolute flex flex-col items-center gap-[24px] p-0 w-[1274.12px] h-[419.34px] left-[82px] top-[51px]">
        <div className="flex flex-col items-center p-0 gap-[8px] w-[523px] h-[76px] flex-none order-0 flex-grow-0">
          <span className="inline-block w-[121px] h-[16px] font-semibold text-[16px] leading-[16px] tracking-[0.02em] text-[#008080] text-center">
            #Best Features
          </span>
          <span className="inline-block w-[523px] h-[52px] font-semibold text-[38px] leading-[51.75px] tracking-[0.02em] text-[#353535] text-center">
            Why Choose Our Translator?
          </span>
        </div>

        {/* cards */}
        
        <div className="box-border flex flex-row justify-center items-center pt-[25px] pb-[25px] gap-[32px] w-[1274.12px] h-[319.34px] border border-[#E3E3E4] rounded-[8px] flex-none order-1 flex-grow-0">
          <div className="flex flex-col border-r-[1px] border-l-[1px] justify-center items-center p-[16.0942px] gap-[7.73px] w-[403px] h-[269.34px] border-[#CFD0D1] flex-none order-0 flex-grow-0 bg-white">
            <img src="clock.jpg" className="w-[149.35px] h-[139.7px]" />
            <span className="w-[214px] h-[28px] font-sans font-semibold text-[20.6px] tracking-[0.02em] text-[#353535] leading-[28.05px] text-center ">
              Real-time Translation
            </span>
            <span className="w-[340.55px] h-[54px] font-sans font-normal text-[13.52px] tracking-[0.02em] text-[#676768] leading-[18.41px] text-center ">
              Experience instant translations as you upload or edit your
              documents. Our AI ensures you get the results you need without the
              wait.
            </span>
          </div>
          <div className="flex flex-col border-r-[1px] justify-center items-center p-[16.0942px] gap-[7.73px] w-[403px] h-[269.34px] border-[#CFD0D1] flex-none order-0 flex-grow-0 bg-white">
            <img src="multi.jpg" className="w-[149.35px] h-[139.7px]" />
            <span className="w-[214px] h-[28px] font-sans font-semibold text-[20.6px] tracking-[0.02em] text-[#353535] leading-[28.05px] text-center ">
              Real-time Translation
            </span>
            <span className="w-[340.55px] h-[54px] font-sans font-normal text-[13.52px] tracking-[0.02em] text-[#676768] leading-[18.41px] text-center ">
              Experience instant translations as you upload or edit your
              documents. Our AI ensures you get the results you need without the
              wait.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center p-[16.0942px] gap-[7.73px] w-[403px] h-[269.34px] border-[#CFD0D1] flex-none order-0 flex-grow-0 bg-white">
            <img src="tab.jpg" className="w-[149.35px] h-[139.7px]" />
            <span className="w-[214px] h-[28px] font-sans font-semibold text-[20.6px] tracking-[0.02em] text-[#353535] leading-[28.05px] text-center ">
              Real-time Translation
            </span>
            <span className="w-[340.55px] h-[54px] font-sans font-normal text-[13.52px] tracking-[0.02em] text-[#676768] leading-[18.41px] text-center ">
              Experience instant translations as you upload or edit your
              documents. Our AI ensures you get the results you need without the
              wait.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
