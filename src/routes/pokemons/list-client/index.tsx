import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import styles from "../../styles.css?inline"
export default component$(() => {

  // useStylesScoped$(styles)
  return (
    <span>Lista del cliente</span>
  )
});


export const head: DocumentHead = {

  title: 'List client',
};
