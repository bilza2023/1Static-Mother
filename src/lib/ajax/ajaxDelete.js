

  //@ts-nocheck
  import Cookies from 'js-cookie'; 

  export default async function ajaxDelete(url) {
    try {
  
      const token =  Cookies.get("token");
        
      const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
  
      return resp;
    } catch (error) {
      throw error;
    }
  }