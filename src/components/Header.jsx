import globe from "../assets/globe.png";

export default function Header() {
  return (
    <header className="bg-[#F55A5A] w-full h-[3.45rem] flex flex-row justify-center items-center mb-[45px]">
      <img src={globe} alt="Globe" className="size-[1.5rem]" />
      <h1 className="text-[0.97rem] font-[inter] text-white m-[0.43rem] font-medium">
        my travel journal
      </h1>
    </header>
  );
}
