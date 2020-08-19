const React = require("react");

class Show extends React.Component {
    render() {
        const vegetable = this.props.vegetable;
        return (
            <div>
                <p>NAME: {vegetable.name}</p>
                <p>isGreen?: {vegetable.isGreen ? "true" : "false"}</p>
                <a href={`/vegetables/${vegetable._id}/edit`}>Edit this</a>
            </div>
        )
    }
}

module.exports = Show;