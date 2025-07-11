sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zmatdetails.controller.View2", {
        onInit() {
        },

        onNavBack: function(){
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView1");
        }
    });
});