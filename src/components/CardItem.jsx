const CardItem = ({ item }) => {
  return (
    <div className="text-white  hover:scale-105 hover:shadow-2xl hover:border-[#6c6767] bg-[#09090b] min-w-[300px] w-[300px] h-[500px]  transition  border-2 rounded-xl flex flex-col border-[#2f2f2f]">
      <div>
        <img
          src={
            item.images
              ? item.images[0]
              : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          }
          className="w-full h-fit rounded-t-xl"
          alt=""
        />
      </div>
      <div className="px-4 flex flex-col justify-between h-full">
        <div>
          <h1 className="font-bold text-xl text-[#e8eaea]">{item.title}</h1>
          <p className="text-[#afb0b1] truncate text-sm">{item.description}</p>
        </div>
        <span className="text-2xl mb-5">${item.price}</span>
      </div>
    </div>
  );
};

export default CardItem;
