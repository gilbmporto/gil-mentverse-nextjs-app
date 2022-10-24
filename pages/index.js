import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed';
import Modal from '../components/Modal';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>PicPost (By Gil)</title>
        <meta name="PicPost" content="A social network almost equal to instagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Feed />

      <Modal />

    </div>
  )
}
