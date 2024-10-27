import Image from "next/image";
import styles from "../app/about/about.module.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className="MyIntro">Hello From me Unzila Ali and My Team</div>
      
      
      <ul className="Unzila">
        <li className={styles.navItem}><Link href="/">Home</Link></li>
        <li className={styles.navItem}><Link href="/about" target="_blank">About</Link></li>
        <li className={styles.navItem}><Link href="/service" target="_blank">Service</Link></li>
        <li className={styles.navItem}><Link href="/contact" target="_blank">Contact</Link></li>
      </ul>
      <h1 className={styles.title}>I Am a Graphic Designer By Profession</h1>
      <p> With a deep
        passion for design and a commitment to excellence, I bring a unique
        blend of creativity and technical skill to every project. As a
        professional graphic designer, I specialize in crafting visually
        compelling designs that communicate effectively and resonate with
        audiences. From branding and logo design to digital and print media, my
        goal is to create cohesive, memorable visuals that elevate brands and
        tell their stories authentically. <br /> Driven by a detail-oriented approach
        and a dedication to staying current with industry trends, I work to
        deliver designs that are not only visually striking but also
        strategically aligned with my clients' objectives. Let’s transform your
        ideas into impactful designs that make a lasting impression.
      </p>
      <br />
      
    </div>
  );
};
export default HomePage;
