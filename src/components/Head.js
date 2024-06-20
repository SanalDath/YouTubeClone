import React, { useEffect, useState } from 'react';
import { hamlogo } from './assets/hamburgerIcon'; 
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from './data/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [ searchQuery, setSearchQuery ] = useState("");
  const [ suggestions, setSuggetions ] = useState([]);
  const [ showsuggestions, setShowsuggetions ] = useState(false);
  
  const searchCache = useSelector((store) => store.search);
  
  useEffect(() => {
    //API call
    //console.log(searchQuery);
   const timer = setTimeout(()=> {
    if(searchCache[searchQuery]){
      setSearchQuery(searchCache[searchQuery])
    }else{
      getSearchSuggetions()
    }
  }, 200);

   return () => {
    clearTimeout(timer);
   }
  },[searchQuery])
  
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
  dispatch(toggleMenu());
}
const getSearchSuggetions = async () => {
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json = await data.json();
  //console.log(json);
 // console.log(json[1])
  setSuggetions(json[1]);
  dispatch(cacheResults({
    [searchQuery]: json[1],
  }))
}

  return (
    <div className='grid grid-flow-col sticky top-0 bg-slate-50 '>
        <div className='flex col-span-1'>
            <img className='w-10 h-10' alt='logo' onClick={() => toggleMenuHandler()} src={hamlogo}/>
            <img className='w-28 h-12 ml-5' alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png'/>
        </div>
        <div className='my-5 ml-32 col-span-10'>
          <div className='flex'>
            <input className="border border-zinc-950 w-6/12 h-9 pl-2 rounded-l-full" 
              type='text'
              placeholder='    Search'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowsuggetions(true)}
              onBlur={() => setShowsuggetions(false)}
            />
            <button className="bg-slate-300 rounded-r-full h-9 w-16"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className='fixed bg-white ml-2 w-4/12 shadow-lg rounded-lg border-gray-100'>
            <ul>
              {showsuggestions && suggestions.map((item, indux) => <li key={indux}className='px-2 py-2 pl-4 pt-3 shadow-sm hover:bg-slate-100'><i class="fa-solid fa-magnifying-glass"></i>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className='col-span-1'>
          <img className='w-8 h-8' alt="logo" src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg"/>
        </div>
    </div>
  )
}

export default Head;
