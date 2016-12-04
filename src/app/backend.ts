import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { Http, RequestOptionsArgs, Headers, Response as HttpResponse } from '@angular/http';
import { Response } from '../api';
import { Observable } from 'rxjs/Rx';

export const BACKEND_CONFIG = new OpaqueToken('BACKEND_CONFIG');
export interface BackendConfig {
    baseUrl: string;
}

@Injectable()
export class BackendService {
    private baseUrl:String;
    private token:string|undefined=undefined;

    constructor (@Inject(BACKEND_CONFIG) config:BackendConfig, private http:Http) {
        this.baseUrl = config.baseUrl;
    }

    get(path:string):Observable<Response> {
        return this.intercept(this.http.get(`${this.baseUrl}${path}`, this.options()));
    }

    post(path:string, body: any):Observable<Response> {
        return this.intercept(this.http.post(`${this.baseUrl}${path}`, body, this.options()));
    }

    delete(path:string):Observable<Response> {
        return this.intercept(this.http.delete(`${this.baseUrl}${path}`, this.options()));
    }

    private options():RequestOptionsArgs {
        let h = new Headers();
        if (this.token) {
            h.append('Authorization', this.token);
        }
        return {
            headers: h
        }
    }

    private intercept(res: Observable<HttpResponse>):Observable<Response> {
        return res.do(
            (r) => {
                const token = r.headers.get('Authorization');
                console.debug("Got response ",r.url, " with status of ",r.status, "and auth token", token)
                this.token = token;
            },
            (e) => console.log("Request error",e)
        ).map((r) => r.json());
    }
}