import fsPromises from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'plants.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function PlantList(props) {  
  const plants = props.plants;
  return (
    <div className={styles.plantList}>
      {plants.map((plant) => (
        <li key={plant.id} className={styles.listItem}>
          <div className={styles.imageContainer}>
            <Image src={plant.image} alt="" width="280" height="280" className={styles.images} />
          </div>
          <p className={styles.titles}>{plant.species}</p>
        </li>
      ))}
    </div>
  )
}
