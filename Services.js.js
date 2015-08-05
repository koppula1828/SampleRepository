'use strict';

angular.module('vkApp')

    .factory('GetAttachments', function ($resource, GE, Validate) {
        var serviceUrl = GE.serviceUrl + 'attachment/getById';
        //var serviceUrl = 'stub/plants.json';
        return $resource(serviceUrl, {}, {
            'read': {
                method: 'GET',
                isArray: true,
                transformResponse: Validate.service
            }
        });
    })
    .factory('AddAttachment', function ($resource, GE, Validate) {
        //var serviceUrl = 'stub/repair/form.json';
        var serviceUrl = GE.serviceUrl + 'attachment/addById';
        return $resource(serviceUrl, [], {
            'create': {
                method: 'POST',
                withCredentials: true,
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity,
                //params: {repairId: '@repairId', comments: '@comments', tagName: '@tagName', plantId :'@plantId'},
                data: '@generic'
            }
        });
    })
    .factory('GenericsByRepair', function ($resource, GE, Validate) {
        var serviceUrl = GE.serviceUrl + 'attachment/getById';
        //var serviceUrl = 'stub/plants.json';
        return $resource(serviceUrl, [], {
            'read': {
                method: 'GET',
            }
        });
    })
;