export default function Entry(props) {
  return (
    <article className=" pl-[40px] pr-[40px] mb-[36px] flex flex-row bg-white">
      <img
        src={props.img.src}
        alt={props.img.alt}
        className="h-[168px] w-[125px] object-cover rounded-[5px]"
      />
      <section className="flex flex-col items-start justify-center ml-[19px]">
        <div className="flex flex-row justify-start items-center">
          <img
            src="src/assets/marker.png"
            alt="Location sign"
            className="w-[7px] mr-[4px]"
          />
          <p className="text-[0.64rem] tracking-[2.5px] font-[inter]">
            {props.country.toUpperCase()}
          </p>
          <a
            href={props.googleMapsLink}
            target="_blank"
            className="text-[0.64rem] ml-[12px] text-[#918E9B] font-[inter] underline "
          >
            View on Google maps
          </a>
        </div>
        <h2 className="font-[inter] text-[1.56rem] font-bold mb-[17px]">
          {props.title}
        </h2>
        <p className="text-[0.64rem] font-[inter] font-bold mb-[9px]">
          {props.dates}
        </p>
        <p className="text-[0.64rem]/[0.96rem] font-[inter]">{props.text}</p>
      </section>
    </article>
  );
}
