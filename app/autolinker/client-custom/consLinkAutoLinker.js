class ConsLinkAutoLinker {
	static link(message) {
		const consRegexPattern = /cons\.+([\d]+)/gim;
		message.html = message.html.replace(consRegexPattern, (match, aktId) =>
			`<a href="consxml:editakt?${ aktId }">${ match.trim() }</a>`
		);
	}
}
export default ConsLinkAutoLinker;
