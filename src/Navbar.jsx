function Navbar() {
    return (
        <>
            <header className="text-gray-600 body-font shadow-xl" style={{'background':'#eeeeeb'}}>
                <div className="w-full flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-darktheme-500 mb-4 md:mb-0">

                        <h1 className="text-darktheme-500 text-2xl">3Commerce</h1>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 text-darktheme-500 text-lg cursor-pointer">Home</a>
                        <a className="mr-5 text-darktheme-500 text-lg cursor-pointer">Orders</a>
                        <a className="mr-5 text-darktheme-500 text-lg cursor-pointer">Cart</a>
                        <a className="mr-5 text-darktheme-500 text-lg cursor-pointer">Wishlist</a>
                    </nav>
                    <div className='flex'>
                        <div onClick={() => {
                            // settexture(-1);
                        }} class="rounded-md px-3.5  py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-darktheme-500 text-darktheme-500 hover:text-white">
                            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darktheme-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span class="relative text-darktheme-500 transition duration-300 group-hover:text-white ease">Login</span>
                        </div>
                        <div onClick={() => {
                            // settexture(-1);
                        }} class="rounded-md px-3.5  py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-darktheme-500 text-darktheme-500 hover:text-white">
                            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-darktheme-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                            <span class="relative text-darktheme-500 transition duration-300 group-hover:text-white ease">Sign Up</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;