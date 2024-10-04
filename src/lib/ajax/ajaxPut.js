//@ts-nocheck
export default async function ajaxPut(url, payload) {
    try {
      const token = localStorage.getItem("token");
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
  
  