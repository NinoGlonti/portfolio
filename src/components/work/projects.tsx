import { Carousel } from 'react-responsive-carousel';
import styles from "./projects.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from 'next/image';
import dashboard from "../../assets/dashboard.png"
import Link from 'next/link';

const imageData = [
  {
    alt: "dashboard",
    src:  dashboard,
    //width: {150},
    //height: {350}
  },
  {
    alt: "dashboard",
    src:  dashboard,
    //width: "150px",
    //height: "350px"
  },

];


const Projects = () =>  {
return(
  <div>
    <div>
    <h3>Paybetter: <Link legacyBehavior href={"https://app.paybetter.io/"}>
    <a target="_blank" rel="noopener noreferrer">
      paybetter.io
    </a>
    </Link> 
    </h3> 
    <p>Company: 
      <Link legacyBehavior href={"https://redberry.international/"}>
        <a target="_blank" rel="noopener noreferrer">
          Redberry
        </a>
      </Link> 
    </p>
    <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        className="carousel-container"
      >
        {
       imageData.map((image) => (
          <img alt={image.alt} src={image.src.src} key={image.alt} />
    ))
}
      </Carousel>
    <div className={styles["info-section"]}>
      <p>
        Paybetter is a fintech product allowing users to transfer money from their debit and credit cards to recipients’ bank accounts.  
      </p>

        <ul> Built:
          <li>
             Authentication and authorization pages - users set up their accounts through standard registration or using their Google accounts.
          </li>
          <li> Account setup and identity verification: after registration, they need to undergo an identity verification process 
            to access the payment features of Paybetter. Plus, they manage all the relevant information about their and their business profile.
          </li>
          <li>
            Create and manage recipients: Users can create and manage their recipients with all the relevant information to easily transact with
            them in the future. The recipient can be an individual as well as an organization.
          </li>
          <li>Dashboard: The dashboard gives users an overview of different actions they can take using Paybetter.</li>
        </ul>
    </div>
    </div>
  </div>
)
}
export default Projects;