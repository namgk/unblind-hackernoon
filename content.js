const blindinglyGreenClassNamesTopBar = 'u-tintBgColor'
const blindinglyGreenClassNames = 'metabar u-clearfix js-metabar u-textColorDarker u-fixed u-backgroundTransparentWhiteDarkest u-xs-sizeFullViewportWidth u-tintBgColor u-tintSpectrum'

const killBlindinglyGreen = () => {
	const blindinglyGreenTopBar = document.getElementsByClassName(blindinglyGreenClassNamesTopBar)[0]
	const blindinglyGreen = document.getElementsByClassName(blindinglyGreenClassNames)[0]
	
	if (blindinglyGreen){
		blindinglyGreen.remove()
	}

	if (blindinglyGreenTopBar){
		blindinglyGreenTopBar.remove()
	}

	if (!blindinglyGreen && !blindinglyGreenTopBar){
		console.log("Blindingly Green Killed!")
		clearInterval(blindinglyGreenChecker)
		return true;
	}

	return false
}

const notifyBrowser = (msg) => {
	chrome.runtime.sendMessage(msg);
}

const blindinglyGreenChecker = setInterval(() => {
	console.log("Trying to kill Blindingly Green!")
	if (killBlindinglyGreen()){
		notifyBrowser({blindinglyGreen: "killed!!"})
	}
}, 500)