const Footer = () => {
  return (
    <footer id="contact" className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-base font-black text-slate-900">
                PMD
              </div>
              <div>
                <div className="text-lg font-extrabold text-white">PMD</div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
                  Pel Marketing Distribution
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Helping brands stand out through print, branding, and growth-focused marketing support that converts attention into action.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><a href="#home" className="transition hover:text-white">Home</a></li>
              <li><a href="#services" className="transition hover:text-white">Services</a></li>
              <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>hello@pmdstudio.com</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 PMD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
