const base_url = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;


const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
}

/**
 * @function - Function to make a GET request to the API
 * @param {string} url - The endpoint to fetch data from the API
 * @returns {Promise<any>} - The JSON response that the API return
 * @throws - In case if the request fails an error will be return
 */
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

/**
 * @function - Function to make a POST request to the API
 * @param {string} url - The endpoint to fetch data from the API
 * @param {unknown} data - The data to send in the request body to the API
 * @returns {Promise<any>} - The JSON response that the API return
 * @throws - In case if the request fails an error will be return
 */
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

/**
 * @function - Function to make a PUT request to the API
 * @param {string} url - The endpoint to fetch data from the API
 * @param {unknown} data - The data to send in the request body to the API
 * @returns {Promise<any>} - The JSON response that the API return
 * @throws - In case if the request fails an error will be return
 */
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