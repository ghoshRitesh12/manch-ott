import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "@/shared/components/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
