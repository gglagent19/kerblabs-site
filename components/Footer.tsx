export default function Footer() {
  return (
    <footer className="px-6 md:px-10 pt-16 pb-8 border-t border-[color:var(--color-border)]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-xs text-[color:var(--color-text-faint)] tracking-wide">
          &copy; {new Date().getFullYear()} Kerblabs Ltd. &middot; London, UK
        </div>
        <div className="flex items-center gap-5 text-xs text-[color:var(--color-text-dim)]">
          <a href="https://calendly.com/chandraalladi07/30min" target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--color-lime)] transition">Book a Demo</a>
          <a href="#" className="hover:text-[color:var(--color-lime)] transition">LinkedIn</a>
          <a href="#top" className="text-[color:var(--color-lime)]">↑ Top</a>
        </div>
      </div>
    </footer>
  );
}
