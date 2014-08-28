define([
    'model/rating-tab/rating-tab'
], function(RatingTabModel) {
    describe('Tests for Rating Tab model', function() {
        var ratingTabModel = new RatingTabModel(),
            configuration = {
                url: 'https://api.edmunds.com/api/vehicle/v2/grade/101418219',
                styleId: '101418219',
                make: 'acura',
                model: 'ilx',
                year: 2013,
                response: {
                    styles: [
                        {
                            make: {
                                id: 200002038,
                                name: "Acura",
                                niceName: "acura"
                            },
                            model: {
                                id: "Acura_ILX",
                                name: "ILX",
                                niceName: "ilx"
                            },
                            id: 200419089,
                            name: "Premium Package 4dr Sedan (2.4L 4cyl 6M)",
                            year: {
                                id: 100538929,
                                year: 2013
                            },
                            submodel: {
                                body: "Sedan",
                                modelName: "ILX Sedan",
                                niceName: "sedan"
                            },
                            trim: "Premium Package"
                        },
                        {
                            make: {
                                id: 200002038,
                                name: "Acura",
                                niceName: "acura"
                            },
                            model: {
                                id: "Acura_ILX",
                                name: "ILX",
                                niceName: "ilx"
                            },
                            id: 101418787,
                            name: "Hybrid 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT)",
                            year: {
                                id: 100538929,
                                year: 2013
                            },
                            submodel: {
                                body: "Sedan",
                                fuel: "Hybrid",
                                modelName: "ILX Hybrid",
                                niceName: "hybrid"
                            },
                            trim: "Hybrid"
                        },
                        {
                            make: {
                                id: 200002038,
                                name: "Acura",
                                niceName: "acura"
                            },
                            model: {
                                id: "Acura_ILX",
                                name: "ILX",
                                niceName: "ilx"
                            },
                            id: 200419090,
                            name: "Hybrid w/Technology Package 4dr Sedan (1.5L 4cyl gas/electric hybrid CVT)",
                            year: {
                                id: 100538929,
                                year: 2013
                            },
                            submodel: {
                                body: "Sedan",
                                fuel: "Hybrid",
                                modelName: "ILX Hybrid",
                                niceName: "hybrid"
                            },
                            trim: "Hybrid w/Technology Package"
                        },
                        {
                            make: {
                                id: 200002038,
                                name: "Acura",
                                niceName: "acura"
                            },
                            model: {
                                id: "Acura_ILX",
                                name: "ILX",
                                niceName: "ilx"
                            },
                            id: 101418219,
                            name: "4dr Sedan (2.0L 4cyl 5A)",
                            year: {
                                id: 100538929,
                                year: 2013
                            },
                            submodel: {
                                body: "Sedan",
                                modelName: "ILX Sedan",
                                niceName: "sedan"
                            },
                            trim: "Base"
                        },
                        {
                            make: {
                                id: 200002038,
                                name: "Acura",
                                niceName: "acura"
                            },
                            model: {
                                id: "Acura_ILX",
                                name: "ILX",
                                niceName: "ilx"
                            },
                            id: 200418983,
                            name: "Technology Package 4dr Sedan (2.0L 4cyl 5A)",
                            year: {
                                id: 100538929,
                                year: 2013
                            },
                            submodel: {
                                body: "Sedan",
                                modelName: "ILX Sedan",
                                niceName: "sedan"
                            },
                            trim: "Technology Package"
                        }
                    ]
                }
            };
        it('test prepared and all data is defined', function() {
            expect(ratingTabModel).toBeDefined();
            expect(configuration).toBeDefined();
        });

        describe('When the test prepared', function() {
            var ratingTabModel;

            beforeEach(function() {
                ratingTabModel = new RatingTabModel();

                spyOn($, 'ajax').andCallFake(function(options) {
                    options.success(configuration.response);
                });
                spyOn(ratingTabModel, 'parse').andCallThrough();

                ratingTabModel.fetch();
            });

            afterEach(function() {
                ratingTabModel = null;
            });

            it('should call to a server and get a response', function() {
                var ajaxCallParams = $.ajax.mostRecentCall.args[0];

                expect(ajaxCallParams.dataType).toEqual('json');
                expect(ajaxCallParams.type).toEqual('GET');
                expect(ajaxCallParams.success).toBeDefined();
                expect(ratingTabModel.url(configuration.make, configuration.model, configuration.year)).toEqual(configuration.url);
                expect(ratingTabModel.parse).toHaveBeenCalled();
                expect(ratingTabModel.length).not.toEqual(0);
            });
        });
    });
});