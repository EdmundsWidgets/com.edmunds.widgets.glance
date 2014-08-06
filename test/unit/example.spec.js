define([
    'src/js/model/rating-tab/rating-tab'
], function(RatingTabModel) {
    describe('A model', function(){
        it('should have certain defaults', function(){
            var ratingTab = new RatingTabModel();
            expect(ratingTab.get('name')).toBe('test');
        })
    });
});
