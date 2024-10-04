
  //@ts-nocheck
  export default async function ajaxDelete(url) {
    try {
      const token = localStorage.getItem("token");
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