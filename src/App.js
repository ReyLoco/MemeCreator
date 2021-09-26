import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImage = function (evento) {
    setImagen(evento.target.value);
  };

  // Esta función convierte y descarga el canvas a archivo jpg
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      {/* Select picker de memes */}
      <select onChange={onChangeImage}>
        <option value="bar">bar</option>
        <option value="death">death</option>
        <option value="earth">earth</option>
        <option value="iris">iris</option>
        <option value="oso">oso</option>
        <option value="trip">trip</option>
        <option value="walk">walk</option>
      </select>
      <br />

      <input type="text" placeholder="Linea 1" onChange={onChangeLinea1} />
      <br />
      <input type="text" placeholder="Linea 2" onChange={onChangeLinea2} />
      <br />

      <button onClick={onClickExportar}>Exportar</button>
      <br />

      <div className="meme" id="meme">
        <span id="linea1">{linea1}</span>
        <br />
        <span id="linea2">{linea2}</span>
        <br />
        <img src={"/img/" + imagen + ".jpg"} alt="Imagen" />
      </div>
    </div>
  );
}

export default App;
