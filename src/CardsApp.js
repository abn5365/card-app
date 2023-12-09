import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/accent-card/accent-card.js";
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class CardsApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--cards-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }

      .card {
        background-color: red;
        width: 400px;
      }
      button {
      text-transform: uppercase;
        color: white;
        paddling: 16px 16px;
        background-color: blue;
      }
      img{
        width: 250px;
      }
      .ptag{
        font-size: 20 px;
      }
      .btn{
        visibility: hidden;
        border: 8px dashed black;
        margin: 12px 12px;
      }
      
      button:focus{
        text-transform: lowercase;
        color: white;
        padding: 16px 16px;
        background-color: white;
      }
      .button-details {
        display: none; 
      }
      @media screen and (min-width: 501px) and (max-width: 799px) {
        .button-details {
          display: block;
          
          .card{
      }
      @media screen and (max-width: 500px) {
        .card {
          transform: scale(0.7); 
          
          wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        grid-auto-rows: minmax(100px, auto);
      }
      
        
      } 
      img{  
        width: 250px; 
        height: 250px: 
      } 
      .content{  
        text-align: center; 
        color: white; 
        display: flex; 
        flex-direction: column; 
        align-content: center; 
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
          <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
      </meme-maker>
      <accent-card image-src="http://placekitten.com/200/600" accent-color="red" horizontal accent-heading>
  <div slot="heading">Accent Card</div>
  <div slot="subheading">A card with optional accent stylings.</div>
  <div slot="content"><p>This card is highly customizable to contain any content you'd like</p></div>
</accent-card>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/CardsApp.js</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>

      <button id="duplicate" class="button">Duplicate</button>
      <button id="delete" class="button">Delete</button>
      <button id ="bg" class="button">change color</button>
      <button id ="title" class="button">change title</button>
      <div class = "blocks">
        <button id = "details" class ="button">Details</button>
      </div>
      <div id ="card" class="card">
        <h3 id = "heading" > Club Penguin. Join Today! </h3>
        <img src = "https://toppng.com/uploads/preview/club-penguin-old-penguin-11550188540ypyeuqw1as.png">
        <p> This is a penguin. You too could become a penguin!</p>
          <p style="display: none;">This is a hidden paragraph.</p>
      </div>
    `;
  }
}
