import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Navbars = () => {
    const { login, register, isAuthenticated, logout } = useKindeAuth()
    const location = useLocation()

    return (
        <Navbar rounded className=" bg-black">
            <Navbar.Brand as={Link} to="#">
                <img src="https://static.vecteezy.com/system/resources/previews/021/820/175/original/computer-chip-with-ai-letters-3d-artificial-intelligence-icon-png.png" className="mr-5 h-9 sm:h-9" alt="AI" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-400 font-mono">HannnAI 2.0</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {isAuthenticated ? (
                    <>
                        <Navbar.Link href="/" active={
                            location.pathname === "/"
                        }>
                            Home
                        </Navbar.Link>
                        <Navbar.Link target="blank" className="xl:block hidden" href="https://tictactoe-hannnai.vercel.app/" active={
                            location.pathname === "https://tictactoe-hannnai.vercel.app/"
                        }>
                            Play Game
                        </Navbar.Link>
                        <button onClick={logout} type="button" className="text-indigo-700 hover:text-indigo-950 bg-none">
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={login} type="button" className="text-indigo-700 hover:text-indigo-950 bg-none">
                            Sign In
                        </button>
                        <button onClick={register} type="button" className="text-indigo-700 hover:text-indigo-950">
                            Sign Up
                        </button>
                    </>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;