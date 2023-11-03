import 'bootstrap/dist/css/bootstrap.css';
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../../assets/css/App.css';
import  '../../assets/css/main.css';
import { Navbar } from "../../components/forHome/navbar";
import HomePageComplexButtons from "../../components/forHome/homePageComplexButtons";

function Home() {
    return (
        <>
            <header>
                <Navbar />
                <div
                    id="intro"
                    className="bg-image"
                    style={{
                        backgroundImage: `url("https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRfMNsGMvu12v8RXqHSrD6FvM6jUk7cug0L3CFL0SOmrkR-avagMkoZKVrukLzKCDPx")`,
                        "height": "100vh"
                    }}
                >
                    <div className="mask text-white" style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
                        <div className="container d-flex align-items-center text-center h-100">
                            <div className="mx-auto">
                                <h1 className="mb-5">TravnikGO</h1>
                                <h3 className="mb-2" style={{ color: "rgba(255, 255, 255, 0.69)" }}>
                                    Travnik is not just a city, it's an experience that leaves an indelible mark on your soul
                                </h3>
                                <HomePageComplexButtons/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container my-5">
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quam minima perspiciatis eos tenetur. Praesentium dolores at quos aperiam sed, sint provident consectetur incidunt, nostrum porro earum commodi, ex architecto.</p>
            </div>
        </>

    );
}

export default Home;