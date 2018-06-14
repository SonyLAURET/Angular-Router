import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Formation } from "../entity/formation";

@Injectable()
export class FormationsResolvers implements Resolve<any> {
    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        var promise = new Promise((resolve) => {
            setTimeout(() => {
               resolve([ 
               new Formation('Module Angular'),
               new Formation('Module JavaScript'),
               new Formation('Module TypeScript')])
            }, 5000)
        });
        return promise;
    }
}
