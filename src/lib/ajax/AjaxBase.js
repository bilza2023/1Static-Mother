//@ts-nocheck

import ajaxDelete from "./ajaxDelete.js";
import ajaxPost from "./ajaxPost.js";
import ajaxPut from "./ajaxPut.js";
import ajaxGet from "./ajaxGet.js";


export default class AjaxBase {

    constructor(baseUrl = "",apiUrl="") {
      this.baseUrl = baseUrl;
      this.apiUrl = apiUrl;
    }
  
    async get(queryString = "") {
      const resp = await ajaxGet(`${this.apiUrl}/${this.baseUrl}${queryString ? '?' + queryString : ''}`);
      return resp;
    }
  
    async getOne(id) {
      const resp = await ajaxGet(`${this.apiUrl}/${this.baseUrl}/${id}`);
      return resp;
    }
  
    async create(data) {
      const resp = await ajaxPost(`${this.apiUrl}/${this.baseUrl}`, data);
      return resp;
    }
  
    async update(id, data) {
      const resp = await ajaxPut(`${this.apiUrl}/${this.baseUrl}/${id}`, data);
      return resp;
    }
  
    async delete(id) {
      const resp = await ajaxDelete(`${this.apiUrl}/${this.baseUrl}/${id}`);
      return resp;
    }
  
  }
  