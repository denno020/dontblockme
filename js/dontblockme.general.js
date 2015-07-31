dontblockme = dontblockme || {general: {}};

$(document).ready(function() {
    dontblockme.general.init();
});

dontblockme.general = {
    init: function() {
        var me = dontblockme.general;
        
        me.shuffleVPNProviders();
        
        //This is required so that the navbar will collapse after clicking on a link
        $(".navbar-nav li a").click(function() {
            $(".navbar-collapse").collapse('hide');
        });
        
        $("#add-notice").tooltip();
        
        $("#contact").on('click', '.facebookShareBtn img', me.handlerClickShareBtn);
    },
    
    /**
     * Shuffle the order of the VPN providers
     *
     * @returns {undefined}
     */
    shuffleVPNProviders: function() {
        var parent = $("#vpn-providers");
        var providers = parent.children();
        while (providers.length) {
            parent.append(providers.splice(Math.floor(Math.random() * providers.length), 1)[0]);
        }
    },
    
    /**
     * When a user clicks on the large facebook share button, in the background, trigger the normal facebook share button
     *
     * @returns {undefined}
     */
    handlerClickShareBtn: function(e) {
        e.preventDefault;
        console.debug('About to click');
        $(".fb-share-button").trigger('click');
    }
};

