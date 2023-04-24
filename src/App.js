import "./App.css";
import { Boton } from "./componentes/boton";

function App() {
  return (
    <div className="App">
      <img
        src={require("./imagenes/logo_large.png")}
        className="logo-lautaropedroza"
        alt="Lautaro Pedroza"
      />

      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>
            <p>1</p>
          </Boton>
          <Boton>
            <p>2</p>
          </Boton>
          <Boton>
            <p>3</p>
          </Boton>
          <Boton>
            <p>+</p>
          </Boton>
        </div>
        <div className="fila">
          <Boton>
            <p>4</p>
          </Boton>
          <Boton>
            <p>5</p>
          </Boton>
          <Boton>
            <p>6</p>
          </Boton>
          <Boton>
            <p>-</p>
          </Boton>
        </div>
        <div className="fila">
          <Boton>
            <p>7</p>
          </Boton>
          <Boton>
            <p>8</p>
          </Boton>
          <Boton>
            <p>9</p>
          </Boton>
          <Boton>
            <p>*</p>
          </Boton>
        </div>
        <div className="fila">
          <Boton>
            <p>=</p>
          </Boton>
          <Boton>
            <p>0</p>
          </Boton>
          <Boton>
            <p>.</p>
          </Boton>
          <Boton>
            <p>/</p>
          </Boton>
        </div>
        <div className="fila">
          <Boton>
            <p>1</p>
          </Boton>
          <Boton>
            <p>+</p>
          </Boton>
          <Boton>
            <p>=</p>
          </Boton>
          <Boton>
            <p>=</p>
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
