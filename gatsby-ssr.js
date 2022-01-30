const React = require("react");

const HeadComponents = [
	<script
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6691816550079346"
		crossOrigin="anonymous"
		async
	/>,
];

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
	setHeadComponents(HeadComponents);
};