const PricingCard = ({ plan }) => {
  const isPopular = plan.popular;
  const isStarter = plan.name === "Starter";
  const isSmartHR = plan.name === "Smart HR";
  const is360HRSuite = plan.name === "360° HR Suite";

  // Define categories to display features with a dash in Starter plan
  const starterCategoriesWithDash = [
    "Leave Management",
    "Attendance Management",
    "Expense Claims Management",
  ];

  // Define categories to display with a dash when empty in Starter plan
  const starterEmptyCategoriesWithDash = [
    "PayOut",
    "Timesheets",
    "Multi-Company Support",
    "Employee Self On-boarding",
  ];

  // Define categories to display with a dash when empty in Smart HR plan
  const smartHREmptyCategoriesWithDash = [
    "Timesheets",
    "Multi-Company Support",
    "Employee Self On-boarding",
  ];

  // Define categories that get a checkmark in the header for Smart HR and 360° HR Suite
  const advancedCategoriesWithCheckmark = [
    "PayOut",
    "Timesheets",
    "Multi-Company Support",
    "Employee Self On-boarding",
  ];

  return (
    <div
      className={`relative bg-white shadow-lg border ${
        isPopular ? "border-cyan-500" : "border-gray-200"
      } rounded-[16px] w-[360px] h-[2195px] px-[32px] pt-[48px] pb-[48px] flex flex-col gap-[24px]`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="w-[364px] rounded-t-[12px] overflow-hidden shadow-md border border-gray-200">
            <div className="bg-[#007981] text-white text-center text-[15px] font-semibold uppercase py-2">
              MOST POPULAR
            </div>
          </div>
        </div>
      )}

      <div className="w-[296px] flex flex-col gap-3 text-left font-dm-sans">
        <h3 className="text-[20px] font-bold text-gray-900 leading-[24px]">
          {plan.name}
        </h3>

        <p className="text-gray-600 text-[14px] leading-[22px] py-[6px]">
          {plan.description}
        </p>

        <div className="flex items-center gap-2 h-[28px]">
          {plan.crossedOutPrice && (
            <span className="line-through text-gray-500 text-[16px] font-bold">
              ₹{plan.crossedOutPrice}
            </span>
          )}
          {plan.discount && (
            <span className="w-[94px] h-[28px] bg-[#99E2EB] text-black text-[14px] font-semibold px-[10px] py-[2px] rounded-full flex items-center justify-center leading-[18px]">
              {plan.discount}
            </span>
          )}
        </div>

        <div className="flex items-end gap-1">
          <span className="text-[32px] font-bold text-gray-900 leading-[36px]">
            ₹{plan.price}
          </span>
          <span className="text-[16px] text-gray-600 leading-[24px] font-bold">
            {plan.period}
          </span>
        </div>

        <p className="text-gray-600 text-[14px] leading-[22px]">
          {plan.employees}
        </p>

        <span className="text-[24px] font-bold leading-[24px] text-gray-900">
          +
        </span>

        {plan.additionalCost && (
          <div className="text-[14px] leading-[22px] text-gray-600">
            {plan.additionalCost.split(" (")[0]}
            <div className="text-gray-600 font-normal">
              (For every additional employee)
            </div>
          </div>
        )}
      </div>

      <button
        className="w-[296px] h-[48px] border-2 rounded-[8px] border-[#004952] text-[#004952] font-bold text-[16px] font-dm-sans flex items-center justify-center px-[50px] py-[16px] hover:text-white hover:bg-[#004952] transition-colors"
      >
        Get Free Trial
      </button>

      <div className="space-y-6">
        {Object.entries(plan.features).map(([category, features = []], index) => (
          <div key={index}>
            <h4 className="w-[296px] h-[32px] font-dm-sans font-bold text-[20px] leading-[32px] tracking-[0%] text-gray-900 mb-2 flex items-center gap-2">
              {(category === "Employee Self-Service" || 
                (is360HRSuite && advancedCategoriesWithCheckmark.includes(category)) ||
                (isSmartHR && category === "PayOut")) && (
                <svg
                  className="w-[16px] h-[16px] text-[#00A58D]"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.354 5.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L6 11.293l5.646-5.647a.5.5 0 0 1 .708 0z" />
                </svg>
              )}
              {category}
            </h4>

            <div className="space-y-2">
              {features.length > 0 ? (
                <>
                  {isStarter && starterCategoriesWithDash.includes(category) ? (
                    <>
                      {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className="w-[16px] h-[16px] text-[#001F1F] flex-shrink-0">
                            -
                          </span>
                          <span className="w-[280px] font-dm-sans font-normal text-[14px] leading-[24px] text-[#001F1F] flex items-center">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </>
                  ) : (
                    features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg
                          className="w-[16px] h-[16px] text-[#00A58D] flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.354 5.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L6 11.293l5.646-5.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                        <span className="w-[280px] font-dm-sans font-normal text-[14px] leading-[24px] text-[#001F1F] flex items-center">
                          {feature}
                        </span>
                      </div>
                    ))
                  )}
                </>
              ) : (
                (isStarter && starterEmptyCategoriesWithDash.includes(category)) ||
                (isSmartHR && smartHREmptyCategoriesWithDash.includes(category)) ? (
                  <div className="flex items-center gap-2">
                    <span className="w-[280px] font-dm-sans font-normal text-[14px] leading-[24px] text-[#001F1F] flex items-center">
                      -
                    </span>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}

        {plan.addOns && (
          <div>
            <h4 className="text-[20px] font-bold text-gray-900 mb-2 font-dm-sans">
              Add Ons
            </h4>
            <div className="space-y-2">
              {plan.addOns.map((addOn, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-[14px] text-[#001F1F] font-dm-sans font-normal leading-[24px]">
                    {addOn.name} - {addOn.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingCard;