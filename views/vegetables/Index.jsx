const React = require("react");
class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
	return (
		<>
			<h1>Vegetables Index Page</h1>
			{vegetables.map((vegetable) => {
				return (
					<div key={vegetable._id}>
						<p>{vegetable.name}</p>
						<p>Is green?: {vegetable.isGreen ? "true" : "false"}</p>
						<a href={`/vegetables/${vegetable._id}`}>Edit</a>
						<form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
							<input type="submit" value="Delet3 This" />
						</form>
						<hr />
					</div>
				);
			})}
		</>
	)}
}
module.exports = Index;