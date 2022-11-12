import React from 'react';
import '../scss/doctemp/doctemp.scss'
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <img src={sword} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;