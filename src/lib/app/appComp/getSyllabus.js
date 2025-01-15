//@ts-nocheck
import {API_URL} from '$lib/util';

export default async function getSyllabus(tcode) {
 try{
 debugger;
 
    const token = localStorage.getItem('token');
    const resp = await fetch( `${API_URL}/be/syllabus`, {
        method: 'POST',
        headers: {
        'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify( {tcode} )
    });
    if (resp.ok){
      // debugger;
        const data = await resp.json();
        return  data.questions;
    }else {
        return false;
    }
 }catch (e){
    console.error(e);
 }
}