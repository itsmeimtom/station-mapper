// taken from https://github.com/itsmeimtom/speedtestdotnetcsvmap
function loadFile(e) {
	// https://usefulangle.com/post/193/javascript-read-local-file
	let file = e.files[0];

	let r = new FileReader();

	// file reading started
	r.addEventListener('loadstart', function () {
		console.info('reading file');
	});

	// file reading finished successfully
	r.addEventListener('load', function (read) {
		console.info('read file, processing');

		// contents of file in variable
		parseLines(read.target.result);
	});

	// file reading failed
	r.addEventListener('error', function () {
		return alert('error reading file, refresh and try again');
	});

	// file read progress 
	r.addEventListener('progress', function (e) {
		if (e.lengthComputable == true) {
			let pcRead = Math.floor((e.loaded / e.total) * 100);
			console.info(`reading file: ${pcRead}%`);
		}
	});

	r.readAsText(file);
}