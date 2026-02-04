import { Link } from "wouter";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-6xl md:text-7xl text-ora-taupe mb-4">404</h1>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-ora-fog mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get
            you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button
                data-testid="button-back-home"
                className="bg-ora-taupe text-white hover:bg-ora-fog px-6"
              >
                <Home size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-ora-smoke text-ora-fog hover:bg-ora-bone px-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
