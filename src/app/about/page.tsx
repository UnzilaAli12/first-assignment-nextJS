import React from 'react';
import styles from '../about/about.module.css';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className='MyIntro'>
      Hello From me Unzila Ali and My Team

                </div>
      
    

<li><Link href="/about">About</Link></li>
<li><Link href="/service">Services</Link></li>
<li><Link href="/contact">Contact</Link></li>
      
<h1 className={styles.title}>About Us</h1>
      <p>Welcome to our creative space, where design meets purpose. Founded by a passionate graphic designer, our team is dedicated to bringing unique visions to life. We believe in the power of visuals to tell stories, inspire action, and create connections. From captivating brand identities to dynamic digital experiences, we combine artistic expertise with strategic insight to help you stand out in today's fast-paced world.

Our approach is all about collaboration and innovation. We work closely with clients to understand their unique goals and transform them into striking designs that resonate. Let’s work together to make your brand unforgettable.

</p>


        
        </div>
    );
};
    

export default AboutPage
