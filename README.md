<h1 align="center">Welcome to the [Your Town Here] Small Business Support Gatsby Template 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/house-of-giants/small-biz-support#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/house-of-giants/house-of-giants/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/house-of-giants/house-of-giants/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/magnificode" target="_blank">
    <img alt="Twitter: magnificode" src="https://img.shields.io/twitter/follow/magnificode.svg?style=social" />
  </a>
</p>

> A Gatsby Theme with Prettier, Styled Components and an Airtable connection. Built to help list your town's small businesses, and ways customers can help keep them afloat during difficult times.

## Install

```sh
git clone your_project git@github.com:house-of-giants/small-biz-support.git
cd your_project
npm install
```

## Development
In the root of the project, run the following to begin developing locally:

```sh
  npm run develop
```

This command runs `gatsby develop` and will start a server on `localhost:8000` for you to play around with.

## Customizing the template for your town / city / neighborhood

This theme is intended for use on a local level. It all starts with a free [Airtable Database](http://airtable.com/). This database will house all the listings for the businesses in your area that could use a helping hand during tough times. Here's the [database setup](https://airtable.com/shrOz63EBaqXFBUVy) I use for Denver. Feel free to use this exact layout, or expand on it! The basic info includes the business name, an online ordering URL, gift card URL (really any URL that can help drive business), phone number, address, and who submitted the listing.

Be sure to copy the `.env.example` to `.env.development` and `.env.production` and add your Airtable API key and the Base ID. More info on how to find that on [Airtable's documentation](https://airtable.com/api)

You can leverage your community by allowing folks to submit businesses as well! Simply add a "Form View" to your Airtable Database and you should be set.

**Note that if you do change the name, or layout of your Airtable database, those changes will need to be reflected in the GraphQL queries in the `./src/components/Listings/Listings.js` and `./src/components/Listings/ListingItem.js` components**

As far as customizing colors, fonts, and your city. Start by editing the data in `gatsby-config.js` in the root of this theme.

```js
siteMetadata: {
  city: 'Denver',
  defaultTitle: `%s Small Biz Support`,
  defaultTitleTemplate: "%s | Denver Small Biz Support",
  airtableSubmit: "https://airtable.com/shrnYhzKkorYu4OKm",
}
```

The City name is pulled into the template dynamically, chaning it here should change it throughout the site. Additionally, the link that you offer your community to submit listings can be added here, and is dynamically placed in the theme.

### Colors and Fonts

All colors are defined in the `./src/styles/base/variables.js` file. Feel free to rename and update the color scheme. The `bg` `headline` `text` `buttonBg` `highlight` and `buttonText` variables that are defined are what is used within the component files. Don't forget to make sure that the colors you choose follow proper contrast ratio guidelines. You can check that using a tool called [Colorable](https://colorable.jxnblk.com/) if you like.

Fonts are sourced from Google Fonts. To change the imported fonts, head over to the `./src/theme/Head.js` file. Here you'll find the `<link>` responsible for the Google Font embeds. Be sure to update the `headerFont` and `bodyFont` variables in `./src/styles/base/variables.js` as well.

## Author

👤 **Dominic Magnifico**

Please feel free to reach out to me with any questions or concerns about this repo!

- Twitter: [@magnificode](https://twitter.com/magnificode)
- Github: [@magnificode](https://github.com/magnificode)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/house-of-giants/small-biz-support/issues).

## 📝 License

This project is [MIT](https://github.com/house-of-giants/house-of-giants/blob/master/LICENSE) licensed.
