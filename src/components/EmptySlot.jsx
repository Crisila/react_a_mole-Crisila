import { useEffect } from "react";
import MoleHill from 'src/Img/molehill.png';

function EmptySlot(props) {
     useEffect(() => {
          let randSeconds = Math.ceil(Math.random() * 5000 + 1000)
          let timer = setTimeout(() => {
               props.setDisplayMole(true)
          }, randSeconds);
          return () => clearTimeout(timer)
     })

         return (
        <div>
            <img 
            style={{'width': '30vw'}} 
            src={MoleHill}
            alt="MoleHill" 
            />
        </div>
    )

}
export default EmptySlot