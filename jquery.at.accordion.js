(function($){
    $.fn.ATAccordion = function(options){
	var
	settings = $.extend({
	    iconType: 'plusminus'
	}, options),
	$icon,
	$dropdownmenu,
	openedSymbol,
	closedSymbol,
	$neighbors;
	
	if(settings.iconType=='chevronupdown'){
	    openedSymbol='fa-chevron-down';
	    closedSymbol='fa-chevron-up';
	}
	else if(settings.iconType=='plusminus'){
	    openedSymbol='fa-plus-circle';
	    closedSymbol='fa-minus-circle';
	}
	else if(settings.iconType=='angleupdown'){
	    openedSymbol='fa-angle-down';
	    closedSymbol='fa-angle-up';
	}
	else if(settings.iconType=='caretupdown'){
	    openedSymbol='fa-caret-down';
	    closedSymbol='fa-caret-up';
	}
	else if(settings.iconType=='caretrightdown'){
	    openedSymbol='fa-caret-right';
	    closedSymbol='fa-caret-down';
	}
	else{
	    throw new Error('ATAccordion plugin error: iconType argument restricted to: "plusminus", "angleupdown", "chevronupdown" or "caretupdown"');
	}

	this
	    .off('click')
	    .on('click', function(e) {
		//0. set variables
		$icon=$(this).find('i');
		$neighbors=$(this).parent().siblings(),
		$dropdownmenu=$(this).next();
		//1. switches icons accordingly
		if($icon.hasClass(openedSymbol)){
		    $icon.removeClass(openedSymbol).addClass(closedSymbol);
		}
		else if($icon.hasClass(closedSymbol)){
		    $icon.removeClass(closedSymbol).addClass(openedSymbol);
		}
		//2. fold/unfold current dropdown menu
		$dropdownmenu.slideToggle();
		//3. unfold neightbors if applicable
		
		$neighbors.each(function(){
		    var $openedDropdownMenu=$(this).find('.dropdown-menu');
		    var $openedDropdownMenuIcon=$openedDropdownMenu.prev().find('i')
		    if($openedDropdownMenu.css('display')=='block'){
			$openedDropdownMenu.slideUp();
			if($openedDropdownMenuIcon.hasClass(openedSymbol)){
		    	    $openedDropdownMenuIcon.removeClass(openedSymbol).addClass(closedSymbol);
			}
			else if($openedDropdownMenuIcon.hasClass(closedSymbol)){
		    	    $openedDropdownMenuIcon.removeClass(closedSymbol).addClass(openedSymbol);
			}
		    }
		});
	    });
	return this;
    };
}(jQuery));
