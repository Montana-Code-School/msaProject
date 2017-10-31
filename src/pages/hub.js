//displays our home page with a drop down button
import "./hub.css";
import React, { Component } from "react";
import pt1 from "./photos/photo1.jpg";
import pt2 from "./photos/photo2.jpg";
import pt3 from "./photos/photo3.jpg";
import pt4 from "./photos/photo4.jpg";
import pt5 from "./photos/photo5.jpg";
import pt6 from "./photos/photo6.jpg";
export default class Hub extends Component {
  render() {
    return (
      <div id="container">
        <header>
          <h1>Animated Photo Banner</h1>
          <p>Lorem ipsum dolor...</p>
        </header>

        {/* Each image is 900px by 600px */}
        <div className="photobanner">
          <img className="first" src={pt1} alt="" />
          <img src={pt2} alt="" />
          <img src={pt3} alt="" />
          <img src={pt4} alt="" />
          <img src={pt5} alt="" />
          <img src={pt6} alt="" />
          {/*we have 6 photos running the last two are repeats*/}
          <img src={pt1} alt="" />
          <img src={pt2} alt="" />
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
