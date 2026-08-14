import logo from "../../../../assets/logo.png";

export default function SharkLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logo} alt="Shark Logo" className="w-48 h-16" />
    </div>
  );
}
