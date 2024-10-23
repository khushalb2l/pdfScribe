const Home = () => {
  return (
    <section id="home" className="w-[1440px] h-[789px] absolute top-[60px] left-[1px] gap-0 border-b-[0.5px] border-[#008080] border-opacity-50">
      <div className="flex flex-col items-center p-0 gap-6 absolute w-[630px] h-[738px] left-[406px] top-[25px]">
        <div className="flex flex-col items-center p-0 gap-2 w-[629px] h-[128px]">
          <p className="w-[181px] h-[16px] gap-0  font-sans text-[16px] font-semibold leading-[16px] tracking-[0.02em] text-center text-[#008080]">
            #AI-Powered Precision
          </p>
          <p className="w-[629px] h-[104px] gap-0 font-sans font-semibold text-[38px] leading-[51.75px] text-center text-[#353535]">
            Transform Your Documents with AI-Powered Precision
          </p>
        </div>
        <div className="w-[586px] h-[29px] gap-0 font-sans text-[21px] font-normal leading-[28.6px] text-center text-[#676768]">
          <p>Seamless, Accurate, and Fast Translations at Your Fingertips</p>
        </div>
        <div className="box-border flex flex-col justify-center items-center p-[25px] gap-[32px] w-[630px] h-[533px] bg-white border border-[#CFD0D1] rounded-[8px]">
          <div className="box-border flex flex-col items-center p-[32px] gap-[18px] w-[518px] h-[304px] bg-white border border-dashed border-[#CFD0D1] rounded-[8px]">
            <div className="w-[235px] h-[185px] flex-none order-0 flex-grow-0">
              <img src="logo2.png" alt="uploadLogo" />
            </div>
            <div className="flex flex-col items-center p-0 gap-[5px] w-[165px] h-[37px] flex-none order-1 flex-grow-0">
              <p className="w-[165px] h-[16px] gap-0 font-sans text-[16px] font-semibold leading-[16px] text-center text-[#676768] tracking-[0.02em]">
                Select Or Drop A File
              </p>
              <p className="w-[92px] h-[16px] gap-0 font-sans text-[12px] font-normal leading-[16px] text-center text-[#676768] tracking-[0.02em]">
                File Upto 25 MB
              </p>
            </div>
          </div>
          <div className="box-border flex flex-row items-center p-[8px] px-[12px] gap-[334px] w-[521px] h-[40px] bg-white border border-[#CFD0D1] rounded-[4px] flex-none order-1 flex-grow-0">
            <p className=" w-[127px] h-[16px] font-sans text-left text-[16px] font-semibold leading-[16px] text-[#676768]">
              Chose Language
            </p>
            <img className="w-[24px] h-[24px] text-right" src="logo3.png" />
          </div>
          <div className="flex flex-row justify-center items-center w-[112px] h-[40px] p-[12px_16px] gap-[8px] rounded-[10px_10px_10px_10px] flex-none order-2 bg-[#008080]">
            <span className="text-white font-semibold">Translate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
