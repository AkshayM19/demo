sap.ui.jsfragment("demofragment.demofragment.controller.demo", {
	
	createContent : function (oController){
		
	   	var oItemTemplate = new sap.m.StandardListItem({
			title: "{list>Name}",
			active: true
			});
			
	   var oSelectDialog = new sap.m.SelectDialog({
	   	
	   	title: "Animals",
	   	type: "Active",
	   	liveChange: [oController.liveChange,oController]
	   });
	   
	   oSelectDialog.bindAggregation("items","list>/names",oItemTemplate);
	   
	   return oSelectDialog;
	   

	}
	
});

