export default function Footer(){
    return(
          <footer id="contact" className="bg-blue-950 py-12 text-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8 md:flex-row md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
              Community Health Centre Omanur
            </p>
            <p className="mt-3 text-lg text-slate-300">
              NH 966, Main Road, Omanur, Malappuram (Placeholder Address)
            </p>
            <p className="text-slate-400">Phone: 0483-000-0000 / 0483-222-1111</p>
            <p className="text-slate-400">Email: chc.omanur@gov.in</p>
          </div>
          <div className="text-slate-400">
            <p>© {new Date().getFullYear()} Community Health Centre Omanur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}