'use strict'

const metadata = require('./metadata')
const paging = require('./v3/paging')
const v3Data = require('./v3/data')
const {repositories} = require ('./parse-emx')

/**
 * Delete resources
 *
 * resourceTypeId String Resource type identifier
 * q String Query. [RSQL expression](https://github.com/jirutka/rsql-parser) where operator is '==' (equal to), '!=' (not equal to), '=lt=' or '<' (less than), '=le=' or '<=' (less than or equal to), '=gt=' or '>' (greater than), '=ge=' or '>=' (greater than or equal to), '=like=' (contains) or '=q=' (matches). (optional)
 * no response value expected for this operation
 **/
exports.dataResourceTypeIdDELETE = function(resourceTypeId,q) {
  return new Promise(function(resolve, reject) {
    reject();
  });
}


/**
 * Retrieves a list of resources
 *
 * resourceTypeId String Resource type identifier
 * page Integer Page number (optional)
 * size Integer Page size (optional)
 * q String Query. [RSQL expression](https://github.com/jirutka/rsql-parser) where operator is '==' (equal to), '!=' (not equal to), '=lt=' or '<' (less than), '=le=' or '<=' (less than or equal to), '=gt=' or '>' (greater than), '=ge=' or '>=' (greater than or equal to), '=like=' (contains) or '=q=' (matches). (optional)
 * sort String Sort order (optional)
 * filter String Fields to return (optional)
 * expand String Fields to expands (optional)
 * returns ResourceCollection
 **/
exports.dataResourceTypeIdGET = function(resourceTypeId,page,size,q,sort,filter,expand) {
  return new Promise(function(resolve, reject) {
    try {
      const repository = repositories[resourceTypeId]
      if (!repository) {
        reject('unknown resourceTypeId')
      }
      const pageBlock = paging.getPageBlock(page, repository.count(), size)
      const patientsPage = repository.findAll(pageBlock)
      const patientsAttributes = repository.getAllAttributes()
      const response = v3Data.getResponse(repository.id, patientsAttributes, patientsPage, pageBlock)
      resolve(response)
    } catch(e) {
      console.log('error', e)
      reject(e)
    }
  })
}


/**
 * Creates a resource.
 *
 * resourceTypeId String Resource type identifier
 * body Object  (optional)
 * no response value expected for this operation
 **/
exports.dataResourceTypeIdPOST = function(resourceTypeId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a resource.
 *
 * resourceTypeId String Resource type identifier
 * resourceId String Resource identifier
 * no response value expected for this operation
 **/
exports.dataResourceTypeIdResourceIdDELETE = function(resourceTypeId,resourceId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a list of sub-resources for a resource field
 *
 * resourceTypeId String Resource type identifier
 * resourceId String Resource identifier
 * fieldId String Field identifier
 * page Integer Page number (optional)
 * size Integer Page size (optional)
 * q String Query. [RSQL expression](https://github.com/jirutka/rsql-parser) where operator is '==' (equal to), '!=' (not equal to), '=lt=' or '<' (less than), '=le=' or '<=' (less than or equal to), '=gt=' or '>' (greater than), '=ge=' or '>=' (greater than or equal to), '=like=' (contains) or '=q=' (matches). (optional)
 * sort String Sort order (optional)
 * filter String Fields to return (optional)
 * expand String Fields to expands (optional)
 * returns ResourceCollection
 **/
exports.dataResourceTypeIdResourceIdFieldIdGET = function(resourceTypeId,resourceId,fieldId,page,size,q,sort,filter,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "links" : {
    "previous" : "https://my.molgenis.org/api/data/Node?number=0",
    "self" : "https://my.molgenis.org/api/data/Node?number=1",
    "next" : "https://my.molgenis.org/api/data/Node?number=2"
  },
  "page" : {
    "size" : 20,
    "totalElements" : 100,
    "totalPages" : 5,
    "number" : 1
  },
  "items" : [ {
    "data" : {
      "id" : 0,
      "parent" : "https://my.molgenis.org/api/data/Node/1",
      "children" : "https://my.molgenis.org/api/data/Node/0/children"
    }
  }, {
    "data" : {
      "id" : 0,
      "parent" : "https://my.molgenis.org/api/data/Node/1",
      "children" : "https://my.molgenis.org/api/data/Node/0/children"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a resource
 *
 * resourceTypeId String Resource type identifier
 * resourceId String Resource identifier
 * filter String Fields to return (optional)
 * expand String Fields to expands (optional)
 * returns Resource
 **/
exports.dataResourceTypeIdResourceIdGET = function(resourceTypeId,resourceId,filter,expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "id" : 0,
    "parent" : "https://my.molgenis.org/api/data/Node/1",
    "children" : "https://my.molgenis.org/api/data/Node/0/children"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a resource with the specified attributes
 *
 * resourceTypeId String Resource type identifier
 * resourceId String Resource identifier
 * body Object  (optional)
 * no response value expected for this operation
 **/
exports.dataResourceTypeIdResourceIdPATCH = function(resourceTypeId,resourceId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a resource
 *
 * resourceTypeId String Resource type identifier
 * resourceId String Resource identifier
 * body Object  (optional)
 * no response value expected for this operation
 **/
exports.dataResourceTypeIdResourceIdPUT = function(resourceTypeId,resourceId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

