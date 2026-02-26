import { useScrollReveal, useCountUp } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Residential & Commercial" },
  { value: 10, suffix: "+", label: "Regions Served" },
];

const StatItem = ({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) => {
  const count = useCountUp(value, 2000, active);
  return (
    <div className="flex flex-col items-center text-center px-4 py-4">
      <span className="text-2xl md:text-3xl font-heading font-bold text-primary">
        {label === "Residential & Commercial" ? "" : count}{label === "Residential & Commercial" ? "" : suffix}
      </span>
      <span className="text-xs md:text-sm text-silver mt-1">{label}</span>
    </div>
  );
};

const TrustBar = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="bg-secondary border-y border-border">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {stats.map((stat, i) => (
            <div key={i} className={`${i > 0 ? "md:border-l md:border-primary/20" : ""}`}>
              <StatItem {...stat} active={isVisible} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
