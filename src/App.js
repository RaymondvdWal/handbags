import React from 'react';
import './App.css';
import Button from "./assets/components/buttons/Button";
import Product from "./assets/components/products/Product";
import bagOne from "./assets/bag_1.png";
import bagTwo from "./assets/bag_2.png";
import bagThree from "./assets/bag_3.png";
import bagFour from "./assets/bag_4.png";
import Tile from "./assets/components/tiles/Tile";
import brand from "./assets/brand.png";
import twoPeople from "./assets/our_story.png";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
        <nav>
          <Button
              type={"button"}
              clickHandler={()=>{
              console.log("to the collection")}}>
              to the collection
          </Button>
            <Button
                type={"button"}
                clickHandler={()=>{
                console.log("shop all bags")}}>
                shop all bags
            </Button>
            <Button
                type={"disabled"}
                clickHandler={()=>{
                console.log("pre-orders")}}
                disabled={true}>
                pre-orders
            </Button>
        </nav>
      <main>
          <Product
          specification={"Best seller"}
          image={bagOne}
          imageDescription={"pink bag"}
          bagName={"The handy bag"}
          price={"€400,-"}
          />
          <Product
          specification={"Best seller"}
          image={bagTwo}
          imageDescription={"brown bag"}
          bagName={"The stylish bag"}
          price={"€250,-"}
          />
          <Product
          specification={"New collection"}
          image={bagThree}
          imageDescription={"green bag"}
          bagName={"The simple bag"}
          price={"300,-"}
          />
          <Product
          specification={"New collection"}
          image={bagFour}
          imageDescription={"yellow bag"}
          bagName={"The trendy bag"}
          price={"150,-"}
          />
      </main>
      <footer>
          <Tile
          title={"the brand"}
          >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur dicta ea ipsum laboriosam nam nobis quisquam quod repudiandae soluta suscipit.
              </p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur dicta ea ipsum laboriosam nam nobis quisquam quod repudiandae soluta suscipit.
              </p>
          </Tile>

          <Tile
          image={brand}
          imgDescription={"brand logo"}
          />

          <Tile
          image={twoPeople}
          imgDescription={"two people hugging"}
          />

          <Tile
          title={"our story"}
          >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dicta, possimus?
                  Alias aut cumque dignissimos eius, facere fugit inventore itaque labore magnam minus
                  molestiae nemo obcaecati quam, totam unde vel.
              </p>
          </Tile>

      </footer>

      </>
  );
}

export default App;



