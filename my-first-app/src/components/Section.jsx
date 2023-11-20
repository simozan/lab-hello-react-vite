import "./section.css"
function Section () {
    return (
        <section className="section">
            <div>
            <img src="./src/assets/icon1.png"/>
            <h1>Declarative</h1>
            <p>React makes it painless to create interactives UIs</p>
            </div>
            <div>
            <img src="./src/assets/icon2.png"/>
            <h1>Components</h1>
            <p>Build encapsulated components that manage theis state</p>
            </div>
            <div>
            <img src="./src/assets/icon3.png"/>
            <h1>Single-Way</h1>
            <p>A set of immutable values are passed to the component's</p>
            </div>
            <div>
            <img src="./src/assets/icon4.png"/>
            <h1>Single-Way</h1>
            <p>A set of immutable values are passed to the component's</p>
            </div>
        </section>
    )
}
export default Section