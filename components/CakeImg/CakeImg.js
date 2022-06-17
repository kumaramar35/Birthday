import styles from "../../styles/Name.module.css";

const CakeImg = () => {
    return (
        <div className={styles.imageWrapper}>
            <img src="media/cake.gif" className="cake-ankit" />
            <img src="media/cake.gif" className="cake-ankit" />
            <img src="media/cake.gif" />
        </div>
    )
}
export default CakeImg;