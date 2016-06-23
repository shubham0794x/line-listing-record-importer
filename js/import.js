
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
function discardObjectCallback( xmlElement )
{
	var type = xmlElement.getAttribute( "type" );
    var discardedElements = xmlElement.firstChild.nodeValue;
    
    var elementType = document.getElementById( "type" ).value;
	var elementStatus = document.getElementById( "status" ).value;
	
	if ( type == "success" )
    {
    	if ( elementType == "CONSTANT" && elementStatus == "NEW" )
		{
			handleField( discardedElements, "newConstantSpan", "newConstantTd" );
		}
    	else if ( elementType == "CONSTANT" && elementStatus == "UPDATE" )
		{
			handleField( discardedElements, "updateConstantSpan", "updateConstantTd" );
		}
		else if ( elementType == "DATAELEMENT" && elementStatus == "NEW" )
		{
			handleField( discardedElements, "newDataElementSpan", "newDataElementTd" );
		}
    	else if ( elementType == "DATAELEMENT" && elementStatus == "UPDATE" )
		{
			handleField( discardedElements, "updateDataElementSpan", "updateDataElementTd" );
		}
		
function discardObjectsOfTypeCallback( xmlElement )
{
	var type = xmlElement.getAttribute( "type" );
	
	var elementType = document.getElementById( "type" ).value;
		
	if ( type == "success" )
	{
		// Set value count to none
		
		if ( elementType == "CONSTANT" )
		{
			clearField( "newConstantTd" );
			clearField( "updateConstantTd" );
		}
		else if ( elementType == "DATAELEMENT" )
		{
			clearField( "newDataElementTd" );
			clearField( "updateDataElementTd" );
			clearField( "newIndicatorTd" );
			clearField( "updateIndicatorTd" );
		}
