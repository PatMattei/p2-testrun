const React = require('react');

class New extends React.Component {
    render() {
        return (
            <>
                <h1>New Vegetable Page</h1>
                <form action="/vegetables" method="POST">
                    Name: <input type="text" name="name" /><br />
                    Is Green?: <input type="checkbox" name="isGreen" />
                    <input type="submit" name="" value="Create Vegetable"/>
                </form>
            </>
        )
    }
}

module.exports = New;