export default function Card(props) {
   return (
      <div>
         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h4>{props.species}</h4>
         <h4>{props.gender}</h4>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}

// props = { }
// name: Nombre
// species: Especie
// gender: Género
// image: Imagen
// onClose: La función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.