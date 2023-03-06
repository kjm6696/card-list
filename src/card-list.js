/* eslint-disable lit/attribute-value-entities */
import { LitElement, html, css } from 'lit';
import 'koben-orange-card/src/orange-card';
import 'anime-card/src/my-card';

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    .one {
      display: flex;
      flex-direction: row;
    }
    .two {
      display: flex;
      flex-direction: row;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main></main>
      <div class="one">
        <orange-card></orange-card>
        <orange-card
          title="Shrek"
          image="https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000"
          memetop="Where is my"
          memebottom="donkey!"
          >Character from the movie Skrek</orange-card
        >
        <orange-card
          title="Duck"
          image="https://images.freeimages.com/images/previews/54c/random-photography-3-1143357.jpg"
          memetop="All i can say"
          memebottom="is quack"
          >Just a raondom picture of a duck</orange-card
        >
        <orange-card
          title="Wooden Gorilla"
          image="https://www.thisiscolossal.com/wp-content/uploads/2017/04/MatRandom_12.jpg"
          memetop="Im not a"
          memebottom="Real gorilla"
          >Just a picture of a gorilla made with wood</orange-card
        >
        <orange-card
          title="Rubber Duck"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKBpp4ydpX2-nrgi-DFEnxHDThnD6HfkSNQ&usqp=CAU"
          memetop="I'm just"
          memebottom="a toy"
          >Picture of a cartoon rubber ducky</orange-card
        >
      </div>
      <div class="two">
        <my-card></my-card>
        <my-card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvCF-R8pP56uAaLTgTgW5T1QkBWdjSLIKMKkPRAi7yw&s"
          toptext="Vigilante"
          bottomtext="In anime"
          title="Death Note"
          >Character from death note</my-card
        >
        <my-card
          image="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
          toptext="Everyone knows"
          bottomtext="My hair"
          title="Dragon Ball Z"
          >Character from Dragon Ball Z</my-card
        >
        <my-card
          image="https://www.giantbomb.com/a/uploads/scale_medium/2/27436/2722697-gon_freecss_2617.jpg"
          toptext="I might be a kid"
          bottomtext="but clap beast"
          title="Hunter x Hunter"
          >Character from Hunter x Hunter</my-card
        >
        <my-card
          image="https://sportshub.cbsistatic.com/i/2022/12/27/29deda0e-79e9-426d-a0b9-03693077c522/pokemon-anime-ash-classic-look-return.jpg"
          toptext="Name that"
          bottomtext="Pokemon!"
          title="Pokemon"
          >Character from Pokemon</my-card
        >
      </div>
    `;
  }
}

customElements.define('card-list', CardList);
