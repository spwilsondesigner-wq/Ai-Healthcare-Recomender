import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  FileText,
  Download,
  Share2,
  RotateCcw,
  AlertCircle,
  TrendingUp,
  Activity,
  Heart,
  Pill,
  Users,
  Calendar,
  BookOpen,
  Target,
  AlertTriangle,
  CheckCircle2,
  Clock,
  LayoutList,
  Navigation,
  ChevronDown,
  ChevronUp,
  Maximize2,
} from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { useState, useRef, useEffect } from "react";

// Reusable content components
function PrimaryFindings() {
  return (
    <div className="space-y-4">
      {/* Cardiovascular Health - Compact */}
      <Card className="p-4 bg-white border-l-4 border-l-red-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-slate-900">Cardiovascular Health</h4>
              <Badge variant="destructive" className="text-xs">High Priority</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="flex items-center gap-2 bg-slate-50 rounded px-3 py-2">
                <div>
                  <p className="text-xs text-slate-600">Blood Pressure</p>
                  <p className="text-lg font-bold text-red-600">140/90</p>
                </div>
                <span className="text-xs text-slate-500">Stage 1 HTN</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 rounded px-3 py-2">
                <div>
                  <p className="text-xs text-slate-600">Treatment</p>
                  <p className="text-sm font-semibold text-slate-900">Lisinopril 10mg</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-900 mb-2">Top Recommendations:</p>
              <div className="space-y-1 text-xs text-blue-800">
                <p>• Titrate Lisinopril to 20mg daily</p>
                <p>• Monitor BP twice daily for 2 weeks</p>
                <p>• Implement DASH diet, Target: &lt;130/80 mmHg</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Metabolic Health - Compact */}
      <Card className="p-4 bg-white border-l-4 border-l-orange-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Activity className="w-5 h-5 text-orange-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-slate-900">Metabolic Health (Type 2 Diabetes)</h4>
              <Badge className="bg-orange-500 text-xs">High Priority</Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-slate-50 rounded px-3 py-2">
                <p className="text-xs text-slate-600">HbA1c</p>
                <p className="text-lg font-bold text-orange-600">7.2%</p>
                <p className="text-xs text-slate-500">Target &lt;7.0%</p>
              </div>
              <div className="bg-slate-50 rounded px-3 py-2">
                <p className="text-xs text-slate-600">FG</p>
                <p className="text-lg font-bold text-orange-600">142</p>
                <p className="text-xs text-slate-500">Target 80-130</p>
              </div>
              <div className="bg-slate-50 rounded px-3 py-2">
                <p className="text-xs text-slate-600">Current</p>
                <p className="text-sm font-semibold text-slate-900">Metformin</p>
                <p className="text-xs text-slate-500">500mg BID</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-900 mb-2">Top Recommendations:</p>
              <div className="space-y-1 text-xs text-blue-800">
                <p>• Increase Metformin to 1000mg BID</p>
                <p>• Add SGLT2 inhibitor (Empagliflozin 10mg)</p>
                <p>• CGM evaluation, dietary consultation</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Lipid Management - Compact */}
      <Card className="p-4 bg-white border-l-4 border-l-yellow-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-yellow-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-slate-900">Lipid Management</h4>
              <Badge className="bg-yellow-500 text-xs">Medium Priority</Badge>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-slate-50 rounded px-3 py-2">
                <p className="text-xs text-slate-600">Total Chol</p>
                <p className="text-base font-bold text-yellow-600">210</p>
              </div>
              <div className="bg-slate-50 rounded px-3 py-2">
                <p className="text-xs text-slate-600">LDL</p>
                <p className="text-base font-bold text-yellow-600">135</p>
                <p className="text-xs text-slate-500">Target &lt;100</p>
              </div>
              <div className="bg-slate-50 rounded px-3 py-2">
                <p className="text-xs text-slate-600">HDL</p>
                <p className="text-base font-bold text-yellow-600">45</p>
                <p className="text-xs text-slate-500">Low</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-900 mb-2">Top Recommendations:</p>
              <div className="space-y-1 text-xs text-blue-800">
                <p>• Initiate Atorvastatin 20mg daily</p>
                <p>• Omega-3 supplementation, increase physical activity</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Neurological - Compact */}
      <Card className="p-4 bg-white border-l-4 border-l-blue-500">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Activity className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-bold text-slate-900">Neurological Concerns</h4>
              <Badge className="bg-blue-500 text-xs">Monitoring</Badge>
            </div>
            
            <div className="bg-slate-50 rounded px-3 py-2 mb-2">
              <p className="text-sm text-slate-900"><span className="font-semibold">Chief Complaint:</span> Persistent headaches (3 weeks), dizziness</p>
              <p className="text-xs text-slate-600 mt-1">Diagnosis: Tension Headache</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-xs font-semibold text-blue-900 mb-2">Top Recommendations:</p>
              <div className="space-y-1 text-xs text-blue-800">
                <p>• Rule out BP-related causes, stress management techniques</p>
                <p>• Consider CT/MRI if symptoms persist beyond 4 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function LifestyleRecommendations() {
  return (
    <Card className="p-6 bg-white border-slate-200">
      <h4 className="text-xl font-bold text-slate-900 mb-4">Lifestyle Interventions</h4>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">🥗</span>
            </div>
            <h5 className="font-semibold text-slate-900">Nutrition</h5>
          </div>
          <ul className="space-y-2 ml-10 text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />
              <span>DASH diet implementation for blood pressure control</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />
              <span>Carbohydrate counting and glycemic index awareness</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />
              <span>Sodium restriction: &lt;2,300mg daily</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />
              <span>Increase fiber intake to 25-30g daily</span>
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">🏃</span>
            </div>
            <h5 className="font-semibold text-slate-900">Physical Activity</h5>
          </div>
          <ul className="space-y-2 ml-10 text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1" />
              <span>Minimum 150 minutes moderate-intensity exercise weekly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1" />
              <span>Combination of aerobic and resistance training</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1" />
              <span>Daily 30-minute walks recommended</span>
            </li>
          </ul>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-lg">🧘</span>
            </div>
            <h5 className="font-semibold text-slate-900">Stress Management</h5>
          </div>
          <ul className="space-y-2 ml-10 text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1" />
              <span>Mindfulness meditation: 10-15 minutes daily</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1" />
              <span>Progressive muscle relaxation techniques</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1" />
              <span>Adequate sleep: 7-8 hours nightly</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
}

function SpecialistReferrals() {
  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
      <div className="flex items-center gap-3 mb-4">
        <Users className="w-6 h-6 text-blue-600" />
        <h4 className="text-xl font-bold text-slate-900">Recommended Specialist Consultations</h4>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-900 mb-1">Endocrinology</p>
          <p className="text-sm text-slate-600">Diabetes optimization and management</p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-900 mb-1">Cardiology</p>
          <p className="text-sm text-slate-600">Cardiovascular risk stratification</p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-900 mb-1">Registered Dietitian</p>
          <p className="text-sm text-slate-600">Medical nutrition therapy</p>
        </div>
        <div className="p-4 bg-white rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-900 mb-1">Neurology</p>
          <p className="text-sm text-slate-600">If headaches persist beyond 4 weeks</p>
        </div>
      </div>
    </Card>
  );
}

