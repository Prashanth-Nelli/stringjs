var $S = ( function() {
	var start = 0
		,end = 0
		,matchIndexes = []
		,strLength = 0
		,i = 0
		,inputString = '',
		$S;
	
	function contains(str) {
		return (inputString.indexOf(str.toString()) === -1) ? false : true;
	}
	
	function between(startS, endS) {
		start = inputString.indexOf(startS)+startS.length;
		end = inputString.indexOf(endS);
		return inputString.substring(start, end);
	}
	
	function replaceAll(pstr, nstr) {
		return inputString.split(pstr).join(nstr);
	}
	
	function deleteBetween(frmStr, toStr) {
		start = end = 0;
		start = inputString.indexOf(frmStr);
		end = inputString.indexOf(toStr);
		strLength = inputString.length;
		if (start < end) {
			return inputString.substring(0, start + frmStr.length) + inputString.substring(end, strLength);
		} else {
			return inputString.substring(0, end + toStr.length) + inputString.substring(start, strLength);
		}
	}
	
	function count(str){
		strLength=inputString.split(str).length;
		return (strLength%2===1)?
				strLength-(strLength%2)
				:strLength-(strLength%2+1); 
	}
	
	
	function $Str(str) {
		inputString = str;
	}
	
	
	$Str.prototype = {
		contains : contains,
		between : between,
		replaceAll : replaceAll,
		deleteBetween : deleteBetween,
		count:count
	};
	
	return function(str) {
	
		if (str !== null && str !== undefined) {
			str=(typeof str==="string")? str:
			str.toString();
			$S = new $Str(str);
			return $S;
		}else{
			throw new Error("please pass an Appropriate Arguement");
		}
	
	};

}());
