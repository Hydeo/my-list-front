export function getTypeSizeScreen (breakpoints, screen_width){
	if(screen_width < breakpoints.S)
		return "S";
	if(screen_width < breakpoints.M)
		return "M";
	if(screen_width < breakpoints.L)
		return "L";
	return "L";
}