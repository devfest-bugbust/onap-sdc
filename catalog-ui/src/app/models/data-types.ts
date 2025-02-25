/*-
 * ============LICENSE_START=======================================================
 * SDC
 * ================================================================================
 * Copyright (C) 2017 AT&T Intellectual Property. All rights reserved.
 * ================================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============LICENSE_END=========================================================
 */

/**
 * Created by rcohen on 9/25/2016.
 */
'use strict';
import {PropertyBEModel} from "./properties-inputs/property-be-model";
import {AttributeBEModel} from "./attributes-outputs/attribute-be-model";
import {Model} from "./model";

export class DataTypeModel {

    //server data
    name:string;
    uniqueId:string;
    derivedFromName:string;
    derivedFrom:DataTypeModel;
    creationTime:string;
    modificationTime:string;
    properties: Array<PropertyBEModel>;
    attributes: Array<AttributeBEModel>;
    model: Model;

    constructor(dataType:DataTypeModel) {
        if (dataType) {
            this.uniqueId = dataType.uniqueId;
            this.name = dataType.name;
            this.derivedFromName = dataType.derivedFromName;
            this.creationTime = dataType.creationTime;
            this.modificationTime = dataType.modificationTime;
            this.properties = dataType.properties;
            this.attributes = dataType.attributes;
            this.model = this.model;
        }
    }

    public toJSON = ():any => {

        return this;
    };
}

