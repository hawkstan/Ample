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
                <img src={groupe} alt="un groupe de personnes grosses, certaines debout, d'autres assises"></img>
                <h1>Le projet</h1>
            </section>
            <section className={`blurb1 ${openSection === 'blurb1' ? 'open' : ''}`}>
                <p className="hash">#A</p>
                <h3>L'essence du projet</h3>
                <img src={photoShoot1} alt="une personne debout face à un appareil dans un studio de photographie" className="projectPic"></img>
                <p className="shortText">L'idée du projet Ample, c'est de donner un espace & des moyens aux personnes grosses pour qu'elles puissent</p>
                <p className="fullText">
                    L'idée du projet Ample, c'est de donner un espace & des moyens aux personnes grosses pour qu'elles puissent s'exprimer sur ce qu'elles vivent dans l'espace public, en tant que personnes grosses (la grossophobie vécue, l'inconfort des infrastructures, la pression sociale, etc).
                    <br/>
                    En plus de vouloir offrir un espace aux concerné•e•s, il y a également une volonté d'informer et de sensibiliser le plus de personnes possible à la grossophobie et à leurs propres comportements grossophobes.
                    Dans un second temps, nous souhaitons conscientiser la société à la problématique de l'espace public qui peut être (et est) excluant et source de charge mentale.
                </p>
                <button onClick={() => toggleText('blurb1')}><img src={button} alt="un triangle blanc sur fond orange"></img></button>
            </section>
            <section className={`blurb2 ${openSection === 'blurb2' ? 'open' : ''}`}>
                <p className="hash">#B</p>
                <h3>Nos objectifs</h3>
                <p className="shortText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className="fullText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Et leo duis ut diam quam nulla porttitor massa. Egestas dui id ornare arcu odio. Eu facilisis sed odio morbi quis commodo odio aenean. Blandit aliquam etiam erat velit scelerisque in dictum. Sit amet nisl purus in mollis nunc sed id semper. Est sit amet facilisis magna etiam tempor. Nisl purus in mollis nunc sed id semper risus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Elementum nisi quis eleifend quam adipiscing vitae.<br/>Euismod in pellentesque massa placerat duis ultricies lacus sed. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Feugiat scelerisque varius morbi enim nunc. Congue nisi vitae suscipit tellus mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. A scelerisque purus semper eget duis at tellus at. Sed enim ut sem viverra. In egestas erat imperdiet sed. Tempus imperdiet nulla malesuada pellentesque. Aliquam faucibus purus in massa tempor. Tellus orci ac auctor augue mauris augue neque.<br/>Elit duis tristique sollicitudin nibh sit amet. Arcu non odio euismod lacinia at quis. Non diam phasellus vestibulum lorem sed risus ultricies. Sit amet nisl purus in mollis nunc sed id semper. Sem et tortor consequat id porta nibh venenatis cras sed. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Arcu vitae elementum curabitur vitae nunc sed. Eu sem integer vitae justo eget magna fermentum iaculis eu. Ullamcorper morbi tincidunt ornare massa. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pellentesque id nibh tortor id aliquet. Duis tristique sollicitudin nibh sit amet commodo. Diam vulputate ut pharetra sit amet aliquam. Ac tortor vitae purus faucibus ornare suspendisse. Euismod nisi porta lorem mollis aliquam. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ullamcorper velit sed ullamcorper morbi. Auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <button onClick={() => toggleText('blurb2')}><img src={button} alt="un triangle blanc sur fond orange"></img></button>
            </section>
            <section className={`blurb3 ${openSection === 'blurb3' ? 'open' : ''}`}>
                <p className="hash">#C</p>
                <h3>Notre équipe</h3>
                {/* <img></img> */}
                <p className="shortText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className="fullText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Et leo duis ut diam quam nulla porttitor massa. Egestas dui id ornare arcu odio. Eu facilisis sed odio morbi quis commodo odio aenean. Blandit aliquam etiam erat velit scelerisque in dictum. Sit amet nisl purus in mollis nunc sed id semper. Est sit amet facilisis magna etiam tempor. Nisl purus in mollis nunc sed id semper risus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Elementum nisi quis eleifend quam adipiscing vitae.<br/>Euismod in pellentesque massa placerat duis ultricies lacus sed. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Feugiat scelerisque varius morbi enim nunc. Congue nisi vitae suscipit tellus mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. A scelerisque purus semper eget duis at tellus at. Sed enim ut sem viverra. In egestas erat imperdiet sed. Tempus imperdiet nulla malesuada pellentesque. Aliquam faucibus purus in massa tempor. Tellus orci ac auctor augue mauris augue neque.<br/>Elit duis tristique sollicitudin nibh sit amet. Arcu non odio euismod lacinia at quis. Non diam phasellus vestibulum lorem sed risus ultricies. Sit amet nisl purus in mollis nunc sed id semper. Sem et tortor consequat id porta nibh venenatis cras sed. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Arcu vitae elementum curabitur vitae nunc sed. Eu sem integer vitae justo eget magna fermentum iaculis eu. Ullamcorper morbi tincidunt ornare massa. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pellentesque id nibh tortor id aliquet. Duis tristique sollicitudin nibh sit amet commodo. Diam vulputate ut pharetra sit amet aliquam. Ac tortor vitae purus faucibus ornare suspendisse. Euismod nisi porta lorem mollis aliquam. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ullamcorper velit sed ullamcorper morbi. Auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <img src={photoTeam2} alt="deux personnes regardant des photos sur une table" className="teamPic2"></img>
                <button onClick={() => toggleText('blurb3')}><img src={button} alt="un triangle blanc sur fond orange"></img></button>
            </section>
            <section className={`blurb4 ${openSection === 'blurb4' ? 'open' : ''}`}>
                <p className="hash">#D</p>
                <img src={photoShoot2} alt="une personne se faisant photographier dans un studio photo" className="thanksPic1"></img>
                <h3>Nos remerciements</h3>
                <p className="shortText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className="fullText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Et leo duis ut diam quam nulla porttitor massa. Egestas dui id ornare arcu odio. Eu facilisis sed odio morbi quis commodo odio aenean. Blandit aliquam etiam erat velit scelerisque in dictum. Sit amet nisl purus in mollis nunc sed id semper. Est sit amet facilisis magna etiam tempor. Nisl purus in mollis nunc sed id semper risus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Elementum nisi quis eleifend quam adipiscing vitae.<br/>Euismod in pellentesque massa placerat duis ultricies lacus sed. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Feugiat scelerisque varius morbi enim nunc. Congue nisi vitae suscipit tellus mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. A scelerisque purus semper eget duis at tellus at. Sed enim ut sem viverra. In egestas erat imperdiet sed. Tempus imperdiet nulla malesuada pellentesque. Aliquam faucibus purus in massa tempor. Tellus orci ac auctor augue mauris augue neque.<br/>Elit duis tristique sollicitudin nibh sit amet. Arcu non odio euismod lacinia at quis. Non diam phasellus vestibulum lorem sed risus ultricies. Sit amet nisl purus in mollis nunc sed id semper. Sem et tortor consequat id porta nibh venenatis cras sed. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Arcu vitae elementum curabitur vitae nunc sed. Eu sem integer vitae justo eget magna fermentum iaculis eu. Ullamcorper morbi tincidunt ornare massa. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pellentesque id nibh tortor id aliquet. Duis tristique sollicitudin nibh sit amet commodo. Diam vulputate ut pharetra sit amet aliquam. Ac tortor vitae purus faucibus ornare suspendisse. Euismod nisi porta lorem mollis aliquam. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ullamcorper velit sed ullamcorper morbi. Auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <button onClick={() => toggleText('blurb4')}><img src={button} alt="un triangle blanc sur fond orange"></img></button>
            </section>
            <section className={`blurb5 ${openSection === 'blurb5' ? 'open' : ''}`}>
                <p className="hash">#E</p>
                <h3>Quelques backstage</h3>
                <p className="shortText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className="fullText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida. Et leo duis ut diam quam nulla porttitor massa. Egestas dui id ornare arcu odio. Eu facilisis sed odio morbi quis commodo odio aenean. Blandit aliquam etiam erat velit scelerisque in dictum. Sit amet nisl purus in mollis nunc sed id semper. Est sit amet facilisis magna etiam tempor. Nisl purus in mollis nunc sed id semper risus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Elementum nisi quis eleifend quam adipiscing vitae.<br/>Euismod in pellentesque massa placerat duis ultricies lacus sed. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Feugiat scelerisque varius morbi enim nunc. Congue nisi vitae suscipit tellus mauris. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. A scelerisque purus semper eget duis at tellus at. Sed enim ut sem viverra. In egestas erat imperdiet sed. Tempus imperdiet nulla malesuada pellentesque. Aliquam faucibus purus in massa tempor. Tellus orci ac auctor augue mauris augue neque.<br/>Elit duis tristique sollicitudin nibh sit amet. Arcu non odio euismod lacinia at quis. Non diam phasellus vestibulum lorem sed risus ultricies. Sit amet nisl purus in mollis nunc sed id semper. Sem et tortor consequat id porta nibh venenatis cras sed. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Arcu vitae elementum curabitur vitae nunc sed. Eu sem integer vitae justo eget magna fermentum iaculis eu. Ullamcorper morbi tincidunt ornare massa. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Pellentesque id nibh tortor id aliquet. Duis tristique sollicitudin nibh sit amet commodo. Diam vulputate ut pharetra sit amet aliquam. Ac tortor vitae purus faucibus ornare suspendisse. Euismod nisi porta lorem mollis aliquam. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ullamcorper velit sed ullamcorper morbi. Auctor eu augue ut lectus arcu bibendum at varius.
                </p>
                <button onClick={() => toggleText('blurb5')}><img src={button} alt="un triangle blanc sur fond orange"></img></button>
            </section>
        </main>
    );
};