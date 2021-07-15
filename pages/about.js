import styles from "../styles/aboutstyles.module.css"
export default function about() {
    return (
        <div >
            <div className={styles.about__container}>
                <div className={styles.about__body}>
                    <div className={styles.about_img}>
                           
                        <img src="/james.jpg" alt="james photo"/> 
                        <h1 className={styles.james__name}>James the photographer</h1>
                    </div>
                    <div className={styles.about__text}>
                        <p>Hello I am James, a Photograher and Creative Director from Nigeria based in North Cyprus</p>   
                        <p>As a self taught photographer, my photography styles are unique and i have work with top brands</p>
                        <p>I am currectly a student of Design in Cyprus International University..</p>                     
                    </div>
                </div>
            </div>
        </div>
    )
}
