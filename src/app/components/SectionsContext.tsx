"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SectionLink {
	id: string;
	label: string;
	level?: number;
}

type SectionsContextType = {
	sections: SectionLink[];
	setSections: (s: SectionLink[]) => void;
};

const SectionsContext = createContext<SectionsContextType | undefined>(
	undefined
);

export function SectionsProvider({ children }: { children: ReactNode }) {
	const [sections, setSections] = useState<SectionLink[]>([]);

	return (
		<SectionsContext.Provider value={{ sections, setSections }}>
			{children}
		</SectionsContext.Provider>
	);
}

export function useSections() {
	const context = useContext(SectionsContext);
	if (!context) {
		throw new Error("useSections must be used within a SectionsProvider");
	}
	return context;
}
