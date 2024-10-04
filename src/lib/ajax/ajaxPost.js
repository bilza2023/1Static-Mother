//@ts-nocheck


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