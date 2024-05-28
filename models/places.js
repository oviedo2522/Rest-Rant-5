const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

places = [{
	name: 'H-Thai-ML',
	city: 'Seattle',
	state: 'WA',
	cuisines: 'Thai, Pan-Asian',
	pic: '/public/images/food-salad-cuisine-sauce-dish-vegetable-783373-wallhere.com.jpg',
	pic:'https://wallhere.com/en/wallpaper/783373'
    }, {
	name: 'Coding Cat Cafe',
	city: 'Phoenix',
	state: 'AZ',
	cuisines: 'Coffee, Bakery',
	pic: '/public/images/coffee-1716263173501-4644.jpg',
	pic: 'https://wallup.net/coffee-coffee-beans-cup/'
	
}]

module.exports = places;