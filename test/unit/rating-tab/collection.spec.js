define(function() {
    describe('Tests for Rating Tab Collection', function() {
        var configuration = {
            url: "ProductData.json",
            remainingCallTime: 30000
        };
        function sendRequest(callbacks, configuration) {
            $.ajax({
                url: configuration.url,
                dataType: "json",
                success: function(data) {
                    callbacks.checkForInformation(data);
                },
                error: function(data) {
                    callbacks.displayErrorMessage();
                },
                timeout: configuration.remainingCallTime
            });
        }
        it('Should make an Ajax request to the correct URL', function() {
            spyOn($, "ajax");
            sendRequest(undefined, configuration);
            expect($.ajax.mostRecentCall.args[0]["url"]).toEqual(configuration.url);
        });
    });
});