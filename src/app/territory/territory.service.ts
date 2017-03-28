import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
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

  save(territory: TerritoryEntry): Observable<Response> {

    console.log('SAVE: ', this.http.post(`${this.baseUrl}`, JSON.stringify(territory), {headers: this.getHeaders()}));
    return this.http
      .post(`${this.baseUrl}`, JSON.stringify(territory), {headers: this.getHeaders()})
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapTerritories(response: Response): TerritoryEntry[] {

  console.log(response.json());
  return response.json()
    .map(toTerritory);
}

function toTerritory(r: any): TerritoryEntry {
  let territory = <TerritoryEntry>({
    id: r._id,
    name: r.name,
    version: r.__v,
  });
  console.log('Parsed territory', territory);
  return territory;
}

function handleError(error: any) {
  let errorMsg = error.message;
  console.log('FEHLER: ', errorMsg);

  return Observable.throw(errorMsg);
}
