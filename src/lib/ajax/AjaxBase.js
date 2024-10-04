//@ts-nocheck

import ajaxDelete from "./ajaxDelete";
import ajaxPost from "./ajaxPost";
import ajaxPut from "./ajaxPut";
import ajaxGet from "./ajaxGet";
import {API_URL} from "$lib/util";


export default class AjaxBase {

    constructor(baseUrl = "") {
      this.baseUrl = baseUrl;
    }
  
    async get(queryString = "") {
      const resp = await ajaxGet(`${API_URL}/${this.baseUrl}${queryString ? '?' + queryString : ''}`);
      return resp;
    }
  
    async getOne(id) {
      const resp = await ajaxGet(`${API_URL}/${this.baseUrl}/${id}`);
      return resp;
    }
  
    async create(data) {
      const resp = await ajaxPost(`${API_URL}/${this.baseUrl}`, data);
      return resp;
    }
  
    async update(id, data) {
      const resp = await ajaxPut(`${API_URL}/${this.baseUrl}/${id}`, data);
      return resp;
    }
  
    async delete(id) {
      const resp = await ajaxDelete(`${API_URL}/${this.baseUrl}/${id}`);
      return resp;
    }
  
  }
  