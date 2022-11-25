export default function Message ({gameType, msg, btnMsg, toggle}){
	return (
		<div id="container">
				<div id="message">
					<p>{gameType}</p>
					<p>{msg}</p>
					<button onClick={toggle}>{btnMsg}</button>
				</div>

			</div>
	)
};