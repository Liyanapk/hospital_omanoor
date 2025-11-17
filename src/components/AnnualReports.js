import { FileText } from "lucide-react";

export default function AnnualReports(){
    return(
        <>
         {/* ANNUAL REPORT */}
          <section id="annual-report" className="mt-20 mb-20 ">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">
                  Reports
                </p>
                <h2 className="text-2xl font-bold text-slate-900">Annual Report</h2>
                
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-blue-100/40 transition 1 hover:border-blue-200 hover:shadow-blue-200/60">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    File
                  </p>
                  <h3 className="text-xl font-semibold text-slate-900">Community Health Centre Omanur Annual Report</h3>
                  <p className="text-sm text-slate-500">PDF · Updated 2025</p>
                </div>

                <a
                  href="/annual-report"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-blue-500"
                >
                  View PDF
                </a>
              </div>
            </div>
          </section>
        </>
    )
}