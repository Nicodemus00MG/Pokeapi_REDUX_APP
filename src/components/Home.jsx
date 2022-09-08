import "../CSS/Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
const Home = () => {


  //! REDUX  usamos Dispatch() para ejecutar un action.payload
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = e.target.name.value.trim();

    //! SE USA PARA GUARDAR EL ESTADO CON REDUX, Y VALIDAMOS SI LOS DATOS ESTAN VACION
    
    if (inputValue.length !== 0) {
      
      dispatch(setNameTrainer(inputValue));
      navigate("/pokedex");
    }
    e.target.name.value = "";
  };

  return (
    <article className="home">
      <img src={"./img/pokedexLogo.png"} alt="img-pokedex" />
      <span className="home__title font__text">¡Hi trainer!</span>
      <p className="home__subTitle font__text"> give me your name</p>

      <form className="home__input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your name"
          id="name"
        />
        <button>Start</button>
      </form>
      <div className="img__pokeball">
        <img src={"./img/pokeball.png"} alt="imagen-pokeboll" />
      </div>
      <footer className="home__footer">
        <div className="footer__1"></div>
        <div className="footer__2"></div>
      </footer>
    </article>
  );
};

export default Home;
