const LandingScreen = () => {
  return (
    <div className="max-w-[1640px] md:mx-auto md:p-3">
      <div className="max-h-[600px] relative">
        <div className="absolute w-full h-full text-slate-100 bg-black/75 flex flex-col  justify-center">
          <h1 className="text-4xl ml-[40px] sm:text-5xl md:text-6xl">
            Som <span>Eventhe</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[600px]"
          src="https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default LandingScreen;
