import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const ImgMeme = () => {

  const [texto1Meme, setTexto1Meme] = useState();
  const [colorTexto1, setColorTexto1] = useState('#000000');
  const [fuenteTexto1, setFuenteTexto1] = useState('Arial');


  const [texto2Meme, setTexto2Meme] = useState();
  const [colorTexto2, setColorTexto2] = useState('#000000');
  const [fuenteTexto2, setFuenteTexto2] = useState('Arial');


  const [imgMeme, setImgMeme] = useState();

  const selectText1 = (e) => {
    setTexto1Meme(e.target.value);
    console.log(e.target.value);
  }

  const selectColor1 = (e) => {
    setColorTexto1(e.target.value);
    console.log(e.target.value);
  }

  const selectFuente1 = (e) => {
    setFuenteTexto1(e.target.value);
    console.log(e.target.value);
  }

  const selectText2 = (e) => {
    setTexto2Meme(e.target.value);
    console.log(e.target.value);
  }

  const selectColor2 = (e) => {
    setColorTexto2(e.target.value);
    console.log(e.target.value);
  }

  const selectFuente2 = (e) => {
    setFuenteTexto2(e.target.value);
    console.log(e.target.value);
  }

  const selectImg = (e) => {
    setImgMeme(e.target.value);
    console.log(e.target.value);
  }

  const downloadMeme = () => {
    html2canvas(document.querySelector("#descargar")).then(canvas => {
      let img = canvas.toDataURL("memesImg/jpg");
      let link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
  }

  return(
    <div>
      <h1 className="m-5 text-light" style={{textShadow: '3psx 3px 4px rgba(0, 0, 0, 0.5)'}}>Edita tu propio meme</h1>
      <div className="container-fluid mt-5 mb-2">
        <h2 className="mt-2 mb-3">Escribe la frase superior</h2>
        <input className="form-control w-75 m-auto mb-3" type="text" onChange={selectText1}/>
        <div className="container-fluid w-75 d-flex gap-3 p-0">
          <select className="form-select m-auto" onChange={selectFuente1}>
            <option selected>Elige una opción</option>
            <option value={'Arial'}>Arial</option>
            <option value={'Arial Black'}>Arial Black</option>
            <option value={'Comic Sans Ms'}>Comic Sans Ms</option>
          </select>
          <input className="form-control m-auto" style={{width: '3.5rem', height: '2.5rem'}} type="color" onChange={selectColor1}/>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-2">
        <h2 className="mt-2 mb-3">Escribe la frase inferior</h2>
        <input className="form-control w-75 m-auto mb-3" type="text" onChange={selectText2}/>
        <div className="container-fluid w-75 d-flex gap-3 p-0">
          <select className="form-select" onChange={selectFuente2}>
            <option selected>Elige una opción</option>
            <option value={'Arial'}>Arial</option>
            <option value={'Arial Black'}>Arial Black</option>
            <option value={'Comic Sans Ms'}>Comic Sans Ms</option>
          </select>
          <input className="form-control" style={{width: '3.5rem', height: '2.5rem'}} type="color" onChange={selectColor2}/>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-2">
        <h2 className="mt-2 mb-3">Elige la imágen de tu meme</h2>
        <div className="container-fluid w-75 d-flex gap-3 p-0">
          <select className="form-select" onChange={selectImg}>
            <option selected>Elige una opción</option>
            <option value={1}>Futurama</option>
            <option value={2}>Dos botones</option>
            <option value={3}>Incendio</option>
            <option value={4}>Homero</option>
          </select>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-2">
        <figure className="figure text-bg-light" id="descargar">
          <h2 className="figure-caption text-break text-uppercase fs-4 m-auto p-2" style={{color: colorTexto1, fontFamily: fuenteTexto1}}><strong>{texto1Meme}</strong></h2>
          <img src={`memesImg/${imgMeme}.jpg`} className="figure-img img-fluid m-0" alt="meme elegido"/>
          <h2 className="figure-caption text-break text-uppercase fs-4 m-auto p-2" style={{color: colorTexto2, fontFamily: fuenteTexto2}}><strong>{texto2Meme}</strong></h2>
        </figure>
      </div>
      <button className="btn btn-dark m-5" onClick={downloadMeme}>Descarga tu meme</button>
    </div>
  )
}

export default ImgMeme;
