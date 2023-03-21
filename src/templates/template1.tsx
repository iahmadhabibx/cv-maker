import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./styles.scss";

const Templat1 = () => {
    return (
        <aside className="cv" id="cv">
            <header className="flex flex-column">
                <section className="top-section i-flex align-center">
                    <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="User" />
                    <div className="user-info">
                        <h2 className="name">John Doe</h2>
                        <h4 className="profession">UI/UX Designer</h4>
                    </div>
                </section>
                <section className="contact-section i-flex align-center justify-between">
                    <p className="info i-flex align-center">
                        <small className="info-heading"><PhoneAndroidIcon /></small>
                        <small className="info-data">+92-3332548896</small>
                    </p>
                    <p className="info i-flex align-center">
                        <small className="info-heading"><AlternateEmailIcon /></small>
                        <small className="info-data">john@mail.com</small>
                    </p>
                    <p className="info i-flex align-center">
                        <small className="info-heading"><LocationOnIcon /></small>
                        <small className="info-data">Lahore, Pakistan</small>
                    </p>
                </section>
            </header>
        </aside>
    )
};
export default Templat1;