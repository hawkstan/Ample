import { Outlet, useLocation } from "react-router-dom";
import Header from "./routes/Header";
import Footer from "./routes/Footer"
import Wave from "./routes/Wave";

export default function Layout() {
    //ce fichier sert à dire à la page comment se construire :
    //header, la page actuelle, puis footer
    //c'est plus facile pour modifier un élément
    //mtn sur certaines pages on veut un footer de couleur diff
    const location = useLocation();
    const getFooterColor = () => {
        const { pathname } = location;
        if (pathname === "/") {
            return "#151730";
        } else if (pathname === "/home") {
            return "#151730";
        } else if (pathname.startsWith("/models/")) {
            return "#151730";
        } else {
            return "#d0c4e8";
        }
    };
    //si d'autres pages auraient besoin d'une couleur diff aussi,
    //il suffit de les rajouter ici
    //juste le else ce n'est que pour la dernière option,
    //celle qui doit être la normale par défaut sans circonstances spéciales
    const footerColor = {
        backgroundColor: getFooterColor(),
    };

    return (
        <>
            <Header />
            <Outlet />
            {/* <Wave style={footerColor} /> */}
            <Footer style={footerColor} />
        </>
    )
};