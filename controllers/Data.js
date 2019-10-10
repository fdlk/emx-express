'use strict';

var utils = require('../utils/writer.js');
var Data = require('../service/DataService');

module.exports.dataResourceTypeIdDELETE = function dataResourceTypeIdDELETE (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var q = req.swagger.params['q'].value;
  Data.dataResourceTypeIdDELETE(resourceTypeId,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdGET = function dataResourceTypeIdGET (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var page = req.swagger.params['page'].value;
  var size = req.swagger.params['size'].value;
  var q = req.swagger.params['q'].value;
  var sort = req.swagger.params['sort'].value;
  var filter = req.swagger.params['filter'].value;
  var expand = req.swagger.params['expand'].value;
  Data.dataResourceTypeIdGET(resourceTypeId,page,size,q,sort,filter,expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdPOST = function dataResourceTypeIdPOST (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var body = req.swagger.params['body'].value;
  Data.dataResourceTypeIdPOST(resourceTypeId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdResourceIdDELETE = function dataResourceTypeIdResourceIdDELETE (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var resourceId = req.swagger.params['resourceId'].value;
  Data.dataResourceTypeIdResourceIdDELETE(resourceTypeId,resourceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdResourceIdFieldIdGET = function dataResourceTypeIdResourceIdFieldIdGET (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var resourceId = req.swagger.params['resourceId'].value;
  var fieldId = req.swagger.params['fieldId'].value;
  var page = req.swagger.params['page'].value;
  var size = req.swagger.params['size'].value;
  var q = req.swagger.params['q'].value;
  var sort = req.swagger.params['sort'].value;
  var filter = req.swagger.params['filter'].value;
  var expand = req.swagger.params['expand'].value;
  Data.dataResourceTypeIdResourceIdFieldIdGET(resourceTypeId,resourceId,fieldId,page,size,q,sort,filter,expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdResourceIdGET = function dataResourceTypeIdResourceIdGET (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var resourceId = req.swagger.params['resourceId'].value;
  var filter = req.swagger.params['filter'].value;
  var expand = req.swagger.params['expand'].value;
  Data.dataResourceTypeIdResourceIdGET(resourceTypeId,resourceId,filter,expand)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdResourceIdPATCH = function dataResourceTypeIdResourceIdPATCH (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var resourceId = req.swagger.params['resourceId'].value;
  var body = req.swagger.params['body'].value;
  Data.dataResourceTypeIdResourceIdPATCH(resourceTypeId,resourceId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.dataResourceTypeIdResourceIdPUT = function dataResourceTypeIdResourceIdPUT (req, res, next) {
  var resourceTypeId = req.swagger.params['resourceTypeId'].value;
  var resourceId = req.swagger.params['resourceId'].value;
  var body = req.swagger.params['body'].value;
  Data.dataResourceTypeIdResourceIdPUT(resourceTypeId,resourceId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
