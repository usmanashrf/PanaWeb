//carousels/Elastic.js
import {items} from "./Items.json";
import Carousel from "react-elastic-carousel";
import styles from "../../styles/Elastic.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 }, 
  { width: 768, itemsToShow: 4},
  { width: 1200, itemsToShow: 5, itemsToScroll: 2}
];
export default function ElasticCarousel() {
  const { elastic } = items;
  return (
    <div className={styles.container}>
      
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints} enableTilt={false} enableAutoPlay={true} autoPlaySpeed={3000} >
          {elastic.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className={styles.title}>
                {/* <h3>{item.title} </h3> */}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}