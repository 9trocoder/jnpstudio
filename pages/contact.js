import styles from "../styles/contactstyles.module.css"
export default function contact() {
    return (
        <div >
            <div className={styles.contact__container}>
                <div className={styles.contact__body}>
                    <div>
                        <h1>
                            Lets work together.
                        </h1>
                        <p>Contact me about collaborations, shooting-rates, workshops, talks, licensing images <br/>or information about limited edition prints.</p>
                    </div>
                    <div className={styles.email__link}>
                        <img src="/envelope.svg" alt="mail"/>
                        <a href="mailto: jnpstudio@gmail.com">Jnpstudio@gmail.com</a>
                    </div>
                    <div>
                        <p>There will be an online courses about my photography which is comming soon.</p>                        
                    </div>
                </div>
            </div>
        </div>
    )
}
