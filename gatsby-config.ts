import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `vidscribr`,
		description: `A video transcription service`,
		// siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
				// The values for each key in this example are the defaults the plugin uses.
				sourceMap: true,
				autoLabel: 'dev-only',
				labelFormat: `[local]`,
				cssPropOptimization: true,
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [
					`https://fonts.googleapis.com`,
					`https://fonts.gstatic.com`,
				],
				web: [
					{
						name: `Open Sans`,
						file: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap`,
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /svgs/,
				},
			},
		},
	],
};

export default config;
