import { useState } from 'react';
import button from "../img/button.png";
import groupe from "../img/groupe.png";
import photoShoot1 from "../img/340925348_135638799427130_3225513012971933356_n.jpg";
import photoShoot2 from "../img/IMG_2656.JPG";
//import photoTeam1 from "../img/";
import photoTeam2 from "../img/IMG_2869.JPG";

export default function Project(){
    const [openSection, setOpenSection] = useState(null);
    const toggleText = (sectionName) => {
        if (openSection === sectionName) {
            setOpenSection(null); // Close the currently open section
        } else {
            setOpenSection(sectionName); // Open the clicked section
        }
    };

    return (
        <main className="project">
            <section className="title">
                <img src={groupe} alt="un groupe de personnes grosses, certaines debout, d'autres assises"/>
                <h1>Le projet</h1>
            </section>
            <section className={`blurb1 ${openSection === 'blurb1' ? 'open' : ''}`}>
                <p className="hash">#A</p>
                <h3>L'essence du projet</h3>
                <p className="shortText">L'idée du projet Ample, c'est de donner un espace & des moyens aux personnes grosses pour qu'elles puissent...</p>
                <div className="fullText">
                    <img src={photoShoot1} alt="une personne debout face à un appareil dans un studio de photographie" className="projectPic"/>
                    <p>L'idée du projet Ample, c'est de donner un espace & des moyens aux personnes grosses pour qu'elles puissent s'exprimer sur ce qu'elles vivent dans l'espace public, en tant que personnes grosses (la grossophobie vécue, l'inconfort des infrastructures, la pression sociale, etc).
                    <br/>
                    En plus de vouloir offrir un espace aux concerné•e•s, il y a également une volonté d'informer et de sensibiliser le plus de personnes possible à la grossophobie et à leurs propres comportements grossophobes.
                    Dans un second temps, nous souhaitons conscientiser la société à la problématique de l'espace public qui peut être (et est) excluant et source de charge mentale.</p>
                </div>
                <button onClick={() => toggleText('blurb1')}><img src={button} alt="un triangle blanc sur fond orange"/></button>
            </section>
            <section className={`blurb2 ${openSection === 'blurb2' ? 'open' : ''}`}>
                <p className="hash">#B</p>
                <h3>Nos objectifs</h3>
                <p className="shortText">Nous avons un objectif général : Réduire la grossophobie sociétale et systémique en rendant...</p>
                <div className="fullText">
                    <p>
                        Nous avons un objectif général :<br/>
                        Réduire la grossophobie sociétale et systémique en rendant l'espace public plus acceuillant et adapté aux corps gros. 
                        Cet objectif général se décline en deux objectifs de communications liés à nos deux publics cibles :
                        <ul>
                            <li>Donner de la visibilité aux personnes grosses dans l'espace public et leur permettre de se sentir plus incluses et valorisées dans cet espace.</li>
                            <li>Sensibiliser les personnes non-grosses à la grossophobie et au manque d'adaptation et d'inclusivité de l'espace public envers les personnes grosses, ainsi que leur faire prendre conscience de leurs propores biais et comportements grossophobes pour les amener à diminuer la discrimination et la stigmatisation envers les personnes grosses.</li>
                        </ul>
                    </p>
                </div>
                <button onClick={() => toggleText('blurb2')}><img src={button} alt="un triangle blanc sur fond orange"/></button>
            </section>
            <section className={`blurb3 ${openSection === 'blurb3' ? 'open' : ''}`}>
                <p className="hash">#C</p>
                <h3>Notre équipe</h3>
                <p className="shortText">Nous sommes toutes étudiantes en Animation Socio-Culturelle & Education Permanente à l'IHECS...</p>
                <div className="fullText">
                    <img/>
                    <p>
                        Nous sommes toutes étudiantes en Animation Socio-Culturelle & Education Permanente à l'IHECS. 
                        Nous avons toutes, au cours de notre vie, été confrontées à la grossophobie. 
                        De manière soit indirecte, à cause des standards de beauté et de la grossophobie systémique, soit de manière directe, ayant été ou étant une personne sur le spectre de la grosseur. 
                        Ce projet nous tient à cœur et nous semble essentiel afin d'évoluer dans une société plus inclusive, plus bienveillante, en participant, à notre échelle, à la déconstruction de cette discrimination. 
                        Nous ne nous revendiquons pas expertes du sujet. Certaines d'entres nous connaissent le <i>fat activism</i> et y participent depuis plus ou moins longtemps, nos publications et actions sont le résultat de recherches et d'auto-sensibilisation.
                    </p>
                    <img src={photoTeam2} alt="deux personnes regardant des photos sur une table" className="teamPic2"/>
                </div>
                <button onClick={() => toggleText('blurb3')}><img src={button} alt="un triangle blanc sur fond orange"/></button>
            </section>
            <section className={`blurb4 ${openSection === 'blurb4' ? 'open' : ''}`}>
                <p className="hash">#D</p>
                <h3>Nos remerciements</h3>
                <p className="shortText">Nous voulons tout d'abord remercier nos intervenant.es qui nous ont fait confiance tout au long...</p>
                <div className="fullText">
                <img src={photoShoot2} alt="une personne se faisant photographier dans un studio photo" className="thanksPic1"/>
                    <h6>nos intervenant.es</h6>
                    <p>
                        Nous voulons tout d'abord remercier nos intervenant.es qui nous ont fait confiance tout au lont de ce projet. 
                        Sans eux/elles, ce projet n'aurait pas vu le jour. Merci pour leur courage, leurs émotions et leurs témoignages. 
                        Ce n'était pas un exercice facile, mais nous espérons que grâce à eux/elles, notre projet pourra toucher et inspirer d'autres personnes.
                        <br/>Merci Cassandra !
                        <br/>Merci Melissa !
                        <br/>Merci Loïc !
                        <br/>Merci Emma !
                        <br/>Merci Rabi !
                        <br/>Merci Adeline !
                    </p>
                    <img/>
                    <h6>we.art.xl (parcours d'artistes d'ixelles)</h6>
                    <img/>
                    <p>
                        Nous avons la chance de faire partie du parcours d'artistes d'Ixelles 2023 qui se déroule du 12 au 15 octobre 2023 dans le quartier de l'université. 
                        Nous exposerons une partie de notre travail sur la place de la Petite Suisse. Nos sommes très reconnaissantes pour cette opportunité. 
                        Grâce à cette collaboration, nous pouvons exposer nos travaux sur la voie publique, le cœur du projet. 
                        Nous pouvons donner un petit peu de place aux personnes grosses dans cet espace peu ou pas inclusif pour elles.
                    </p>
                </div>
                <button onClick={() => toggleText('blurb4')}><img src={button} alt="un triangle blanc sur fond orange"/></button>
            </section>
            <section className={`blurb5 ${openSection === 'blurb5' ? 'open' : ''}`}>
                <p className="hash">#E</p>
                <h3>Quelques backstages</h3>
                <p className="shortText">Quelques photos prises lors de nos séances de shoot, non retenues pour le projet...</p>
                <div className="fullText">
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
                <button onClick={() => toggleText('blurb5')}><img src={button} alt="un triangle blanc sur fond orange"/></button>
            </section>
        </main>
    );
};