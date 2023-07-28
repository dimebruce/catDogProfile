import React, { useState, useEffect } from "react";
import profile from "./assets/profileDos.png";

import "./App.css";

function App() {
  const [name, setName] = useState("Milo");
  //                                          DD-MM-YYYY
  const [birthDate, setBirthDate] = useState("06-06-2021");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("Pomerania");
  const [owner, setOwner] = useState("Curie");

  useEffect(() => {
    calculateAge();
  }, [birthDate]);

  const calculateAge = () => {
    const [day, month, year] = birthDate.split("-");
    const birthDateObj = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();

    if (birthDateObj >= currentDate) {
      // Si la fecha de nacimiento es igual o posterior a la fecha actual, mostramos un mensaje de error.
      setAge("");
      alert("Por favor, ingresa una fecha de nacimiento válida.");
    } else {
      // Calculamos la diferencia en milisegundos entre la fecha actual y la fecha de nacimiento.
      const differenceInMs = currentDate - birthDateObj;

      // Convertimos la diferencia en milisegundos a años dividiendo por el número de milisegundos en un año (365.25 días).
      const ageInYears = differenceInMs / (365.25 * 24 * 60 * 60 * 1000);

      // Redondeamos el resultado para obtener una edad entera.
      setAge(Math.floor(ageInYears));
    }
  };

  return (
    <div className="App">
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <h1 className="text-white mb-3">catDog Perfil <i className="bi bi-qr-code"></i></h1>
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src={profile}
                      className="rounded-circle img-fluid shadow"
                      style={{ width: "200px" }}
                      alt="Profile Avatar"
                    />
                  </div>
                  <h4 className="mb-1">Hola, soy {name}</h4>
                  <h6 className="text-muted">{race}</h6>
                  <p className="text-muted mt-3 shado">
                    Soy tranquilo y amigable, tengo {age} años y algunas
                    alergias, pero eso no me impide disfrutar de la vida. 🐶🏠
                  </p>
                  {/* Data General */}
                  <div
                    className="accordion accordion-flush mb-3"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Últimas vacunas
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <div className="row pt-1">
                            <div className="col-md-12 d-flex">
                              <div className="w-50">
                                <h6>Fecha</h6>
                                <p className="text-muted">17-09-2022</p>
                                <p className="text-muted">03-09-2022</p>
                                <p className="text-muted">03-09-2022</p>
                              </div>
                              <div className="w-50">
                                <h6>Vacuna</h6>
                                <p className="text-muted word-wrap">
                                  Desparacitante
                                </p>
                                <p className="text-muted word-wrap">
                                  Vanguard Plus 5
                                </p>
                                <p className="text-muted word-wrap">5/CV-L</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Observaciones
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Bajo tratamiento por luxación de rótula.
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>
                    Contacta a mi humano <br />
                    <span className="fs-5 shado">{owner}</span>
                  </h6>
                  <div className="container mt-3">
                    <a
                      href="https://wa.link/a4gv5f"
                      className="btn btn-outline-primary me-3"
                      target="_blank"
                    >
                      <i className="bi bi-whatsapp fs-3"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/dimebruce"
                      className="btn btn-outline-primary"
                      target="_blank"
                    >
                      <i className="bi bi-instagram fs-3"></i>
                    </a>
                  </div>
                  <div class="container">
                    <footer className="my-4">
                      <ul className="nav justify-content-center border-bottom pb-3 mb-3"></ul>
                      <p className="text-center text-muted">
                        © 2023 Creado por{" "}
                        <a href="https://www.instagram.com/dimebruce">
                          dimebruce
                        </a>{" "}
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