function MedicationPlan() {
  return (
    <Card className="p-6 bg-white border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <Pill className="w-6 h-6 text-purple-600" />
        <h4 className="text-xl font-bold text-slate-900">Medication Optimization Plan</h4>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-blue-50 border-l-4 border-l-blue-600 rounded">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-900">Lisinopril</p>
            <Badge className="bg-yellow-500">Dosage Increase</Badge>
          </div>
          <p className="text-sm text-slate-700 mb-2">
            <span className="font-medium">Current:</span> 10mg daily → <span className="font-medium">Proposed:</span> 20mg daily
          </p>
          <p className="text-sm text-slate-600">For improved blood pressure control per ACC/AHA guidelines</p>
        </div>

        <div className="p-4 bg-blue-50 border-l-4 border-l-blue-600 rounded">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-900">Metformin</p>
            <Badge className="bg-yellow-500">Dosage Increase</Badge>
          </div>
          <p className="text-sm text-slate-700 mb-2">
            <span className="font-medium">Current:</span> 500mg BID → <span className="font-medium">Proposed:</span> 1000mg BID
          </p>
          <p className="text-sm text-slate-600">Enhanced glycemic control for Type 2 Diabetes management</p>
        </div>

        <div className="p-4 bg-green-50 border-l-4 border-l-green-600 rounded">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-900">Empagliflozin</p>
            <Badge className="bg-green-600">New Medication</Badge>
          </div>
          <p className="text-sm text-slate-700 mb-2">
            <span className="font-medium">Proposed:</span> 10mg daily
          </p>
          <p className="text-sm text-slate-600">SGLT2 inhibitor for additional diabetes control and cardiovascular benefit</p>
        </div>

        <div className="p-4 bg-green-50 border-l-4 border-l-green-600 rounded">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-900">Atorvastatin</p>
            <Badge className="bg-green-600">New Medication</Badge>
          </div>
          <p className="text-sm text-slate-700 mb-2">
            <span className="font-medium">Proposed:</span> 20mg daily
          </p>
          <p className="text-sm text-slate-600">Statin therapy for LDL cholesterol reduction</p>
        </div>

        <div className="p-4 bg-slate-50 border-l-4 border-l-slate-400 rounded">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-slate-900">Aspirin</p>
            <Badge variant="outline">Continue Current</Badge>
          </div>
          <p className="text-sm text-slate-700 mb-2">
            <span className="font-medium">Current:</span> 81mg daily
          </p>
          <p className="text-sm text-slate-600">Cardiovascular protection - continue as prescribed</p>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900 mb-2">Monitoring Requirements</p>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>• Blood pressure: Twice daily for 2 weeks, then weekly</li>
              <li>• Blood glucose: Fasting and 2-hour postprandial daily</li>
              <li>• HbA1c: Repeat in 3 months</li>
              <li>• Comprehensive metabolic panel: 6 weeks (renal function monitoring)</li>
              <li>• Lipid panel: 6 weeks post-statin initiation</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}

function FollowUpPlan() {
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-blue-600" />
          <h4 className="text-xl font-bold text-slate-900">Follow-up Schedule</h4>
        </div>

        <div className="space-y-4">
          <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -ml-[9px]" />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-blue-900">2 Weeks</p>
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Blood pressure check and assessment</li>
                <li>• Medication tolerance evaluation</li>
                <li>• Headache symptom follow-up</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 pb-8 border-l-2 border-purple-200">
            <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full -ml-[9px]" />
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-purple-900">6 Weeks</p>
                <Clock className="w-4 h-4 text-purple-600" />
              </div>
              <ul className="space-y-1 text-sm text-purple-800">
                <li>• Comprehensive metabolic panel (renal function)</li>
                <li>• Lipid panel post-statin initiation</li>
                <li>• Medication efficacy review</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 pb-8 border-l-2 border-green-200">
            <div className="absolute left-0 top-0 w-4 h-4 bg-green-600 rounded-full -ml-[9px]" />
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-green-900">3 Months</p>
                <Clock className="w-4 h-4 text-green-600" />
              </div>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• HbA1c recheck for diabetes control assessment</li>
                <li>• Comprehensive visit with full assessment</li>
                <li>• Treatment plan adjustment based on results</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-4 h-4 bg-orange-600 rounded-full -ml-[9px]" />
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-orange-900">6 Months</p>
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <ul className="space-y-1 text-sm text-orange-800">
                <li>• Full cardiovascular risk reassessment</li>
                <li>• Annual diabetic complications screening</li>
                <li>• Long-term treatment strategy review</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Clinical Decision Support */}
      <Card className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
        <h4 className="text-xl font-bold text-slate-900 mb-4">Clinical Decision Support Metrics</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Diagnosis Accuracy</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold text-green-600">97.2%</p>
              <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Treatment Recommendation</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold text-green-600">94.8%</p>
              <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Risk Stratification</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold text-green-600">96.5%</p>
              <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Drug Interaction Analysis</p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold text-green-600">99.1%</p>
              <TrendingUp className="w-5 h-5 text-green-600 mb-1" />
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="text-sm text-slate-600">
          <p className="font-semibold mb-2">Evidence Base:</p>
          <p>All recommendations align with:</p>
          <ul className="mt-2 space-y-1 ml-4">
            <li>• ADA Standards of Medical Care in Diabetes 2026</li>
            <li>• ACC/AHA Hypertension Guidelines</li>
            <li>• ACC/AHA Cholesterol Management Guidelines</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export function FinalReport() {
  const navigate = useNavigate();
  const { resetState } = useAppContext();
  const [activeSection, setActiveSection] = useState("findings");

  // Refs for scrollspy in navigation mode
  const findingsRef = useRef<HTMLDivElement>(null);
  const medicationsRef = useRef<HTMLDivElement>(null);
  const lifestyleRef = useRef<HTMLDivElement>(null);
  const followupRef = useRef<HTMLDivElement>(null);

  // Scroll to section handler
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>, sectionName: string) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(sectionName);
  };

  const handleDownload = () => {
    const reportText = generatePlainTextReport();
    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ai-health-report.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleNewAnalysis = () => {
    resetState();
    navigate("/");
  };

  const generatePlainTextReport = () => {
    return `AI HEALTH RECOMMENDATION REPORT
Generated: February 23, 2026
Confidence Level: 94.8%

[Full report content would be exported here...]`;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Step 5: Final Health Report</h2>
        <p className="text-slate-600">
          Comprehensive AI-generated health recommendations for clinical review
        </p>
      </div>

      {/* Combined Report Header & Executive Summary */}
      <Card className="p-5 mb-8 bg-white border-2 border-blue-200 shadow-md">
        {/* Report Header Section */}
        <div className="mb-3">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-slate-900">AI Health Recommendation Report</h3>
                  <Badge className="bg-green-600 text-white text-xs">HIPAA Compliant</Badge>
                </div>
                <p className="text-slate-600 flex items-center gap-2 text-xs">
                  <Calendar className="w-3 h-3" />
                  Generated on February 23, 2026 at 14:32 UTC
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600 mb-1">94.8%</div>
              <p className="text-xs text-slate-600">AI Confidence</p>
            </div>
          </div>
        </div>

        <Separator className="my-2" />

        {/* Executive Summary Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Executive Summary</h3>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            The patient presents with a combination of chronic conditions requiring comprehensive
            management. The AI analysis indicates <strong>moderate cardiovascular risk</strong> and{" "}
            <strong>suboptimal glycemic control</strong>. Immediate attention is recommended for blood
            pressure optimization and diabetes management enhancement.
          </p>
        </div>
      </Card>

      {/* Quick Navigation + Full Scroll View */}
      <div className="flex gap-6 mb-8">
        {/* Sticky Navigation Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Card className="p-4 bg-white border-slate-200 sticky top-4">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
              <Navigation className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-slate-900">Quick Navigation</h4>
            </div>
            <nav className="space-y-1 mb-4">
              <button
                onClick={() => scrollToSection(findingsRef, "findings")}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === "findings"
                    ? "bg-red-50 text-red-700 border-l-4 border-red-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>Primary Findings</span>
                </div>
                {activeSection === "findings" && (
                  <Badge variant="destructive" className="ml-6 mt-1 text-xs">Critical</Badge>
                )}
              </button>

              <button
                onClick={() => scrollToSection(medicationsRef, "medications")}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === "medications"
                    ? "bg-purple-50 text-purple-700 border-l-4 border-purple-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Pill className="w-4 h-4" />
                  <span>Medication Plan</span>
                </div>
                {activeSection === "medications" && (
                  <Badge className="ml-6 mt-1 text-xs bg-purple-500">Action Required</Badge>
                )}
              </button>

              <button
                onClick={() => scrollToSection(lifestyleRef, "lifestyle")}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === "lifestyle"
                    ? "bg-green-50 text-green-700 border-l-4 border-green-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Lifestyle & Referrals</span>
                </div>
              </button>

              <button
                onClick={() => scrollToSection(followupRef, "followup")}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === "followup"
                    ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Follow-up Schedule</span>
                </div>
              </button>
            </nav>

            {/* Download Report Button in Sidebar */}
            <Separator className="my-3" />
            <Button
              onClick={handleDownload}
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-8">
          {/* Primary Findings Section */}
          <div ref={findingsRef} id="findings">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Primary Findings</h3>
              <Badge variant="destructive">Critical</Badge>
            </div>
            <PrimaryFindings />
          </div>

          <Separator className="my-8" />

          {/* Medications Section */}
          <div ref={medicationsRef} id="medications">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Pill className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Medication Plan</h3>
              <Badge className="bg-purple-500">Action Required</Badge>
            </div>
            <MedicationPlan />
          </div>

          <Separator className="my-8" />

          {/* Lifestyle & Referrals Section */}
          <div ref={lifestyleRef} id="lifestyle">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Lifestyle Recommendations & Referrals</h3>
            </div>
            <div className="space-y-6">
              <LifestyleRecommendations />
              <SpecialistReferrals />
            </div>
          </div>

          <Separator className="my-8" />

          {/* Follow-up Section */}
          <div ref={followupRef} id="followup">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Follow-up & Monitoring</h3>
            </div>
            <FollowUpPlan />
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <Card className="p-6 bg-amber-50 border-amber-200 mb-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-amber-900 mb-2">Clinical Validation Required</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              This AI-generated report is designed to <strong>support clinical decision-making</strong> and
              should be reviewed by a licensed healthcare professional. All recommendations must be validated
              against patient-specific factors, contraindications, and current clinical guidelines before
              implementation. This system is HIPAA compliant and designed for professional medical use only.
            </p>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button onClick={handleNewAnalysis} variant="outline" size="lg" className="border-slate-300">
          <RotateCcw className="w-5 h-5 mr-2" />
          New Analysis
        </Button>
        <Button
          onClick={handleDownload}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Complete Report
        </Button>
      </div>
    </div>
  );
}