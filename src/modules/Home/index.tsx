import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.scss";

const Home = () => {
    const navigate = useNavigate();

    return(
        <main className="h-full w-full builder">
            <Header />
            <aside className="container gap-container flex align-center justify-center flex-column">
                <h4>Choose Your Template</h4>
                <p>&</p>
                <Button className="build-btn" onClick={()=>navigate("/templates")}>Start Building Your Portfolio</Button>
            </aside>
        </main>
    )
};
export default Home;