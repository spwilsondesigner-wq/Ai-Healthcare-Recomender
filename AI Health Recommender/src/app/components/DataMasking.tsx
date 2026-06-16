import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Shield, ArrowRight, Play, Loader2, CheckCircle2, Lock, Eye, FileCheck, Scan } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Progress } from "./ui/progress";

export function DataMasking() {
  const navigate = useNavigate();
  const { state, updateState } = useAppContext();
  const [isMasking, setIsMasking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [detectedPII, setDetectedPII] = useState<Array<{ type: string; count: number; status: string }>>([]);
  const hasStarted = useRef(false);

  const mockOriginalDocument = `PATIENT MEDICAL RECORD

Patient Name: John Smith
Date of Birth: 03/15/1975
SSN: 123-45-6789
Medical Record Number: MRN-2024-001234

Contact Information:
Address: 456 Oak Street, Springfield, IL 62701
Phone: (555) 123-4567
Email: john.smith@email.com

Medical History:
Chief Complaint: Patient presents with persistent headaches and dizziness over the past 3 weeks.

Vital Signs (02/18/2026):
- Blood Pressure: 140/90 mmHg
- Heart Rate: 78 bpm
- Temperature: 98.6°F
- Respiratory Rate: 16/min

Current Medications:
1. Lisinopril 10mg - Daily for hypertension
2. Metformin 500mg - Twice daily for Type 2 Diabetes
3. Aspirin 81mg - Daily

Diagnosis:
1. Essential Hypertension (ICD-10: I10)
2. Type 2 Diabetes Mellitus (ICD-10: E11.9)
3. Tension Headache (ICD-10: G44.209)

Lab Results:
- HbA1c: 7.2%
- Fasting Glucose: 142 mg/dL
- Total Cholesterol: 210 mg/dL
- LDL: 135 mg/dL
- HDL: 45 mg/dL

Treatment Plan:
1. Continue current medications
2. Recommend stress management techniques
3. Follow-up appointment in 4 weeks
4. Dietary consultation recommended

Provider: Dr. Sarah Johnson, MD
License: MD-IL-123456
Date: February 18, 2026`;

  const mockMaskedDocument = `PATIENT MEDICAL RECORD

Patient Name: [REDACTED]
Date of Birth: [DATE-REDACTED]
SSN: [SSN-REDACTED]
Medical Record Number: [MRN-REDACTED]

Contact Information:
Address: [ADDRESS-REDACTED]
Phone: [PHONE-REDACTED]
Email: [EMAIL-REDACTED]

Medical History:
Chief Complaint: Patient presents with persistent headaches and dizziness over the past 3 weeks.

Vital Signs (02/18/2026):
- Blood Pressure: 140/90 mmHg
- Heart Rate: 78 bpm
- Temperature: 98.6°F
- Respiratory Rate: 16/min

Current Medications:
1. Lisinopril 10mg - Daily for hypertension
2. Metformin 500mg - Twice daily for Type 2 Diabetes
3. Aspirin 81mg - Daily

Diagnosis:
1. Essential Hypertension (ICD-10: I10)
2. Type 2 Diabetes Mellitus (ICD-10: E11.9)
3. Tension Headache (ICD-10: G44.209)

Lab Results:
- HbA1c: 7.2%
- Fasting Glucose: 142 mg/dL
- Total Cholesterol: 210 mg/dL
- LDL: 135 mg/dL
- HDL: 45 mg/dL

Treatment Plan:
1. Continue current medications
2. Recommend stress management techniques
3. Follow-up appointment in 4 weeks
4. Dietary consultation recommended

Provider: [PROVIDER-REDACTED]
License: [LICENSE-REDACTED]
Date: February 18, 2026`;

  const handleStartMasking = useCallback(async () => {
    setIsMasking(true);
    setProgress(0);
    setDetectedPII([]);

    // Simulate PII detection phases
    const piiTypes = [
      { type: "Patient Names", count: 1, status: "Detecting..." },
      { type: "Social Security Numbers", count: 1, status: "Detecting..." },
      { type: "Contact Information", count: 3, status: "Detecting..." },
      { type: "Provider Credentials", count: 2, status: "Detecting..." },
    ];

    // Simulate detection process
    for (let i = 0; i < piiTypes.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 400));
      setDetectedPII((prev) => [...prev, piiTypes[i]]);
    }

    // Simulate masking progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsMasking(false);
          setIsComplete(true);
          
          // Update detected PII status
          setDetectedPII((prev) =>
            prev.map((item) => ({ ...item, status: "Masked" }))
          );
          
          updateState({
            originalDocument: mockOriginalDocument,
            maskedDocument: mockMaskedDocument,
            confidenceScore: 94.7,
          });
          return 100;
        }
        return prev + 3;
      });
    }, 80);
  }, [mockOriginalDocument, mockMaskedDocument, updateState]);

  // Auto-start masking when component loads
  useEffect(() => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      handleStartMasking();
    }
  }, [handleStartMasking]);

  const handleProceed = () => {
    navigate("/comparison");
  };

  const handleQuickProceed = () => {
    navigate("/processing");
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Step 2: Data Masking</h2>
        <p className="text-slate-600">
          Protect sensitive patient information with intelligent PII masking
        </p>
      </div>

      {/* Compact Info Bar */}
      <div className="mb-6 flex items-center gap-4 text-sm">
        {/* Document Info */}
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm">
          <FileCheck className="w-4 h-4 text-blue-600" />
          <span className="text-slate-500">Document:</span>
          <span className="font-semibold text-slate-900">{state.fileName || "medical-record.pdf"}</span>
        </div>

        {/* Processing Type */}
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm">
          <Scan className="w-4 h-4 text-indigo-600" />
          <span className="text-slate-500">Processing:</span>
          <span className="font-semibold text-slate-900">{state.fileType === "LLM" ? "AI-Powered" : "Rule-Based"}</span>
        </div>

        {/* Security Level */}
        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-200 shadow-sm">
          <Lock className="w-4 h-4 text-purple-600" />
          <span className="text-slate-500">Security:</span>
          <span className="font-semibold text-slate-900">HIPAA</span>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2 bg-green-50 px-4 py-2.5 rounded-lg border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="font-medium text-green-700">Ready</span>
        </div>
      </div>

      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        {/* Masking Progress */}
        {isMasking && (
          <div className="py-4 animate-in fade-in duration-500">
            <div className="text-center mb-6">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
                <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-1">
                Processing Document
              </h3>
              <p className="text-sm text-slate-600">
                AI is analyzing and masking sensitive information...
              </p>
            </div>

            {/* PII Detection Live Feed */}
            {detectedPII.length > 0 && (
              <Card className="p-4 bg-slate-50 border-slate-200 mb-4">
                <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Scan className="w-4 h-4 text-blue-600" />
                  Detected PII Elements
                </h4>
                <div className="space-y-2">
                  {detectedPII.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 animate-in slide-in-from-left duration-300"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-2 h-2 rounded-full ${item.status === "Masked" ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`} />
                        <span className="text-sm font-medium text-slate-900">{item.type}</span>
                        <span className="text-xs text-slate-500">({item.count} found)</span>
                      </div>
                      <span className={`text-xs font-medium ${item.status === "Masked" ? "text-green-600" : "text-yellow-600"}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 font-medium">Masking Progress</span>
                <span className="font-bold text-blue-600">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3 bg-slate-200" />
              <div className="flex justify-between text-xs text-slate-500">
                <span>Analyzing patterns...</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
            </div>
          </div>
        )}

        {/* Completion */}
        {isComplete && (
          <div className="animate-in fade-in duration-500">
            <div className="text-center py-6 mb-6">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Data Masking Complete
              </h3>
              <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                All sensitive patient information has been successfully identified and protected
              </p>
              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-4 rounded-xl border-2 border-green-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600 mb-0.5">94.7%</p>
                  <p className="text-xs text-slate-600">Confidence Score</p>
                </div>
                <div className="w-px h-12 bg-slate-300" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-0.5">7</p>
                  <p className="text-xs text-slate-600">Fields Masked</p>
                </div>
              </div>
            </div>

            {/* PII Summary - Compact */}
            <Card className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200 mb-6">
              <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Masking Summary
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                {detectedPII.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-slate-900">{item.type}</p>
                        <p className="text-xs text-slate-500">{item.count} instances</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                      Protected
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex justify-end gap-3">
              <Button
                onClick={handleProceed}
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8"
              >
                <Shield className="w-5 h-5 mr-2" />
                Review Changes
              </Button>
              <Button
                onClick={handleQuickProceed}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quick Proceed
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}