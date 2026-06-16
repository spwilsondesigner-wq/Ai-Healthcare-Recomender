import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Upload, FileText, ArrowRight, CheckCircle2, X } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export function FileUpload() {
  const navigate = useNavigate();
  const { updateState } = useAppContext();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleProcessDocument = () => {
    updateState({
      fileName: selectedFile?.name || "",
      fileType: "LLM", // Always use LLM processing
    });
    navigate("/masking");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Step 1: Document Upload & Classification</h2>
        <p className="text-slate-600">Upload your medical document and select the processing type</p>
      </div>

      <Card className="p-6 bg-white border-slate-200 shadow-lg">
        {/* Upload Area */}
        <div className="mb-4">
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors duration-300"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 text-slate-400 mb-3" />
              <p className="mb-2 text-sm text-slate-700">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-slate-500">PDF, DOC, DOCX, TXT (MAX. 50MB)</p>
            </div>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
        </div>

        {/* Selected File Display */}
        {selectedFile && (
          <div className="mb-4 animate-in fade-in duration-500">
            <div className="flex items-center gap-4 p-3 bg-blue-50 border border-blue-200 rounded-lg mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
              <div className="flex-1">
                <p className="font-medium text-slate-900">{selectedFile.name}</p>
                <p className="text-sm text-slate-600">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRemoveFile}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Action Button */}
        {selectedFile && (
          <div className="flex justify-end animate-in fade-in duration-500">
            <Button
              onClick={handleProcessDocument}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Process Document
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}