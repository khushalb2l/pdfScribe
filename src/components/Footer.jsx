import EastIcon from "@mui/icons-material/East";
const Footer = () => {
  return (
    <div className="absolute w-[1440px] h-[593px] top-[4163px] bottom-0 bg-white">
      <div className="absolute w-[1074px] h-[385px] left-[183px] top-[100px]">
        <div className="absolute left-[77.85%] right-[19.72%] top-[350px] bottom-[18.21%]">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="linked.png"
              alt="LinkedIn"
              className="w-[35px] h-[35px]"
            />
          </a>
        </div>
        <div className="absolute left-[81.32%] right-[16.25%] top-[350px] bottom-[18.21%]">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="fb.png" alt="Facebook" className="w-[35px] h-[35px]" />
          </a>
        </div>
        <div className="absolute left-[84.79%] right-[12.78%] top-[350px] bottom-[18.21%]">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="x.png" alt="Twitter" className="w-[35px] h-[35px]" />
          </a>
        </div>

        <div className="absolute w-[250px] h-[18px] left-[419px] top-[359px] bottom-[19.56%] ">
          <p className="font-roboto font-medium text-[14px] leading-[16px] text-[#0A142F]  flex gap-[46.3px]">
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/privacy" className="hover:underline">
              {" "}
              Privacy
            </a>
            <a href="/cookies" className="hover:underline">
              {" "}
              Cookies
            </a>
          </p>
        </div>

        <div className="absolute w-[140px] h-[222px] ">
          <div className="absolute w-[57px] h-[28px] top-[32px] font-roboto font-bold text-[16px] leading-[28px] text-[#0A142F]">
            Product
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[75px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Employee database
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[107px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Payroll
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[139px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Absences
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[171px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Time tracking
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[203px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Shift planner
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[235px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Recruiting
          </div>
        </div>

        <div className="absolute w-[140px] h-[222px] left-[283px]">
          <div className="absolute w-[57px] h-[28px] top-[32px] font-roboto font-bold text-[16px] leading-[28px] text-[#0A142F]">
            Information
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[75px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            FAQ
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[107px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Blog
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[139px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Support
          </div>
        </div>

        <div className="absolute w-[140px] h-[222px] left-[515px]">
          <div className="absolute w-[57px] h-[28px] top-[32px] font-roboto font-bold text-[16px] leading-[28px] text-[#0A142F]">
            Company
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[75px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            About us
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[107px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Careers
          </div>
          <div className="absolute w-[140px] h-[19px]  top-[139px] font-roboto font-normal text-[14px] leading-[19px] text-[#0A142F] opacity-50">
            Contact us
          </div>
        </div>

        <div className="absolute w-[338px] h-[258px] left-[736px] bg-[#203c86] bg-opacity-[5%] ">
          <div className="absolute left-[42px] top-[32px] font-roboto font-bold text-[16px] leading-[28px] text-[#0A142F] text-opacity-100">
            Subscribe
          </div>
          <input
            type="email"
            placeholder="Email address"
            className="absolute  w-[248px] h-[50px] left-[42px] top-[75px] placeholder-gray-500 text-black border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          <button className="absolute w-[50px] h-[50px] left-[240px] top-[75px] bg-[#008080] text-white px-4 py-2 rounded-r-md flex items-center justify-center">
            <span className="flex items-center justify-center">
              <EastIcon />
            </span>
          </button>
          <p className="absolute left-[42px] top-[145px] right-[42px] font-roboto font-normal text-[12px] leading-[20px] text-[#0A142F] opacity-60">
            Hello, we are Lift Media. Our goal is to translate the positive
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
        </div>
        <div className="absolute w-[1074px] h-[1px] top-[312px]   bg-[#0A142F] opacity-[6%] border border-[#0A142F]" />
        <div className="flex flex-row justify-center items-center p-0 absolute w-[162.53px] h-[38.53px] top-[349px]">
          <div className="flex-none order-0 w-[38.53px] h-[38.53px]">
            <img src="logo1.png" alt="Logo" className="w-full h-full" />
          </div>
          <p className="font-open-sans text-[23.71px] font-semibold leading-[32.29px] text-left text-[#008080] ">
            PDFSCRIBE
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
