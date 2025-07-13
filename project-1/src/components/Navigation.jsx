

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between mx-auto h-[72px] max-w-[1280px]">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>

      <ul className="flex list-none gap-[24px]">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="px-[16px] py-[6px] bg-red-600 font-medium text-white">Login</button>
    </nav>
  )
}

export default Navigation