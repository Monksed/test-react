import React, { useMemo, useState, useCallback } from "react";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import InstructionCard from "../components/InstructionCard";

const MainPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [showLogin, setShowLogin] = useState("");
  const [showPassword, setShowPassword] = useState("");

  const sendData = () => {
    setShowLogin(login);
    setShowPassword(password);
  };

  const texts = useMemo(
() => [
      "State",
      "Асинхронное программирование",
      "здравствуй, реальность",
    ],
    []
  );

  const [textHello, setTextHello] = useState(texts[0]);

  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  return (
      <div className="main">
        <div className="main__container">
          <HelloCard text={textHello} onNext={handleNext} />

        {showLogin} / {showPassword}
        <br />

          <input
            value={login}
            onChange={(e) => {setLogin(e.target.value)}}
            type="text"
            placeholder="Введите логин"
            className="input"
          />

          <input
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            placeholder="Введите пароль"
            className="input"
          />
          
          <div className="demo-row">
            <button className="btn btn-primary" onClick={sendData}>Отправить</button>
          </div>

          <InstructionCard />
        </div>
      </div>
  );
};
export default MainPage;