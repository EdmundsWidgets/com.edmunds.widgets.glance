define(function() {
    describe('A model', function(){
        it('should be incrementing in value', function(){
            var counter = 0;
            counter++;
            expect(counter).toEqual(1);
        });
    });
});
