sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("zmatdetails.controller.View1", {
        onInit() {
        },
        onPressView2: function () {

            
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.navTo("RouteView2");
        }
    });
});