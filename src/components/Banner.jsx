function Banner() {
  return (
    <div className="w-full relative h-[350px] my-5">
      <img
        className="object-cover object-bottom w-full h-full select-none"
        src="https://ecommercegermany.com/wp-content/uploads/2019/10/EcomCover-13-1170x780.png"
      />
      <div className="absolute top-0 flex items-center justify-center flex-col gap-2 left-0 z-10 w-full h-full bg-black/50">
        <h1 className="text-2xl font-medium text-[#e8eaea] select-none">
          Save up to 50% with discount code
        </h1>
        <span className="text-5xl font-bold text-white select-auto">
          #SUMMER2024STARTSNOW
        </span>
      </div>
    </div>
  );
}

export default Banner;
