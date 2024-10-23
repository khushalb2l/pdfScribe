import { useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("How did you find us?");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <section id="contact" className="absolute w-[1441px] h-[662px] top-[3501px] bg-[#FEFFFF]">
      <div className="absolute w-[595px] h-[544px] left-[423px] top-[50px] flex flex-col items-start p-[25px] gap-[40px] bg-white border-[#CFD0D1] border-[0.5px] rounded-[8px] box-border">
        <div className="flex flex-col items-center p-0 gap-[8px] w-[545px] h-[124px]">
          <p className="w-[85px] h-[16px] font-open-sans font-semibold text-[11.9167px] leading-[16px] text-center tracking-[0.03em] uppercase text-[#008080]">
            #Contact us
          </p>
          <h1 className="w-[545px] h-[44px] font-open-sans font-semibold text-[32px] leading-[44px] text-center text-[#353535]">
            Get in Touch
          </h1>
          <div className="flex flex-col items-start p-0 gap-[20px] w-[545px] h-[48px]">
            <p className="w-[545px] h-[48px] font-open-sans font-semibold text-[14px] leading-[24px] text-center tracking-[0.01em] text-[#929394]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start p-0 gap-[20px] w-[545px] h-[330px]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Name*"
              className="border border-[#CFD0D1] rounded-[8px] h-[50px] p-[12px] w-full placeholder:text-transparent"
              required
            />
            <span className="absolute left-[12px] top-[12px] text-[#929394]">
              Name <span className="text-red-500 ">*</span>
            </span>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="border border-[#CFD0D1] rounded-[8px] h-[50px] p-[12px] w-full placeholder:text-[#929394]"
            required
          />

          <div className="relative w-full">
            <input
              type="tel"
              placeholder="Phone Number*"
              className="border border-[#CFD0D1] rounded-[8px] h-[50px] p-[12px] w-full placeholder:text-transparent"
              required
            />
            <span className="absolute left-[12px] top-[12px] text-[#929394]">
              Phone number <span className="text-red-500 ">*</span>
            </span>
          </div>

          <div className="relative w-full">
            <input
              type="text"
              value={selectedOption}
              onClick={toggleDropdown}
              readOnly
              className="border border-[#CFD0D1] rounded-[8px] h-[50px] p-[12px] pr-[40px] w-full placeholder:text-[#929394]"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#000000]">
              &#9660;
            </span>

            {isOpen && (
              <div className="absolute left-0 right-0 mt-1 bg-white border border-[#CFD0D1] rounded-[8px] z-10">
                <div
                  className="py-2 px-4 hover:bg-[#f0f0f0] cursor-pointer"
                  onClick={() => handleOptionSelect("Friend")}
                >
                  Friend
                </div>
                <div
                  className="py-2 px-4 hover:bg-[#f0f0f0] cursor-pointer"
                  onClick={() => handleOptionSelect("Website")}
                >
                  Website
                </div>
                <div
                  className="py-2 px-4 hover:bg-[#f0f0f0] cursor-pointer"
                  onClick={() => handleOptionSelect("Social Media")}
                >
                  Social Media
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#008080] text-white rounded-[8px] h-[50px] p-[12px] pl-[24px] pr-[24px] gap-[10px] w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
