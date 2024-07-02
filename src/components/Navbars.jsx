import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Navbars = () => {
    const location = useLocation()
    return (
        <Navbar rounded className=" bg-black">
            <Navbar.Brand as={Link} to="#">
                <img src="https://static.vecteezy.com/system/resources/previews/021/820/175/original/computer-chip-with-ai-letters-3d-artificial-intelligence-icon-png.png" className="mr-5 h-9 sm:h-9" alt="AI" />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-400 font-mono">HannnAI 1.4</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/" active={
                    location.pathname === "/"
                }>
                    Home
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbars;