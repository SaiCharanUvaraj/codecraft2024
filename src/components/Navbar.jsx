import Sidebar from "./Sidebar"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 fixed bg-white/5 backdrop-blur-sm rounded-b-3xl w-full">
        <p className="text-5xl font-bold text-[#5F85DB]">Hackathon Logo</p>
        <Sidebar/>
    </div>
  )
}

export default Navbar