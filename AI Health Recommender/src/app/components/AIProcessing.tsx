import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Card } from "./ui/card";
import { Brain, Loader2, CheckCircle2, Activity } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Progress } from "./ui/progress";

export function AIProcessing() {
  const navigate = useNavigate();
  const { updateState } = useAppContext();
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { name: "Document Analysis", duration: 1500 },
    { name: "Medical Context Extraction", duration: 2000 },
    { name: "AI Model Processing", duration: 2500 },
    { name: "Health Recommendation Generation", duration: 2000 },
    { name: "Report Compilation", duration: 1500 },
  ];

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let stageTimeout: NodeJS.Timeout;

    const runStages = async () => {
      for (let i = 0; i < stages.length; i++) {
        setCurrentStage(i);
        const stageProgress = (i / stages.length) * 100;

        // Animate progress for current stage
        const increment = ((100 / stages.length) / stages[i].duration) * 50;
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            const next = prev + increment;
            if (next >= ((i + 1) / stages.length) * 100) {
              clearInterval(progressInterval);
              return ((i + 1) / stages.length) * 100;
            }
            return next;
          });
        }, 50);

        await new Promise((resolve) => {
          stageTimeout = setTimeout(resolve, stages[i].duration);
        });
      }

      setProgress(100);

      // Generate mock report
      const mockReport = generateMockReport();
      updateState({ finalReport: mockReport });
      
      // Navigate directly to report without showing completion screen
      navigate("/report");
    };

    runStages();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stageTimeout);
    };
  }, [navigate, updateState]);

  const generateMockReport = () => {
    return `AI HEALTH RECOMMENDATION REPORT

PATIENT PROFILE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Medical Record: [ANONYMIZED]
Analysis Date: February 18, 2026
Processing Model: GPT-4 Medical v2.1
Confidence Level: 94.7%

EXECUTIVE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The patient presents with a combination of chronic conditions requiring 
comprehensive management. The AI analysis indicates moderate cardiovascular 
risk and suboptimal glycemic control.

PRIMARY FINDINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. CARDIOVASCULAR HEALTH (Priority: HIGH)
   ├─ Blood Pressure: 140/90 mmHg (Stage 1 Hypertension)
   ├─ Current Treatment: Lisinopril 10mg daily
   └─ Risk Assessment: Moderate cardiovascular risk

   RECOMMENDATIONS:
   • Consider titrating Lisinopril to 20mg daily
   • Monitor BP twice daily for 2 weeks
   • Implement DASH diet principles
   • Target BP: <130/80 mmHg
   • Schedule cardiovascular risk assessment

2. METABOLIC HEALTH (Priority: HIGH)
   ├─ HbA1c: 7.2% (Target: <7.0%)
   ├─ Fasting Glucose: 142 mg/dL (Target: 80-130 mg/dL)
   ├─ Current Treatment: Metformin 500mg BID
   └─ Diabetes Control: Suboptimal

   RECOMMENDATIONS:
   • Increase Metformin to 1000mg BID if tolerated
   • Consider adding SGLT2 inhibitor (e.g., Empagliflozin 10mg)
   • Continuous glucose monitoring evaluation
   • Dietary consultation for carbohydrate management
   • Target HbA1c: <7.0%

3. LIPID MANAGEMENT (Priority: MEDIUM)
   ├─ Total Cholesterol: 210 mg/dL
   ├─ LDL: 135 mg/dL (Target: <100 mg/dL)
   ├─ HDL: 45 mg/dL (Low)
   └─ Current Treatment: None specific

   RECOMMENDATIONS:
   • Initiate statin therapy (e.g., Atorvastatin 20mg daily)
   • Omega-3 supplementation consideration
   • Increase physical activity for HDL improvement
   • Repeat lipid panel in 6 weeks
   • Target LDL: <100 mg/dL

4. NEUROLOGICAL CONCERNS (Priority: MEDIUM)
   ├─ Chief Complaint: Persistent headaches (3 weeks)
   ├─ Diagnosis: Tension Headache
   └─ Associated: Dizziness

   RECOMMENDATIONS:
   • Rule out secondary causes (BP-related, medication side effects)
   • Consider CT/MRI if symptoms persist beyond 4 weeks
   • Stress management and relaxation techniques
   • Sleep hygiene optimization
   • Consider prophylactic migraine therapy if frequency increases

LIFESTYLE INTERVENTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NUTRITION
• DASH diet implementation for BP control
• Carbohydrate counting and glycemic index awareness
• Sodium restriction: <2,300mg daily
• Increase fiber intake to 25-30g daily
• Mediterranean diet principles for lipid management

PHYSICAL ACTIVITY
• Minimum 150 minutes moderate-intensity exercise weekly
• Combination of aerobic and resistance training
• Daily 30-minute walks recommended
• Monitor glucose before/after exercise
• Gradual intensity increase as tolerated

STRESS MANAGEMENT
• Mindfulness meditation: 10-15 minutes daily
• Progressive muscle relaxation techniques
• Adequate sleep: 7-8 hours nightly
• Consider cognitive behavioral therapy for tension headaches

MEDICATION OPTIMIZATION PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROPOSED REGIMEN:
1. Lisinopril 20mg daily (increased from 10mg)
2. Metformin 1000mg BID (increased from 500mg)
3. Empagliflozin 10mg daily (NEW)
4. Atorvastatin 20mg daily (NEW)
5. Aspirin 81mg daily (continue)

MONITORING REQUIREMENTS:
• Blood pressure: Twice daily for 2 weeks, then weekly
• Blood glucose: Fasting and 2-hour postprandial daily
• HbA1c: Repeat in 3 months
• Comprehensive metabolic panel: 6 weeks (renal function)
• Lipid panel: 6 weeks

FOLLOW-UP SCHEDULE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2 WEEKS:
• Blood pressure check
• Medication tolerance assessment
• Headache symptom evaluation

6 WEEKS:
• Comprehensive metabolic panel
• Lipid panel
• Medication efficacy review

3 MONTHS:
• HbA1c recheck
• Comprehensive visit
• Treatment plan adjustment

6 MONTHS:
• Full cardiovascular risk reassessment
• Annual diabetic complications screening

SPECIALIST REFERRALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RECOMMENDED CONSULTATIONS:
• Endocrinology: Diabetes optimization
• Cardiology: Cardiovascular risk stratification
• Registered Dietitian: Medical nutrition therapy
• Neurology: If headaches persist beyond 4 weeks

PATIENT EDUCATION PRIORITIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Hypertension management and home monitoring
2. Diabetes self-management education (DSME)
3. Hypoglycemia recognition and treatment
4. Medication adherence strategies
5. Warning signs requiring immediate medical attention

CLINICAL DECISION SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI CONFIDENCE METRICS:
• Diagnosis Accuracy: 97.2%
• Treatment Recommendation: 94.8%
• Risk Stratification: 96.5%
• Drug Interaction Analysis: 99.1%

EVIDENCE BASE:
All recommendations align with:
• ADA Standards of Medical Care in Diabetes 2026
• ACC/AHA Hypertension Guidelines
• ACC/AHA Cholesterol Management Guidelines

IMPORTANT NOTES FOR CLINICIAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠ This AI-generated report is designed to support, not replace, 
  clinical judgment. All recommendations should be reviewed and 
  validated by a licensed healthcare provider.

⚠ Patient-specific factors not captured in this document may 
  influence treatment decisions.

⚠ Medication changes should consider patient preferences, 
  contraindications, and cost considerations.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Report Generated: February 18, 2026 at 14:32 UTC
AI Model Version: GPT-4 Medical v2.1
Processing Time: 8.7 seconds
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Step 4: AI Health Analysis
        </h2>
        <p className="text-slate-600">
          Advanced AI processing of medical data for health recommendations
        </p>
      </div>

      <Card className="p-8 bg-white border-slate-200 shadow-lg">
        <div className="py-8">
          {/* AI Processing Header */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <Brain className="w-12 h-12 text-white animate-pulse" />
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              AI Analysis in Progress
            </h3>
            <p className="text-slate-600">
              Processing medical data with advanced machine learning models
            </p>
          </div>

          {/* Processing Stages */}
          <div className="space-y-4 mb-8">
            {stages.map((stage, index) => {
              const isActive = index === currentStage;
              const isCompleted = index < currentStage;

              return (
                <div
                  key={stage.name}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-50 border-2 border-blue-200"
                      : isCompleted
                      ? "bg-green-50 border-2 border-green-200"
                      : "bg-slate-50 border-2 border-slate-200"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isCompleted
                        ? "bg-green-600"
                        : isActive
                        ? "bg-blue-600"
                        : "bg-slate-300"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : isActive ? (
                      <Loader2 className="w-6 h-6 text-white animate-spin" />
                    ) : (
                      <span className="text-white font-semibold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        isActive
                          ? "text-blue-900"
                          : isCompleted
                          ? "text-green-900"
                          : "text-slate-600"
                      }`}
                    >
                      {stage.name}
                    </p>
                  </div>
                  {isActive && <Activity className="w-5 h-5 text-blue-600 animate-pulse" />}
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Overall Progress</span>
              <span className="font-semibold text-slate-900">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>
      </Card>
    </div>
  );
}