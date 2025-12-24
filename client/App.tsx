import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import ArticleReader from "./pages/ArticleReader";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateArticle from "./pages/CreateArticle";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleReader />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateArticle />} />
          <Route 
            path="/category" 
            element={
              <Placeholder 
                title="Categories" 
                description="Browse articles by category" 
              />
            } 
          />
          <Route 
            path="/help" 
            element={
              <Placeholder 
                title="Help Center" 
                description="Find answers to your questions" 
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <Placeholder 
                title="About ReadX" 
                description="Learn more about our mission" 
              />
            } 
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
