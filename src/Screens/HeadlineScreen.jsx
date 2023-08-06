const HeadlineScreen = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 md:py-12 grid md:grid-cols-3 gap-4">
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div
          className="rounded-2xl max-h-[200px] absolute w-full h-full bg-black/50 rounded-xl text-white
          "
        >
          <p className="mt-[20px] text-4xl font-bold px-2">
            Best of best just doing it ..
          </p>
          <p className="text-1xl font-semibold">Do it while u still can</p>
          <button className="bg-violet-500 border-gray-400">View</button>
        </div>
        <img
          className="w-full object-cover max-h-[200px] w-full rounded-xl"
          src="https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>

      <div className="rounded-xl relative">
        {/* Overlay */}
        <div
          className="rounded-2xl max-h-[200px] absolute w-full h-full bg-black/50 rounded-xl text-white
          "
        >
          <p className="mt-[20px] text-4xl font-bold px-2">
            Best of best just doing it ..
          </p>
          <p className="text-1xl font-semibold">Do it while u still can</p>
          <button className="  bg-violet-500 border-gray-400">View</button>
        </div>
        <img
          className="w-full object-cover max-h-[200px] w-full rounded-xl"
          src="https://images.pexels.com/photos/3497541/pexels-photo-3497541.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div
          className="rounded-2xl max-h-[200px] absolute w-full h-full bg-black/50 rounded-xl text-white
          "
        >
          <p className="mt-[20px] text-4xl font-bold px-2">
            Best of best just doing it ..
          </p>
          <p className="text-1xl font-semibold">Do it while u still can</p>
          <button className="  bg-violet-500 border-gray-400">View</button>
        </div>
        <img
          className="w-full object-cover max-h-[200px] w-full rounded-xl"
          src="https://images.pexels.com/photos/8686319/pexels-photo-8686319.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default HeadlineScreen;
