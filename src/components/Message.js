export default function Message ({msgHead, msg, btnMsg, toggle}){
	return (
		<div id="container">
			<div id="message">
				<p>{msgHead}</p>
				<p>{msg}</p>
				<button onClick={toggle}>{btnMsg}</button>
			</div>
		</div>
	)
};