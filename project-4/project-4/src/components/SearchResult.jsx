import { BASE_URL } from "../App"


const SearchResult = ({ data }) => {
  return (
    <div className='bg-[url("/images/bg.png")] h-screen bg-cover bg-center flex flex-wrap justify-center gap-6 p-6' style={{
        height: "calc(100vh - 240px)"}}>
        {
            data?.map((item, index) => (
                <div key={index} className="flex max-w-[340px] h-[150px] border-1 border-gray-300 rounded-lg">
                    <div className="w-[300px] h-full flex items-center justify-center">
                        <img src={BASE_URL + item.image} alt="" />
                    </div>
                    <div className="text-white">
                        <h3 className="font-medium text-[16px] ">{item.name}</h3>
                        <p className=" text-[12px]">{item.text}</p>
                        <button className="bg-[#ff4343] px-1 rounded-md mt-8">${item.price}.00</button>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default SearchResult