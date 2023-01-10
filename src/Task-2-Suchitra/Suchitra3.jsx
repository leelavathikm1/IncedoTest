export default 
const mapFunction=()=>{ 
    const list=["rose","lilly","jasmine"] ;
     return(
     <div>
        {list.map((m)=>return 
        (<ul>
            <li>{m}</li>
            </ul>)}</div>)}