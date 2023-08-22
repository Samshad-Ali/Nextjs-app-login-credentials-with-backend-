
export default function page({params}:any){
  return(
      <div className='w-full h-[100vh] flex justify-center items-center'>
          <p>This is your profile page and your Id is :  <span className="py-1 px-2 rounded-sm bg-orange-500"> {params.id} </span></p>
      </div>
  );
}