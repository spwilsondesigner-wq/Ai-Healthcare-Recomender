import { Outlet, useLocation } from "react-router";
import { AppProvider } from "../context/AppContext";
import { Check } from "lucide-react";

const steps = [
  { path: "/", label: "Welcome" },
  { path: "/upload", label: "File Upload" },
  { path: "/masking", label: "Data Masking" },
  { path: "/comparison", label: "Comparison" },
  { path: "/processing", label: "AI Processing" },
  { path: "/report", label: "Final Report" },
];

export function MainLayout() {
  const location = useLocation();
  const currentIndex = steps.findIndex((step) => step.path === location.pathname);

  return (
    <AppProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-slate-900">AI Health Recommender</h1>
                <p className="text-sm text-slate-600">Intelligent Medical Document Analysis System</p>
              </div>
            </div>
          </div>
        </header>

        {/* Progress Stepper */}
        {location.pathname !== "/" && (
          <div className="bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                {steps.slice(1).map((step, index) => {
                  const stepNumber = index + 1;
                  const isActive = currentIndex === stepNumber;
                  const isCompleted = currentIndex > stepNumber;

                  return (
                    <div key={step.path} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 text-sm ${
                            isCompleted
                              ? "bg-green-600 text-white"
                              : isActive
                              ? "bg-blue-600 text-white ring-2 ring-blue-100"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <span className="font-semibold text-xs">{stepNumber}</span>
                          )}
                        </div>
                        <span
                          className={`mt-1.5 text-xs font-medium transition-colors duration-300 ${
                            isActive ? "text-blue-700" : isCompleted ? "text-green-700" : "text-slate-500"
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                      {index < steps.length - 2 && (
                        <div
                          className={`flex-1 h-0.5 mx-3 transition-colors duration-300 ${
                            isCompleted ? "bg-green-600" : "bg-slate-200"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <p className="text-center text-sm text-slate-600">
              © 2026 AI Health Recommender. Confidential Medical Document Processing System.
            </p>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}