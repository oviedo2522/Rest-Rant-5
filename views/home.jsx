const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1> REST-Rant </h1>
                <div>
                    <img src="/public/images/food-salad-cuisine-sauce-dish-vegetable-783373-wallhere.com.jpg" alt="Image" />
                    <div>
                        Photo by <a href="https://unsplash.com/photos/assorted-fruits-and-vegetable-on-brown-wooden-chopping-board-2IxTgsgFi-s">
                            Ella Olsson </a> on <a href="https://unsplash.com/"> Unsplash </a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    );
}

module.exports = home