// Animals Components
import a1 from "../Assets/Images/a1.png"
import a2 from "../Assets/Images/a2.png"
import a3 from "../Assets/Images/a3.png"
import a4 from "../Assets/Images/a4.png"
import a5 from "../Assets/Images/a5.png"
import a6 from "../Assets/Images/a6.png"
import a7 from "../Assets/Images/a7.png"
import a8 from "../Assets/Images/a8.png"

function Animals() {
    return (
        <div className="Animals">
            <h1>ANIMALS</h1>
            <div className="Animals_container">

                <div className="A1">
                    <img src={a1} alt="Animal 1" />
                    <h2 style={{ margin: "10px" }}>ELEPHANT</h2>
                </div>
                <div className="A1">
                    <img src={a2} alt="Animal 2" />
                    <h2 style={{ margin: "10px" }}>LION</h2>
                </div>
                <div className="A1">
                    <img src={a3} alt="Animal 3" />
                    <h2 style={{ margin: "10px" }}>ZEBRA</h2>
                </div>
                <div className="A1">
                    <img src={a4} alt="Animal 4" />
                    <h2 style={{ margin: "10px" }}>DEER</h2>
                </div>
                <div className="A1">
                    <img src={a5} alt="Animal 5" />
                    <h2 style={{ margin: "10px" }}>SQUAREL</h2>
                </div>
                <div className="A1">
                    <img src={a6} alt="Animal 6" />
                    <h2 style={{ margin: "10px" }}>BEAR</h2>
                </div>
                <div className="A1">
                    <img src={a7} alt="Animal 7" />
                    <h2 style={{ margin: "10px" }}>FOX</h2>
                </div>
                <div className="A1">
                    <img src={a8} alt="Animal 8" />
                    <h2 style={{ margin: "10px" }}>GIRRAFI</h2>
                </div>


            </div>
        </div>
    )
}
export default Animals