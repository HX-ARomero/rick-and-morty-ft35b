import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar(props) {
   // props = { onSearch=función }
   return (
      <div className={styles.container}>
         <SearchBar onSearch={props.onSearch} />
      </div>
   );
}
