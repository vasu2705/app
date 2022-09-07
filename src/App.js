import react,{useState} from 'react'
import './App.css';

function App() {
const [count,setCount]=useState(0)
const handleevent=()=>{
setCount(count+1);

if(count>=2){
setCount(0)
}
}
const getColor=()=>{
  if(count==1)
  return 'red';
  else if(count==2)
  return 'blue';
  else
  return 'green';
}
return (
<div className="App">
  <div class="container" style={{background:getColor()}}>

  </div>
  <button onClick={handleevent}>click</button>
</div>
);
}

export default App;