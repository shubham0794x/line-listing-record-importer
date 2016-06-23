function displayMatchForm()
{
	var list = document.getElementById( "objects" );
	
	var id = list.options[ list.selectedIndex ].value;
	
	var type = document.getElementById( "type" ).value;
	
	window.location.href = "displayMatchForm.action?objectType=" + type + "&objectId=" + id;
}

function displayCompareForm()
{
	var list = document.getElementById( "objects" );
	
	var id = list.options[ list.selectedIndex ].value;
	
	var type = document.getElementById( "type" ).value;
	
	window.location.href = "displayCompareForm.action?objectType=" + type + "&objectId=" + id;
}
// -------------------------------------------------------------------------
// Supportive methods
// -------------------------------------------------------------------------

function handleField( discardedElements, spanName, tdName )
{
	var existingElements = document.getElementById( spanName ).innerHTML;
			
	existingElements = existingElements - discardedElements;
	
	if ( existingElements > 0 )
	{
		document.getElementById( spanName ).innerHTML = existingElements;
	}
	else
	{
		clearField( tdName );
	}
}

function clearField( fieldName )
{
	if ( document.getElementById( fieldName ) != null )
	{
		document.getElementById( fieldName ).style.backgroundColor = "#FFFFFF";	
		document.getElementById( fieldName ).innerHTML = "None";
	}
}

function removeSelectedOptions( list )
{
	for ( var i = list.options.length-1; i >= 0; i-- )
	{
		if ( list.options[ i ].selected )
		{
			list.remove( i );
		}
	}
}
