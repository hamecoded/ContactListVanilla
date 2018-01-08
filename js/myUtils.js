export default {
	upOneCase(str) {
		str= str.toLowerCase();
		let words = str.split(' ');
		var output = "";
		for(let word of words){
			output += word.replace(/\b[a-z]/g, function(letter) {
				return letter.toUpperCase();
			}) + " ";
		}
		return output;
		
	}
};