"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function GlobalLoader({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		const timeout = setTimeout(() => setLoading(false), 500);
		return () => clearTimeout(timeout);
	}, [pathname]);

	return (
		<>
			{loading && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
					<Loader />
				</div>
			)}
			<div className={loading ? "pointer-events-none select-none" : ""}>
				{children}
			</div>
		</>
	);
}
