

const Hero = ()=> {
  return (
    <main className="hero flex items-center justify-between max-w-[1280px] mx-auto h-screen">
      <div className="flex flex-col gap-[30px]">
        <h1 className="font-extrabold text-[108px] leading-[102px] max-w-[595px]">YOUR FEET DESERVE THE BEST</h1>
        <p className="font-medium text-[16px] text-gray-400 max-w-[400px]">
          YOUR FEET DESERVE THE BESTYOUR FEET DESERVE THE BESTYOUR FEET DESERVE
          THE BESTYOUR FEET DESERVE THE BEST
        </p>
        <div className="flex gap-[40px]">
          <button className="px-[16px] py-[6px] bg-red-600 font-medium text-white text-[20px]">Shop Now</button>
          <button className="px-[16px] py-[6px]  bg-transparent border-2 font-medium text-black text-[20px]">Category</button>
        </div>

        <div>
          <p className="text-[14px] mb-[8px]">Also Available On</p>

          <div className="flex gap-4">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>


        </div>
      </div>
      <div>
            <img src="/images/shoe_image.png" alt="amazon-logo" />
      </div>
    </main>
  );
}

export default Hero;
