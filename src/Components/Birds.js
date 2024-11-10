// Birds Component 

import b1 from "../Assets/Images/b1.png"
import b2 from "../Assets/Images/b2.png"
import b3 from "../Assets/Images/b3.png"
import b4 from "../Assets/Images/b4.png"
import b5 from "../Assets/Images/b5.png"
import b6 from "../Assets/Images/b6.png"
import b7 from "../Assets/Images/b7.png"
import b8 from "../Assets/Images/b8.png"


function Birds() {
    return (
        <div className="Birds">
            <h1>BIRDS</h1>
            <div className="Birds_container">

                <div className="B1">
                    <img src={b1} alt="Animal 1" />
                    <h2 style={{ margin: "10px" }}>PARROT</h2>
                </div>
                <div className="B1">
                    <img src={b2} alt="Animal 2" />
                    <h2 style={{ margin: "10px" }}>KING FISHER</h2>
                </div>
                <div className="B1">
                    <img src={b3} alt="Animal 3" />
                    <h2 style={{ margin: "10px" }}>WOOD PECKER</h2>
                </div>
                <div className="B1">
                    <img src={b4} alt="Animal 4" />
                    <h2 style={{ margin: "10px" }}>OWL</h2>
                </div>
                <div className="B1">
                    <img src={b5} alt="Animal 5" />
                    <h2 style={{ margin: "10px" }}>EAGLE</h2>
                </div>
                <div className="B1">
                    <img src={b6} alt="Animal 6" />
                    <h2 style={{ margin: "10px" }}>DUCK</h2>
                </div>
                <div className="B1">
                    <img src={b7} alt="Animal 7" />
                    <h2 style={{ margin: "10px" }}>HEN</h2>
                </div>
                <div className="B1">
                    <img src={b8} alt="Animal 8" />
                    <h2 style={{ margin: "10px" }}>OSTRICH</h2>
                </div>


            </div>
        </div>
    )
}
export default Birds