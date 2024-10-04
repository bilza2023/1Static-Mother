//@ts-nocheck
export default async function ajaxGet(url) {
  // eslint-disable-next-line no-useless-catch
  try {
  const token = localStorage.getItem("token");
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      } 
    });

    return resp;
  } catch (error) {
    throw error;
  }
}
