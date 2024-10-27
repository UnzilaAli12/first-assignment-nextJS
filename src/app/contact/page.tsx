import styles from '../about/about.module.css';
import React from 'react';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className='MyIntro'>
      Hello From me Unzila Ali and My Team

                </div>
                <li><Link href="/about">About</Link></li>
<li><Link href="/service">Services</Link></li>
<li><Link href="/contact">Contact</Link></li>

      <h1 className={styles.title}> Contact Us</h1>


    <h2> Feel free to reach out at us via</h2>
    <h3>Office</h3> Office # 105 XYZ Buildig, Karachi, Pakistan
    <h3>Office Hours</h3> Monday to Friday(11am to 8pm) <br /> Saturday(11am to 5pm) <br />Sunday Off 
    <h3>Email</h3> Unzila@gmail.com
    <h3>Contact</h3> +921234567893

    </div>
  )
}

export default ContactPage
