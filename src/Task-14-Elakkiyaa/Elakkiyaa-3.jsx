  import Task1 from './Task1'; import Task from './Task';  function App() {   return (     <div className="App">       <Task1 />       <div className="content">         <Task />       </div>     </div>   ); }  ;   Task.js  ;import { useState } from "react";  const Task = () => {   const [Array, setArray] = useState([     { name: 'elakkiyaa', email: 'elakkiyaams@gmail.com', fathername: 'mohan', id: 1 },     { name: 'hareesh', email: 'hareeshmohan@gmail.com', fathername: 'mohan', id: 2 }   ])  ;  return (     <div className="task">       {data.map(data => (         <div className="data" key={data.id} >           <h2>{ data.name }</h2>           <p>Father is { data.fathername}</p>         </div>       ))}     </div>   ); } ;  export default Task;   Task1.js ; const Task1 = () => {   return (     <nav className="task1">       <h1>The Data is</h1>       <div className="links">         <a href="/">Task</a>         <a href="/create" style={{            color: 'white',            backgroundColor: '#f1356d',           borderRadius: '8px'          }}>New Blog</a>       </div>     </nav>   ); } ;  export default Task1;