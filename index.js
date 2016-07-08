var request = require('request');

module.exports = {

    Geocode: function ( AddressPlaceId,
                        SearchText,
                        Street,
                        HouseNumber,
                        RecordNumber,
                        OrientationNumber,
                        OrientationNumberCharacter,
                        ZIPCode,
                        Locality,
                        LocalityPart,
                        DistrictNumber) {

        // by AddressPlaceId

        if (AddressPlaceId !== '' || AddressPlaceId != null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/Geocode/json?AddressPlaceId='
                + AddressPlaceId, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }

        // by SearchText

        if (SearchText !== '' || SearchText != null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/Geocode/json?SearchText='
                + SearchText, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }

        // by parameters

        if (SearchText === '' || SearchText === null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/Geocode/json?'
                + 'Street=' + Street + '&'
                + 'HouseNumber=' + HouseNumber + '&'
                + 'RecordNumber=' + RecordNumber + '&'
                + 'OrientationNumber=' + OrientationNumber + '&'
                + 'OrientationNumberCharacter=' + OrientationNumberCharacter + '&'
                + 'ZIPCode=' + ZIPCode + '&'
                + 'Locality=' + Locality + '&'
                + 'LocalityPart=' + LocalityPart + '&'
                + 'DistrictNumber=' + DistrictNumber, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }
    },

    CompileAddress: function (AddressPlaceId,
                              SearchText,
                              Street,
                              HouseNumber,
                              RecordNumber,
                              OrientationNumber,
                              OrientationNumberCharacter,
                              ZIPCode,
                              Locality,
                              LocalityPart,
                              DistrictNumber) {

        // by AddressPlaceId

        if (AddressPlaceId !== '' || AddressPlaceId != null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/CompileAddress/json?AddressPlaceId='
                + AddressPlaceId, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }

        // by SearchText

        if (SearchText !== '' || SearchText != null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/CompileAddress/json?SearchText='
                + SearchText, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }

        // by parameters

        if (SearchText === '' || SearchText === null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/CompileAddress/json?'
                + 'Street=' + Street + '&'
                + 'HouseNumber=' + HouseNumber + '&'
                + 'RecordNumber=' + RecordNumber + '&'
                + 'OrientationNumber=' + OrientationNumber + '&'
                + 'OrientationNumberCharacter=' + OrientationNumberCharacter + '&'
                + 'ZIPCode=' + ZIPCode + '&'
                + 'Locality=' + Locality + '&'
                + 'LocalityPart=' + LocalityPart + '&'
                + 'DistrictNumber=' + DistrictNumber, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }
    },

    FullTextSearch: function (SearchText) {
        if (SearchText !== '' || SearchText != null) {
            request('http://www.vugtk.cz/euradin/services/rest.py/FullTextSearch/json?' + 'SearchText='
                + SearchText, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
        }
    },

    Validate: function (Street,
                        HouseNumber,
                        RecordNumber,
                        OrientationNumber,
                        OrientationNumberCharacter,
                        ZIPCode,
                        Locality,
                        LocalityPart,
                        DistrictNumber) {

            request('http://www.vugtk.cz/euradin/services/rest.py/Validate/json?'
                + 'Street=' + Street + '&'
                + 'HouseNumber=' + HouseNumber + '&'
                + 'RecordNumber=' + RecordNumber + '&'
                + 'OrientationNumber=' + OrientationNumber + '&'
                + 'OrientationNumberCharacter=' + OrientationNumberCharacter + '&'
                + 'ZIPCode=' + ZIPCode + '&'
                + 'Locality=' + Locality + '&'
                + 'LocalityPart=' + LocalityPart + '&'
                + 'DistrictNumber=' + DistrictNumber, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    return response;
                }
            });
    },

    ValidateAddressId: function (AddressPlaceId) {
        request('http://www.vugtk.cz/euradin/services/rest.py/ValidateAddressId/json?' + 'AddressPlaceId='
            + SearchText, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                return response;
            }
        });
    },

    NearByAddresses: function (JTSKY, JTSKX, Distance) {
        request('http://www.vugtk.cz/euradin/services/rest.py/Validate/json/'
            + JTSKY + '/'
            + JTSKX + '/'
            + Distance + '?', function (error, response, body) {
            if (!error && response.statusCode === 200) {
                return response;
            }
        });
    }
};
