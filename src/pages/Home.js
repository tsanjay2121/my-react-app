// const Home = () => {

//   const mystyle={
//     jk:{}
// backgroundColor:"red",
// color:"blue",
// fontSize:"60px"
//   }
//     return (
//       <>
//         <h5 style= {mystyle}>sanjay</h5>
//       </>
//     );
//   };
  
//   export default Home;
import { useState } from 'react';
import '../assets/css/mystyle.css';
import style from '../assets/css/mystyle.module.css';
import '../assets/css/sass.scss'

export default function Home() {

    const [x, setX] = useState(0);
    const [y, z] = useState(0);
    const [k, j] = useState(0);



    const mystyle = {
      c1: {
        backgroundColor: "red",
        color: "blue",
        fontSize: "10px",
      },
      c2: {
        fontSize: "60px",
      },
    };
    return (
   
      <>

        <div className="btn btn primary"> </div>

        <h4 onClick={() => setX("Coder")} className={'jk'}>SASS {x}</h4>
        <h1 className={`coder cc`}>Hello world</h1>
        <h5 onClick={() => z(78)} style={{ ...mystyle.c1, ...mystyle.c2 }}>sanjay {y}</h5>

        <h6 className={style.cc}>Hi, Coder </h6>
      </>
    );
  }