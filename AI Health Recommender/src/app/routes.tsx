import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { Welcome } from "./components/Welcome";
import { FileUpload } from "./components/FileUpload";
import { DataMasking } from "./components/DataMasking";
import { DocumentComparison } from "./components/DocumentComparison";
import { AIProcessing } from "./components/AIProcessing";
import { FinalReport } from "./components/FinalReport";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Welcome },
      { path: "upload", Component: FileUpload },
      { path: "masking", Component: DataMasking },
      { path: "comparison", Component: DocumentComparison },
      { path: "processing", Component: AIProcessing },
      { path: "report", Component: FinalReport },
    ],
  },
]);
