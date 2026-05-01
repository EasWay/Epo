import { useEffect } from "react";

export default function ProtectionOverlay() {
  useEffect(() => {
    // Anti-copy logic
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'p')) || // Disable copy, view source, save
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Integrity Anchor Check
    const checkIntegrity = () => {
      const anchor = document.getElementById('integrity-anchor');
      if (!anchor) {
        document.body.innerHTML = '<div style="height:100vh;display:flex;align-items:center;justify-center;background:#000;color:#fff;font-family:sans-serif;text-align:center;padding:20px;"><h1>System Lockout</h1><p>Application integrity compromised. Please reload.</p></div>';
      }
    };

    const interval = setInterval(checkIntegrity, 5000);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Integrity Anchor */}
      <div id="integrity-anchor" className="fixed bottom-0 left-0 w-px h-px opacity-0 pointer-events-none" aria-hidden="true" />
      
      {/* Watermark */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden opacity-[0.03] select-none uppercase tracking-[1rem] font-bold text-center flex flex-col justify-around text-4xl">
        <div className="whitespace-nowrap -rotate-12 translate-x-12">PREVIEW PROTECTION • EPOS OSU</div>
        <div className="whitespace-nowrap -rotate-12 -translate-x-12">AUTHENTIC FLAVOR • ACCRA</div>
        <div className="whitespace-nowrap -rotate-12 translate-x-12">LEGENDARY 8TH LANE</div>
        <div className="whitespace-nowrap -rotate-12 -translate-x-12">PREVIEW PROTECTION • EPOS OSU</div>
        <div className="whitespace-nowrap -rotate-12 translate-x-12">AUTHENTIC FLAVOR • ACCRA</div>
        <div className="whitespace-nowrap -rotate-12 -translate-x-12">LEGENDARY 8TH LANE</div>
      </div>
    </>
  );
}
