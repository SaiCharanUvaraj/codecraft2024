import Sidebar from "./Sidebar"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5 fixed bg-white/5 backdrop-blur-xl border-b-2 border-white/15 shadow-xl shadow-white/5 w-full z-10">
        <p className="text-5xl font-bold text-[#5F85DB]">Hackathon Logo</p>
        <Sidebar/>
    </div>
  )
}

export default Navbar