import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight, Shield, FileCheck, Brain, FileText, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

export function Welcome() {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileCheck,
      title: "Document Classification",
      description: "Intelligent classification of medical documents for LLM or Non-LLM processing",
    },
    {
      icon: Shield,
      title: "Data Masking",
      description: "Advanced PII protection with confidence scoring and validation",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "State-of-the-art AI-powered health recommendations and insights",
    },
    {
      icon: FileText,
      title: "Professional Reports",
      description: "Comprehensive, doctor-friendly reports with actionable insights",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Next-Generation Medical AI</span>
        </div>
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Welcome to AI Health Recommender
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Advanced medical document analysis system powered by artificial intelligence.
          Secure, intelligent, and designed for healthcare professionals.
        </p>
        <Button
          size="lg"
          onClick={() => navigate("/upload")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="p-6 bg-white hover:shadow-lg transition-shadow duration-300 border-slate-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}