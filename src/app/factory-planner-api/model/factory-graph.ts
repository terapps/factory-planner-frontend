/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { FactoryEdge } from './factory-edge';
import { FactoryNode } from './factory-node';


export interface FactoryGraph { 
    rootSite: FactoryNode;
    nodes: Array<FactoryNode>;
    edges: Array<FactoryEdge>;
}

