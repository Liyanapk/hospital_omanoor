const pdfSrc = encodeURI("/reports/BMW_Annual_report.pdf");

export default function AnnualReportViewer() {
  return (
    <main className="min-h-screen bg-black">
      <iframe
        title="Annual Report PDF"
        src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`}
        className="h-screen w-full border-0"
      />
    </main>
  );
}
