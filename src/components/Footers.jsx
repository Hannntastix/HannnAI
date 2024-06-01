import { Footer } from "flowbite-react";

const Footers = () => {
    return (
        <>
            <hr />
            <Footer className="px-5 md:container py-5 border-0 shadow-none overflow-hidden mx-auto bg-black">
                <Footer.Copyright href="#" by="Hannntastix" year={2024} />
                <Footer.LinkGroup>
                    <Footer.Link href="https://github.com/Hannntastix">Github</Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/in/mraihan-athalah/">Linkedin</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/m.raihanathalah">Instagram</Footer.Link>
                    <Footer.Link href="https://hannntastix.github.io/Web-Personal-Portofolio/">Portfolio</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </>
    );
}

export default Footers;