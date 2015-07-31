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
        
        //Hack to hopefully stop the navbar from staying expanded when the page loads
        $(window).scrollTop($(window).scrollTop()+1);
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
    }
};

