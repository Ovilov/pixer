
function Navbar() {
  return ( 
    <>
      <div className="navbar bg-base-100 border-b-4">
        <div className="flex-1">
          <a className="text-xl font-bold">Pixer</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center ">
            <li><a href="#">Bosh sahifa</a></li>
            <li><a href="#">Xizmatlar</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Jamoa</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Kontaktlar</a></li>
            <li>
              <button className="btn bg-[#00BAFC] text-white">
                +998 90 921 37 11
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
   );
}

export default Navbar;