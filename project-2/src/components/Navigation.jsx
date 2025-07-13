
const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[72px] container ">
        <div>
            <img src="/images/Frame 2 1.png" alt="Coding Logo" />
        </div>

        <ul className="flex gap-8 font-medium text-lg">
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation