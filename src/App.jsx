import { useState } from 'react';


const App = () => {

  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [task, setTask] = useState([])
const submithandler=(e)=>{
 e.preventDefault();
 console.log("Form submitted")
  let copyTask=[...task ];
  copyTask.push({title,des})
  setTask(copyTask)
  
 setTitle('');
setDes(' ');
}

const deleteNote = function(e){

  const copytask= [...task];
  console.log(copytask[e])
  copytask.splice(e,1);
  setTask(copytask)
}


  return (
    <div className="h-screen bg-black lg:flex border-white text-white  ">
    
      <form className=" flex  flex-col  items-start lg:w-1/2 p-10  gap-4" 
      onSubmit={(e)=>{
           submithandler(e)
      }}>
      
      {/* // Title Input */}
          <input type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 w-full font-medium  py-2 border-2  rounded outline-none'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />

        {/* Detailed Input */}
        <textarea
         type="text" 
         placeholder="Write details" 
         className="px-5 w-full font-medium h-32 py-2 border-2 rounded flex item-start flex-row  outline-none"
        value={des}
        onChange={(e)=>{
           setDes(e.target.value)
        }}
      
        />

        <button className=' active:bg-gray-200  bg-white text-black font-medium w-full outline-none rounded-2xl mt-4 p-1.5'>Add Note</button>
      
        
      </form>
      <div className="p-10 lg:border-l-2 lg:w-1/2">
          <h1 className="text-3xl font-bold">Recent Notes</h1>
          <div className="flex flex-wrap gap-5 mt-5 overflow-auto h-[90%]">
           
           {task.map(function(elem,idx){
            return  <div key={idx} className='h-50 w-50 rounded-2xl gap-10 py-4 bg-white  text-black flex flex-col items-center overflow-none'>
               <h3 className="text-xl pt-1 font-bold">{elem.title}</h3>
               <p className="text-xs">{elem.des}</p>
                <button 
                onClick={()=>{
                  deleteNote(idx)
                }}
                className="text-white cursor-pointer active:scale-95 bg-red-600 h-full w-20 border-2 rounded">Delete</button>

            </div>
           })}
            
          
          </div>
         
       </div>
     
    </div>
     
  )
}

export default App
