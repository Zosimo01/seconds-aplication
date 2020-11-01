export const getGifs=async (listed)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=m5WwFfWtl4Q6aqj7VYpWXHMmHMCT3tKV&q=${encodeURI(listed)}&limit=10`;
    const respon=await fetch(url);
    const {data}=await respon.json();
    
    const data_uno=data.map(img=>(
        {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    ))
   
  return data_uno
    
     }