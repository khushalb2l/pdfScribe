import Card from "./Card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="absolute w-[1430px] h-[509px] top-[1370px] box-border border-t-[0.5px] border-[#008080] border-opacity-50">
      <div className="absolute w-[1146.16px] h-[408.53px] left-[142.26px] top-[50.8px] flex flex-col items-center p-0 gap-[24px]">
        <div className="flex flex-col justify-center items-center w-[433px] h-[62.96px] p-0 gap-[5.96px]">
          <span className="inline-block w-[101px] h-[16px] font-semibold text-[11.92px] leading-[16.23px] tracking-[0.02em] text-[#008080] text-center">
            #Testimonials
          </span>
          <span className="inline-block w-[433px] h-[41px] font-semibold text-[29.79px] leading-[40.57px] tracking-[0.02em] text-[#353535] text-center">
            What our clients say about us.
          </span>
        </div>
        <div className="flex flex-row justify-center items-center w-[1146.16px] h-[321.57px] p-0 gap-[47.67px]">
          <div className="flex flex-row justify-center items-center w-[1146.16px] h-[321.57px] p-0 gap-[48px]">
            <Card
              image="jam.png"
              title="James Pattinson"
              rating={4}
              para="“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.”"
            />
            <Card
              image="g.png"
              title="Greg Stuart"
              rating={5}
              para="“Vestibulum, cum nam non amet consectetur morbi aenean condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh ultrices.”"
            />
            <Card
              image="t.png"
              title="Trevor Mitchell"
              rating={3}
              para="“Ut tristique viverra sed porttitor senectus. A facilisis metus pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec, id sed. Tincidunt.”"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
