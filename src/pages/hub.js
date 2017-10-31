//displays our home page with a drop down button
import "./hub.css";
import React, { Component } from "react";
export default class Hub extends Component {
  render() {
    return (
      <div id="container">
        <header>
          <h1>Animated Photo Banner</h1>
          <p>Lorem ipsum dolor...</p>
        </header>

        {/* Each image is 350px by 233px */}
        <div className="photobanner">
          <img
            className="first"
            src="https://stories.sandisk.com/assets/images/orig/lava_05.jpg"
            alt=""
          />
          <img
            src="https://images.fineartamerica.com/images-medium-large-5/lava-heart-kawika-singson.jpg"
            alt=""
          />
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/lava-flow-during-eruption-of-mount-etna-richard-roscoe.jpg"
            alt=""
          />
          <img
            src="http://www.photovolcanica.com/VolcanoInfo/Nyiragongo/IMG_7999.JPG"
            alt=""
          />
          <img
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/hawaii-lava-flow-john-reckleff.jpg"
            alt=""
          />
          <img
            src="http://i.huffpost.com/gen/1360581/thumbs/o-LAVA-900.jpg?1"
            alt=""
          />
          //we have 6 photos running the last two are repeats
          <img
            src="https://stories.sandisk.com/assets/images/orig/lava_05.jpg"
            alt=""
          />
          <img
            src="https://images.fineartamerica.com/images-medium-large-5/lava-heart-kawika-singson.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}
// <select>
//   <option value="Mens">Mens</option>
//   <option value="Womens">Womens</option>
//   <option value="CoRec">CoRec</option>
//   <option value="Unassigned">Unassigned</option>
// </select>
/*
<img
  src="https://images.fineartamerica.com/images-medium-large-5/lava-heart-kawika-singson.jpg"
  alt=""
/>
<img
  src="https://stories.sandisk.com/assets/images/orig/lava_05.jpg"
  alt=""
/>
<img
  src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/lava-flow-during-eruption-of-mount-etna-richard-roscoe.jpg"
  alt=""
/>
<img
  src="http://www.photovolcanica.com/VolcanoInfo/Nyiragongo/IMG_7999.JPG"
  alt=""
/>
*/
