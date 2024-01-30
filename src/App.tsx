import Router from "@/shared/components/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>
    	  <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
