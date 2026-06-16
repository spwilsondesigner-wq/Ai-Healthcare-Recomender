import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, FileText, Shield, TrendingUp } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Badge } from "./ui/badge";

export function DocumentComparison() {
  const navigate = useNavigate();
  const { state } = useAppContext();

  const handleProceed = () => {
    navigate("/processing");
  };

  const maskedFields = [
    { field: "Patient Name", status: "Masked", confidence: 99.2 },
    { field: "SSN", status: "Masked", confidence: 100 },
    { field: "Contact Info", status: "Masked", confidence: 98.5 },
    { field: "Provider Details", status: "Masked", confidence: 97.8 },
    { field: "Medical Data", status: "Preserved", confidence: 100 },
  ];

  // Function to highlight redacted text
  const highlightRedacted = (text: string) => {
    if (!text) return null;
    
    // Split text by [REDACTED], [*-REDACTED] patterns
    const parts = text.split(/(\[[\w-]*REDACTED\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/\[[\w-]*REDACTED\]/)) {
        return (
          <span
            key={index}
            className="bg-red-100 text-red-700 font-semibold px-1 rounded border border-red-300"
          >
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Step 3: Document Comparison
        </h2>
        <p className="text-slate-600">
          Review original and masked documents side by side
        </p>
      </div>

      {/* Combined Confidence & Masking Summary */}
      <Card className="p-5 mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                {state.confidenceScore || 94.7}%
              </h3>
              <p className="text-sm text-slate-600">Overall Masking Confidence</p>
            </div>
          </div>
          <Badge className="bg-green-600 text-white px-4 py-2 text-sm">
            High Confidence
          </Badge>
        </div>
        
        {/* Compact Masking Summary Pills */}
        <div className="flex flex-wrap gap-2.5">
          {maskedFields.map((item) => (
            <div
              key={item.field}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-lg border border-green-200 shadow-sm"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item.status === "Masked" ? "bg-green-500" : "bg-blue-500"
                }`}
              />
              <span className="text-sm font-medium text-slate-900">{item.field}</span>
              <Badge
                variant="outline"
                className={`text-xs ${
                  item.status === "Masked"
                    ? "border-green-600 text-green-700"
                    : "border-blue-600 text-blue-700"
                }`}
              >
                {item.status}
              </Badge>
              <span className="text-xs text-slate-600 font-medium">
                {item.confidence}%
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Side-by-Side Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Original Document */}
        <Card className="bg-white border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
            <FileText className="w-6 h-6" />
            <h3 className="font-semibold text-lg">Original Document</h3>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-xs leading-relaxed max-h-[600px] overflow-y-auto border border-slate-200">
              <pre className="whitespace-pre-wrap">
                {state.originalDocument || "Loading original document..."}
              </pre>
            </div>
          </div>
        </Card>

        {/* Masked Document */}
        <Card className="bg-white border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white p-4 flex items-center gap-3">
            <Shield className="w-6 h-6" />
            <h3 className="font-semibold text-lg">Masked Document</h3>
          </div>
          <div className="p-6">
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-xs leading-relaxed max-h-[600px] overflow-y-auto border border-slate-200">
              <pre className="whitespace-pre-wrap">
                {state.maskedDocument 
                  ? highlightRedacted(state.maskedDocument)
                  : "Loading masked document..."}
              </pre>
            </div>
          </div>
        </Card>
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleProceed}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
        >
          Proceed to AI Analysis
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}