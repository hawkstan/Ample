import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer"

export default function Layout() {
    //ce fichier sert à dire à la page comment se construire :
    //header, la page actuelle, puis footer
    //c'est plus facile pour modifier un élément
    //mtn sur certaines pages on veut un footer de couleur diff
    const location = useLocation();
    const getFooterColor = () => {
        const { pathname } = location;
        if (pathname === "/home") {
            return "#151730";
        } else {
            return "#d0c4e8";
        }
    };
    //si d'autres pages auraient besoin d'une couleur diff aussi,
    //il suffit de les rajouter ici
    //exactement comme plus haut mais avec else if plutôt que juste else
    //juste le else ce n'est que pour la dernière option,
    //celle qui doit être la normale par défaut sans circonstances spéciales
    const footerColor = {
        backgroundColor: getFooterColor(),
    };

    return (
        <>
            <Header />
            <Outlet />
            <Footer style={footerColor} />
        </>
    )
};