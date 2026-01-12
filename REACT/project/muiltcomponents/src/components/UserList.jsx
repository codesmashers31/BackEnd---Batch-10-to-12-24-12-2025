

const UserList = ({senduser}) => {

    // console.log(senduser);
    
  return (
      <>
       <div className='bg-black text-white p-10 h-150 flex justify-between items-center flex-wrap'>
         {senduser.map((e)=>(
               <div className="w-50 h-100 p-2 rounded bg-white text-black flex flex-col gap-4" key={e.id}>
                <img   src={e.images} alt="" />
                <h1 className="bg-black text-white rounded-full w-10 text-center p-2">{e.title[1]}</h1>
                <p>{e.category}</p>
                <button className="bg-black text-white p-2">Book Now</button>
            </div>
         ))}

       </div>
      
      </>
  )
}

export default UserList
