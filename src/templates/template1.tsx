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
            <aside className="cv-body w-full flex align-start">
                <section className="left-part">
                    <section className="sub-section">
                        <h3 className="sub-heading">About Me</h3>
                        <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur numquam aliquam, cumque fuga tenetur saepe cum facilis qui maxime necessitatibus dignissimos minima repellat, unde, illo dolor nisi voluptatem temporibus sunt perferendis voluptatum eveniet inventore animi? Ducimus eaque maxime beatae minima sequi ipsam id reiciendis. Iste, maxime nihil? Magni voluptatibus quia sunt animi, perspiciatis sapiente delectus explicabo tempore aut eum eligendi. Facere incidunt atque voluptate nulla, ut odit quasi dicta explicabo odio, corrupti provident sint accusamus doloribus labore quis harum fugit quibusdam fugiat corporis quisquam! Laborum eos labore earum. Non corporis quo reprehenderit? Quibusdam odit eos natus architecto, nobis minus maiores.</p>
                    </section>
                </section>
                <section className="right-part">
                    <section className="sub-section">
                        <h3 className="sub-heading">Skills</h3>
                        <ul className="skills i-flex">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>MS Word</li>
                            <li>Angular</li>
                            <li>ReactJS</li>
                            <li>NodeJS</li>
                            <li>Bootstrap</li>
                            <li>SCSS</li>
                            <li>React Native</li>
                            <li>Ionic</li>
                        </ul>
                    </section>
                </section>
            </aside>
        </aside>
    )
};
export default Templat1;