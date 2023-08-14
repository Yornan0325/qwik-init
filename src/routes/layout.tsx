import { component$, Slot, useStyles$ } from '@builder.io/qwik';

import Navbar from '../components/shared/Navbar/Navbar';
// import Footer from '../components/shared/footer/footer'

import styles from './styles.css?inline';



export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Navbar />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
      {/* <Footer /> */}
    </>
  );
});
