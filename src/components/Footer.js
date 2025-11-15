export default function Footer(){
    return(
          <footer id="contact" className="bg-blue-950 py-12 text-slate-100">
        <div className="container-fixed flex flex-col gap-8  md:flex-row md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
              Community Health Centre Omanur
            </p>
            <p className="mt-3 text-lg text-slate-300">
             Ponnad, near Cheecode, Malappuram District, Kerala, 673645.
            </p>
            <p className="text-slate-400">Phone: 0483-2728400</p>
            <p className="text-slate-400">Email: mophcomanur@gmail.com</p>
          </div>
          <div className="text-slate-400">
            <p>© {new Date().getFullYear()} Community Health Centre Omanur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}