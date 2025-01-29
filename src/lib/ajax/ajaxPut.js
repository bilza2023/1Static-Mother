
//@ts-nocheck
import Cookies from 'js-cookie'; 

export default async function ajaxPut(url, payload) {
    try {

      const token =  Cookies.get("token");
      
      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
  
      return resp;
    } catch (error) {
      throw error;
    }
  }
  
  