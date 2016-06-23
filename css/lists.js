
// -------------------------------------------------------------------------
// Data retrieval methods
// -------------------------------------------------------------------------

function getDataElements()
{
	var dataElementGroupList = document.getElementById( "dataElementGroupId" );
	var dataElementGroupId = dataElementGroupList.options[ dataElementGroupList.selectedIndex ].value;
	
	if ( dataElementGroupId != null )
	{
		$.post("../dhis-web-commons-ajax/getDataElements.action",
		{
			id :dataElementGroupId,
			aggregate : "true"
		},
		function (data)
		{
			getDataElementsReceived(data);
		},'xml');
	}
}

function getDataElementsReceived( xmlObject )
{   
    var availableDataElements = document.getElementById( "availableDataElements" );
    var selectedDataElements = document.getElementById( "selectedDataElements" );
    
    clearList( availableDataElements );
    
    var dataElements = xmlObject.getElementsByTagName( "dataElement" );
    
    for ( var i = 0; i < dataElements.length; i++ )
    {
        var id = dataElements[ i ].getElementsByTagName( "id" )[0].firstChild.nodeValue;
        var dataElementName = dataElements[ i ].getElementsByTagName( "name" )[0].firstChild.nodeValue;
        
        if ( listContains( selectedDataElements, id ) == false )
        {               
            var option = document.createElement( "option" );
            option.value = id;
            option.text = dataElementName;
            availableDataElements.add( option, null );
        }
    }
}

function getCategoryComboDataElements()
{
    var categoryComboList = document.getElementById( "categoryComboId" );
    var categoryComboId = categoryComboList.options[ categoryComboList.selectedIndex ].value;
    
    if ( categoryComboId != null )
    {
		$.post("../dhis-web-commons-ajax/getDataElements.action",
		{
			categoryComboId :categoryComboId,
			aggregate : "true"
		},
		function (data)
		{
			getCategoryComboDataElementsReceived(data);
		},'xml');
    }
}

function getCategoryComboDataElementsReceived( xmlObject )
{   
    var availableDataElements = document.getElementById( "availableDataElements" );
    var selectedDataElements = document.getElementById( "selectedDataElements" );
    
    clearList( availableDataElements );
    clearList( selectedDataElements );
    
    var dataElements = xmlObject.getElementsByTagName( "dataElement" );
    
    for ( var i = 0; i < dataElements.length; i++ )
    {
        var id = dataElements[ i ].getElementsByTagName( "id" )[0].firstChild.nodeValue;
        var dataElementName = dataElements[ i ].getElementsByTagName( "name" )[0].firstChild.nodeValue;
        
        var option = document.createElement( "option" );
        option.value = id;
        option.text = dataElementName;
        availableDataElements.add( option, null );
    }
}
