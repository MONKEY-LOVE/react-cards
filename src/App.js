import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <>
    <div id="titulo">Monitos</div>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
      <div class="card">
        <img class="card-img-top" src="https://images.pexels.com/photos/1322599/pexels-photo-1322599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Familia</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Leer mas</a>
        </div>
      </div>
      </div>
      <div className="col-md-3">
      <div class="card">
        <img class="card-img-top" src="https://images.pexels.com/photos/234054/pexels-photo-234054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Familia</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Leer mas</a>
        </div>
      </div>
      </div>
      <div className="col-md-3">
      <div class="card">
        <img class="card-img-top" src="https://images.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">Familia</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Leer mas</a>
        </div>
      </div>
      </div>
    </div>
  </div>
    </>
  );
}
export default App;