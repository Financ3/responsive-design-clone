import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="mainContent">
          <div className="mainTopContent">
            <h1>GRAYSCALE</h1>
            <p>A practice single page website to demonstrate my responsive web design abilities. Note the theme "Grayscale" was a theme originally designed using Bootstrap and can be <a href="https://startbootstrap.com/theme/grayscale">downloaded from Bootstrap</a> for free. Also note that this site did NOT use that template - this was built from the ground up - using the bootstrap theme as a guide.</p>
            <button id="about">GET STARTED</button>
          </div>

          <div className="mainBottomContent">
            <h2>Built with React</h2>
            <p>Grayscale was a theme originally designed using Bootstrap and can be <a href="https://startbootstrap.com/theme/grayscale">downloaded from Bootstrap</a> for free. This particular site is a replication of that bootstrap website using React and custom stylings.</p>

            <div className="imgContainer">
              <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/ipad.png" alt="Tablet"></img>
            </div>
          </div>

        </section>
      </main>

      <section className="shoreline" id="projects" >
        <div className="imgContainer">
          <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg" alt="Shoreline Mountain"></img>
        </div>
        <article className="shorelineContent">
          <h4>Shoreline</h4>
          <p>Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
        </article>
      </section>

      <section className="mistyMountains">

        <section className="misty">
          <div className="imgContainer">
            <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/demo-image-01.jpg" alt="Misty Mountain"></img>
          </div>
          <article className="mistyContent">
            <h3>Misty</h3>
            <p>An example of where you can put an image of a project, or anything else, along with a description</p>
          </article>
        </section>

        <section className="mountains">
          <div className="imgContainer">
            <img src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/demo-image-02.jpg" alt="Standard Mountain"></img>
          </div>
          <article className="mountainsContent">
            <h3>Mountains</h3>
            <p>Another example of where you can put an image of a project, or anything else, along with a description</p>
          </article>
        </section>

      </section>

      <section className="subscribe" id="contact">
        <div className="subscribeContainer">
          <p>Subscribe to receive updates!</p>
          <div className="formContainer">
            <input placeholder="ENTER EMAIL ADDRESS..."></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </section>

      <div className="contactContainer">
        <section className="contactUsContainer">
          <article className="contactArticle">
            <h4>Address</h4>
            <hr></hr>
            <p>4923 Market Street, Orlando FL</p>
          </article>
          <article className="contactArticle">
            <h4>Email</h4>
            <hr></hr>
            <p>hello@yourdomain.com</p>
          </article>
          <article className="contactArticle">
            <h4>Phone</h4>
              <hr></hr>
            <p>+1 (555) 555-5555</p>
          </article>

          <article className="socialIcons">
            <a href="#">
              <div className="socialContainer">
                <svg className="twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                  <path fill="grey" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </div>
            </a>

            <a href="#">
              <div className="socialContainer">
                <svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                  <path fill="grey" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </div>
            </a>
            <a href="#">
              <div className="socialContainer">
                <svg class="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
                  <path fill="grey" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </div>
            </a>
          </article>
        </section>
      </div>
      
      <footer>
        Copyright &#169; My Practice Website 2021
      </footer>
    </div>
  );
}

export default App;
