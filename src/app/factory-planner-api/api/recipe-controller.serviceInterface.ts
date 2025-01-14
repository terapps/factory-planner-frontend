/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { RecipeProducingDto } from '../model/models';
import { RecipeRequiringDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface RecipeControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
     * @param itemClass 
     */
    findAllByProducedItem(itemClass: string, extraHttpRequestParams?: any): Observable<Array<RecipeRequiringDto>>;

    /**
     * 
     * 
     * @param recipeClassName 
     */
    findByClassName(recipeClassName: string, extraHttpRequestParams?: any): Observable<RecipeProducingDto>;

    /**
     * 
     * 
     * @param recipeClassName 
     */
    findByClassNameProducing(recipeClassName: string, extraHttpRequestParams?: any): Observable<RecipeProducingDto>;

    /**
     * 
     * 
     * @param recipeClassName 
     */
    findByClassNameRequiring(recipeClassName: string, extraHttpRequestParams?: any): Observable<RecipeRequiringDto>;

}
