import Link from "next/Link"
import styles from "../styles/footerstyles.module.css"

export default function Footer() {
    return (
        <div className={styles.footer__container}>
            <div className={styles.footer__body}>
                <div className={styles.footer__icon}>
                    <Link href="https://www.instagram.com/jnpstudios1/"><a><img src="/instagram.svg" alt="instagram"/></a>
                    </Link>
                </div>
                <div>
                    <p>Jnpstudio@gmail.com</p>
                </div>
                <div>
                   <p>&copy; Jnpstudio 2021. Created by <Link href="https://www.yemicodes.vercel.app"><a >Yemicodes tel: +90 536 603 09 97</a></Link>,</p> 
                </div>
            </div>
        </div>
    )
}
