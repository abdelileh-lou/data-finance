import Single from "../assets/single.png";
import Triple from "../assets/triple.png";
import Double from "../assets/double.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100">
          <img className="w-20 mx-auto  bg-white" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 3 GB</p>
            <button className=" bg-[#00df9a]  w-[200px] font-medium mx-auto my-6 py-3 rounded-md hover:bg-emerald-500  text-black duration-200">
              Start Trial
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100">
          <img className="w-20 mx-auto  bg-white" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 3 GB</p>
            <button className=" bg-[#00df9a]  w-[200px] font-medium mx-auto my-6 py-3 rounded-md hover:bg-emerald-500  text-black duration-200">
              Start Trial
            </button>
          </div>
        </div>
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-100">
          <img className="w-20 mx-auto  bg-white" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">Send up to 3 GB</p>
            <button className=" bg-[#00df9a]  w-[200px] font-medium mx-auto my-6 py-3 rounded-md hover:bg-emerald-500  text-black duration-200">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
