import React from "react";
import "../CSS/Footer.css"
const Footer = () => {
  return (
    <div className="footer_container">
        <div className="footer_box">
        <div className="info_footer">
        <h3>
          PokeDex APP  <span>by Nicodemuss</span>
        </h3>
        <br />
        <br />
        <p>Hecho en Academlo 2022</p>
      </div>

      <div className="icons_social_media">
        <div className="box">
          <a href={'https://github.com/Nicodemus00MG'} target={"_blank"}>
          <img src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'} alt="github_logo" width={'30px'} />
          </a>
         
        </div>

        <div className="box">
          <a
            href={'https://www.linkedin.com/in/josue-mu%C3%B1oz-924590214'}
            target={"_blank"}
          >
            <img src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt="linkedin_logo" width={'30px'} />
          </a>

          
        </div>
      </div>
        </div>
     
    </div>
  );
};

export default Footer;