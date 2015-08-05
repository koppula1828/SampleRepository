'use strict';

/* Filters */

angular.module('momentfilters', []).
 
    filter('moment', function() {
        return function(dateString, format) {
            return moment(dateString).format(format);
        };
    });
