//@ts-nocheck
import {toast} from "../util";
//This function will return data if resp.ok == true, else display error
//Incase of any error there must be a message in the return json.
// Incase resp.ok == true return the data 

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

    if(resp.ok){

      const data = await resp.json();
      return data;
    }else {
      const data = await resp.json();
      toast.push(data.message);
    }    

  }catch (error) {
      return error;
  }
}