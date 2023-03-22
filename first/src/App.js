
import './App.css';
import Testimonio from './componentes/Testimonio.js'

function App() {
  return (
    <div className="App">
      <h1>The best games</h1>
      <div className="contenedor-principal">
        
        <Testimonio 
        nombre="The Last Of Us"
        imagen="a"
        alt='imagen the last of us'
        estudio="Naughty Dog"
        resume="La trama describe las vivencias de Joel y Ellie, un par de supervivientes de una pandemia en Estados Unidos que provoca la mutación de los seres humanos en criaturas caníbales."
        />
        <Testimonio 
        nombre="Days Gone"
        imagen="b"
        alt='imagen Days Gone'
        estudio="SIE Bend Studio"
        resume="Cuando un virus hace que una gran parte de la humanidad se vuelva incontrolablemente violenta, Deacon, su esposa Sarah y su amigo Boozer intentan huir por su propia seguridad. Sin embargo, Sarah es apuñalada y herida de gravedad, lo que obliga a Deacon a evacuarla en un helicóptero de la Organización Nacional de repuesta a Emergencias."
        />
         <Testimonio 
        nombre="Assasins Creed Valhalla"
        imagen="c"
        alt='imagen Assasins Creed Valhalla'
        estudio="Ubisoft"
        resume="<bold>Conviértete en Eivor,</bold> un poderoso saqueador vikingo y lidera a tu clan desde las inclementes costas de Noruega a un nuevo hogar en medio de las exuberantes tierras de cultivo de la Inglaterra del siglo IX. Explora un hermoso y misterioso mundo abierto donde te enfrentarás a brutales enemigos, saquearás fortalezas, construirás el nuevo asentamiento de tu clan y forjarás alianzas para conseguir la gloria y obtener un lugar en el Valhalla."
        />

      </div>
    </div>
  );
}

export default App;
