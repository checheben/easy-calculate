function calculate_median(arr) {
	var arr1 = [];
	var returnV = 0;
	var len = 0;
	arr = arr.sort(function(a,b){return a-b;});
	for(var i=0; i<arr.length; i++){
		if(i%2){
			arr1.push(arr[i]);
		}
	}
	len = arr1.length;
	if(len%2){
		returnV = arr1[Math.floor(len/2)];
	}else{
		returnV = (arr1[len/2-1] + arr1[len/2])/2;
	}
	return returnV;
}

module.exports = calculate_median;
