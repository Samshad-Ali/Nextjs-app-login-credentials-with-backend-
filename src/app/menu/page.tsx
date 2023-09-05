"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "../components/Card.jsx";
import Loadinganimation from '../components/Loadinganimation.jsx'
export default function page() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState('chicken');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSearchBtn=()=>{
        setSearch(title)
  }
  const fetchingData = async () => {
    try {
        setLoading(true)
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setItem(response.data.meals);
      setLoading(false)
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchingData();
  }, [search]);
  return (
    <div className="w-full p-4 flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl mb-10 mt-4 sm:text-5xl">Meal of the Day</h1>
      <div className="flex gap-2 justify-center">
        <input className="pl-2 outline-none rounded-sm p-2 text-black text-sm" type="text" name="name" id="name" placeholder="Search meal"
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        <button className="bg-orange-600 font-bold text-sm  rounded-sm p-2 hover:scale-90 text-black" onClick={handleSearchBtn}>Search</button>
      </div>
      <div className="flex shadow-sm shadow-white p-5 rounded-sm gap-10 flex-wrap justify-center items-center">
        {
            loading? <Loadinganimation/> : item!==null ?
            item.map((data,id)=>{
                return <Card key={id} data={data} />
            })
         :"Not found 404"
        }
      </div>
    </div>
  );
}
