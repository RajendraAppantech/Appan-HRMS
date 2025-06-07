const StatsSection = () => {
  const stats = [
    {
      number: "200+",
      label: "Seamless global team management starts with AppanHR.",
      bgColor: "bg-[#F0D4FF]",
    },
    {
      number: "100k+",
      label: "Thousands of satisfied users streamline their daily HR tasks with AppanHR.",
      bgColor: "bg-[#D1FFE3]",
    },
    {
      number: "20+",
      label: "Effortless payroll with compliance and currency support across multiple countries.",
      bgColor: "bg-[#DCD8FF]",
    },
    {
      number: "24/7",
      label: "Dedicated Customer Support, Always Ready to Help",
      bgColor: "bg-[#FFD8D8]",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#002B33] text-center mb-12">
          Why AppanHR?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* --- NUMBER PILL --- */}
              <div
                className={`${stat.bgColor}
                        w-[143px] h-[48px] px-[15px]
                        rounded-[45px] flex items-center justify-center`}
              >
                <span className="text-[28px] font-bold leading-none text-[#002B33]">
                  {stat.number}
                </span>
              </div>

              {/* description */}
              <p className="mt-2 text-sm text-[#002B33] leading-relaxed max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;