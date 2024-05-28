const base_url = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_API_TOKEN;


const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
}

export const get_api = async (url: string) => {
  const response = await fetch(`${base_url}${url}`, { headers });
  if(!response.ok){
    throw new Error("Failed to fetch data");
  }
  let json = "";
  try{
    json = await response.json();
  } catch {
    throw new Error("Something went wrong");
  }
  return json;
}

export const post_api = async (url: string, data: unknown) => {
  const formatedData = JSON.stringify(data);
  const response = await fetch(`${base_url}${url}`, { 
    method: "POST",
    headers,
    body: formatedData
   });

  if(!response.ok){
  throw new Error("Failed to post data");
  }
  let json = "";
  try{
    json = await response.json();
  } catch {
    throw new Error("Something went wrong");
  }
  return json;
}

export const put_api = async (url: string, data: unknown) => {
  const formatedData = JSON.stringify(data);
  const response = await fetch(`${base_url}${url}`, { 
    method: "PUT",
    headers,
    body: formatedData
  });
  if(!response.ok){
    throw new Error('Failed to update data')
  }
  let json = "";
  try{
    json = await response.json();
  } catch {
    throw new Error("Something went wrong");
  }
  return json;
}