import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import pfp from "../assets/pfp.jpg";

function Header() {
	const session = true;

	if (session)
		return (
			<header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
				<div className="flex space-x-2">
					<Image
						src={pfp}
						alt="profile picture"
						height={10}
						width={50}
						className="rounded-full mx-2 my-1 object-contain"
					/>
					<div>
						<p className="text-blue-400">Logged in as:</p>
						<p className="font-bold text-lg">An Onumos</p>
					</div>
				</div>
				<SignOutButton />
			</header>
		);

	return (
		<header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
			<div className="flex flex-col items-center space-y-5">
				<div className="flex space-x-2 items-center">
					<Image
						src="https://links.papareact.com/jne"
						alt="logo"
						height={10}
						width={50}
					/>
					<p className="text-blue-400">Welcome to Meta Messenger!</p>
				</div>
				<Link
					href="/auth/signin"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Sign in
				</Link>
			</div>
		</header>
	);
}

export default Header;
function retun(arg0: JSX.Element) {
	throw new Error("Function not implemented.");
}
