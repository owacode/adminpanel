import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(public http: HttpClient) {}

  getRegisteredInstructor() {
    return this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/get-registeredinstructor');
  }

  getSingleRegisteredInstructor(id) {
    return this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/get-registeredinstructor/'+id);
  }

  getDrawing() {
    return this.http.get<{status:any, msg:any, result:any}>('https://onewater-instructor-api.herokuapp.com/register-drawing');
  }
}
