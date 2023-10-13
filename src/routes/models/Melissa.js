import imgTest from "../../img/IMG_2656.JPG";
import modelDrawing from "../../img/Melissa.png";

export default function Melissa(){
    return (
        <main className="modelSolo">
            <section className="title">
                <h1>nos modèles</h1>
                <div className="cropContainer">
                    <img src={imgTest}/>
                </div>
                <h3>Melissa</h3>
            </section>
            <section className="pics">
                <img src={imgTest} className="img1"/>
                <img src={imgTest} className="img2"/>
                <img src={imgTest} className="img3"/>
                <img src={imgTest} className="img4"/>
                <img src={imgTest} className="img5"/>
                <img src={imgTest} className="img6"/>
                <img src={imgTest} className="img7"/>
                <img src={imgTest} className="img8"/>
                <img src={imgTest} className="img9"/>
            </section>
            <section className="vids">
                <h1>nos capsules</h1>
                <div className="modelQuote">
                    <img src={modelDrawing} className="modelDrawing"/>
                    <i></i>
                </div>
                <ul>
                    <li>
                        <iframe 
                            src="https://www.youtube.com/watch?v=kutgGgsLNyI"
                            title="youtube video"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </li>
                </ul>
            </section>
        </main>
    );
};