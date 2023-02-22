import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   // props = { onSearch=función }
   return (
      <div className={styles.container}>
         <input
            type="search"
            name="search"   
            id="search"
         />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
