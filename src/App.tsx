import { SWRConfig, SWRConfiguration } from "swr";
import Router from "@/shared/components/Router";

function App() {
	const swrConfig: SWRConfiguration = {
		errorRetryCount: 3,
		suspense: true,
	};

	return (
		<SWRConfig value={swrConfig}>
			<div>
				<Router />
			</div>
		</SWRConfig>
	);
}

export default App;
