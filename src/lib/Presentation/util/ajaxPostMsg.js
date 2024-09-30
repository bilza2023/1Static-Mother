//@ts-nocheck
import {toast} from "../util";
//This function will toast message in both cases if resp.ok == true or not

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

      const data = await resp.json();
      toast.push(data.message);

  }catch (error) {
      return error;
  }
}