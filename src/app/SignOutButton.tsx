"use client";

function SignOutButton() {
	return (
		<div>
			<button
				onClick={() => console.log()}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Sign out
			</button>
		</div>
	);
}

export default SignOutButton;
