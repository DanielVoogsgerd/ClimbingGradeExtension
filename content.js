HUECO = {
	'0': '4',
	'1': '5a',
	'2': '5b/5c',
	'3': '6a',
	'4': '6b',
	'5': '6c',
	'6': '7a',
	'7': '7a+',
	'8': '7b',
	'9': '7c',
	'10': '7c+',
	'11': '8a',
	'12': '8a+',
	'13': '8b',
	'14': '8b+',
	'15': '8c',
};

YDS = {
	'1': '1',
	'2': '2',
	'3': '2+',
	'4': '3',
	'5': '3+',
	'6': '4a',
	'7': '4b/4c',
	'8': '4c/5a',
	'9': '5b',
	'10a': '5c',
	'10b': '6a',
	'10c': '6a+',
	'10d': '6b',
	'11a': '6b+',
	'11b': '6c',
	'11c': '6c+',
	'11d': '7a',
	'12a': '7a+',
	'12b': '7b',
	'12c': '7b+',
	'12d': '7c',
	'13a': '7c+',
	'13b': '8a',
	'13c': '8a+',
	'13d': '8b',
	'14a': '8b+',
	'14b': '8c',
	'14c': '8c+',
	'14d': '9a',
	'15a': '9a+',
};


var elements = document.getElementsByTagName('*');

for(element of elements) {
	for(node of element.childNodes) {

		if (node.nodeType !== 3)
			continue;

		const text = node.nodeValue;
		let replacedText = text;
		replacedText = replacedText.replace(/V(\d{1,2})(?:\/(\d{1,2}))?/gi, function(match, grade, grade2) {
			if(grade in HUECO)
				return 'V' + grade + (grade2 ? '/' + grade2 : '') + ' (' + HUECO[grade] + (grade2 && grade2 in HUECO ? '/' + HUECO[grade2] : '') + ')';
			else
				return match;
		});

		replacedText = replacedText.replace(/5.(\d{1,2}[a-d]?)/gi, function(match, grade) {
			if(grade in YDS)
				return '5.' + grade + ' (' + YDS[grade] + ')';
			else
				return match;
		});

		if (replacedText !== text) {
			element.replaceChild(document.createTextNode(replacedText), node);
		}
	}
}
