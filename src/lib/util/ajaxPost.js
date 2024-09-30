/**
 * This is my wrapper function around "fetch". Specific for this app and manages tokes as well.
 - I do not need another ajaxPost for non-auth requests since the same can be used.
 * @param {*} url 
 * @param {*} payload 
 * @returns 
 */



export default async function ajaxPost(url, payload){
try{
const token = localStorage.getItem("token");
const resp = await fetch( url ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify( payload )
    });

    return resp;      

  }catch (error) {
      return error;
  }
}