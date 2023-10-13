import { useState } from 'react';
import rainbow from "../img/rainbow.svg"; //see if possible to have png instead
import star from "../img/star2.svg";

export default function Testimonies(){
    const [openSection, setOpenSection] = useState(null);
    const toggleText = (sectionName) => {
        if (openSection === sectionName) {
            setOpenSection(null); // Close the currently open section
        } else {
            setOpenSection(sectionName); // Open the clicked section
        }
    };

    return (
        <main className="testimonies">
            <section className="title">
                <img src={rainbow} alt="une vague colorée en 4 bandes correspondant à la palette couleur du site" className="rainbow" />
                <h1>Témoignages</h1>
                <p>
                    Les témoignages recueillis forment la base même de l'impact de ce projet. 
                    Nous remercions profondément toutes les personnes qui se sont volontairement, et avec grand courage, délivré.e.s à nous.
                    <br/>Merci.
                </p>
                <p className="tw"><span>TW</span>/ Grossophobie, propos grossophobes violents.</p>
                <img src={star} alt="une étoile" className="star" />
            </section>
            <section className={`testi1 ${openSection === 'testi1' ? 'open' : ''}`}>
                <p className="hash">#01</p>
                <h3>ANONYME, 24 ans</h3>
                <p className="shortText">blurb court</p>
                <div className="fullText">
                    <p>
                        En rue, à Bruxelles, j'ai croisé un groupe de garçons qui, visiblement, s'amusaient à commenter toutes les femmes qui passaient.
                        <br/>Quand je suis passée à côté d'eux, ils ont dit <b>« Elle, c'est plutôt Moby Dick »</b>. 
                        Cette phrase m'a marquée et je pense que <span>je ne pourrais jamais l'oublier</span>.
                    </p>
                </div>
                <button onClick={() => toggleText('testi1')}><p>Voir plus</p></button>
            </section>
            <section className={`testi2 ${openSection === 'testi2' ? 'open' : ''}`}>
                <p className="hash">#02</p>
                <h3>ANONYME, 24 ans</h3>
                <p className="shortText">blurb court</p>
                <div className="fullText">
                    <p>témoignage long avec fond</p>
                </div>
                <button onClick={() => toggleText('testi2')}>Voir plus</button>
            </section>
            <section className={`testi3 ${openSection === 'testi3' ? 'open' : ''}`}>
                <p className="hash">#03</p>
                <h3>ÉLOÏSE, 28 ans</h3>
                <p className="shortText">blurb court</p>
                <div className="fullText">
                    <p>témoignage long avec fond</p>
                </div>
                <button onClick={() => toggleText('testi3')}>Voir plus</button>
            </section>
        </main>
    );
};