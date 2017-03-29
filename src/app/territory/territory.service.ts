import {Injectable} from "@angular/core";
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {TerritoryEntry} from "./territory-entry";

@Injectable()
export class TerritoryService {
  private baseUrl: string = 'http://tox-static-info-api-qa.herokuapp.com/api/v1/territories';

  constructor(private http: Http) {
  }

  getAll(): Observable<TerritoryEntry[]> {
    let territories = this.http
      .get(`${this.baseUrl}`, {headers: this.getHeaders()})
      .map(mapTerritories)
      .catch(handleError);

    return territories;
  }

  postOne(value: TerritoryEntry): Observable<Response> {

    let headers = new Headers ({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, method: "post" });
    let value2 = {"name":"Arctic"};

    console.log('SAVE: ', value);
    console.log('SAVE true: ', this.http.post('http://tox-static-info-api-qa.herokuapp.com/api/v1/territories', { value2 }, headers));
    // this.http
    //   .post(`${this.baseUrl}`, JSON.stringify(value), {headers: this.getHeaders()})
    // this.http.post(this.baseUrl, value, options)
    return this.http.post('http://tox-static-info-api-qa.herokuapp.com/api/v1/territories', { name:"Japan" }, options);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapTerritories(response: Response): TerritoryEntry[] {

  return response.json()
    .map(toTerritory);
}

function toTerritory(r: any): TerritoryEntry {
  let territory = <TerritoryEntry>({
    id: r._id,
    name: r.name,
    version: r.__v,
  });
  return territory;
}

function handleError(error: any) {
  let errorMsg = error.message;
  console.log('FEHLER: ', errorMsg);

  return Observable.throw(errorMsg);
}
