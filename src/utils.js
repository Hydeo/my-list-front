export function getTypeSizeScreen (breakpoints, screen_width){
	if(screen_width < breakpoints.S)
		return "S";
	if(screen_width < breakpoints.M)
		return "M";
	if(screen_width < breakpoints.L)
		return "L";
	return "L";
}

export function calculateIsotopeItemWidth (nb_item,gutter_size){
	var nb_gutters = nb_item-1;
	var item_width = (100 - (nb_gutters * gutter_size)) / nb_item;
	return item_width;
}
