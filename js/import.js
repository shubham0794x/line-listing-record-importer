
// -------------------------------------------------------------------------
// Import
// -------------------------------------------------------------------------

function showAdvancedOptions()
{
	var optionDiv = document.getElementById( "optionDiv" );
	
	optionDiv.style.display = "block";
	
	var optionButton = document.getElementById( "optionButton" );
	
	optionButton.setAttribute( "onclick", "hideAdvancedOptions()" );

}

function hideAdvancedOptions()
{
	var optionDiv = document.getElementById( "optionDiv" );
	
	optionDiv.style.display = "none";
	
	var optionButton = document.getElementById( "optionButton" );
	
	optionButton.setAttribute( "onclick", "showAdvancedOptions()" );

}

function discardObjectAjax()
{
	var objects = document.getElementById( "objects" );
	
	var params = "";
	
	for ( var i = 0; i < objects.options.length; i++ )
	{
		if ( objects.options[ i ].selected )
		{
			params += "id=" + objects.options[ i ].value + "&";
		}
	}
	
	var url = "discardObjectAjax.action";
			
	var request = new Request();
	request.sendAsPost( params );
    request.setResponseTypeXML( 'message' );	    
    request.setCallbackSuccess( discardObjectCallback );
    request.send( url );
}
