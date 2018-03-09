import React from 'react';
import NextDocument, {Head, Main, NextScript} from 'next/document';

import stylesheet from 'styles/index.css';

export default class Document extends NextDocument {
	render() {
		return (
			<html>
				<Head>
					<style dangerouslySetInnerHTML={{__html: stylesheet}}/>
					<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				</Head>
				<body className="sans-serif near-black">
					<Main/>
					<NextScript/>
				</body>
			</html>
		);
	}
}
