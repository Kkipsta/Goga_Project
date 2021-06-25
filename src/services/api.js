export const fetchData = async (setReturnedData,setReturnedError) => {
  const resource = "https://reqres.in/api/users";
    
  const res = await fetch(resource);
  const json = await res.json();
  setReturnedData(json.data);
};
