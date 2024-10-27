import React from "react";
import styles from "../about/about.module.css";
import Link from "next/link";

const ServicePage = () => {
  return (
    <div className={styles.container}>
      <div className="MyIntro">Hello From me Unzila Ali and My Team</div>

      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/service">Services</Link>
      </li>
      <li>
        <Link href="/service/development">WebDevelopment</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <h1 className={styles.title}>Our Services</h1>
      <p>
          We offer a full spectrum of graphic design services tailored to
          elevate your brand and communicate your vision effectively. From
          concept to completion, we work closely with clients to deliver designs
          that are visually compelling and aligned with their goals. <br /> <h4>Brand
          Identity & Logo Design</h4>  We create distinctive brand identities and
          logos that reflect your brand’s personality and resonate with your
          audience.  <h4> Print Design </h4> From brochures and business cards to posters
          and packaging, our print design services help bring your brand to life
          in the physical world with striking, high-quality designs. <h4> Digital &
          Social Media Design</h4> We design captivating digital content for social
          media, websites, and email campaigns that engage audiences and
          strengthen your online presence. <h4> Web & User Interface Design </h4> With a
          focus on aesthetics and user experience, we design website and app
          interfaces that are not only beautiful but also intuitive and easy to
          navigate. <h4>Illustration & Custom Graphics</h4> We create custom
          illustrations and graphics that add a unique touch to your brand,
          making your visuals stand out with originality and creativity. Our
          goal is to provide you with tailored solutions that communicate your
          message clearly and leave a lasting impression. Whether you’re
          building a new brand or refreshing an existing one, we're here to
          bring your ideas to life.
        
      </p>
    </div>
  );
};

export default ServicePage;
