import SignupForm from "../components/SignupForm";
import PricingCard from "../components/PricingCard";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";
import { ICONS } from "../assets/icon";

const Home = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description:
        "Perfect for small teams getting started with HR digitization. Simplify core HR management and payroll processing with an easy-to-use interface.",
      crossedOutPrice: "2500.00",
      price: "1999.00",
      period: "/mo",
      discount: "SAVE 20%",
      employees: "up to 25 Employees",
      popular: false,
      additionalCost: "₹30.00 per month (For every additional employee)",
      features: {
        "Core HR Management": [
          "Employee Information Management",
          "Know Your Employee(KYE)",
          "Employee Documents Management",
          "Employee Communication",
          "Reminders and Alerts",
          "HR Reports",
          "Company policies and Forms",
        ],
        "Payroll Management": [
          "Configurable Salary Structure",
          "Payroll Input",
          "Payroll Reimbursement",
          "Loan and Salary Advances",
          "Statutory Compliance",
          "Payroll Processing",
          "PaySlip Generation and Distribution",
          "Payroll Reports",
        ],
        "Employee Self-Service": [],
        "Leave Management": [
          "Fully customizable leave policies",
          "Manage Balance and Transactions",
        ],
        "Attendance Management": [
          "Swipe Capture from various sources",
          "Extensive Shift Management",
          "Highly configurable policies",
          "Attendance Processing",
          "Biometric Integration",
          "Geo-Tagging",
        ],
        "Expense Claims Management": [
          "Swipe Capture from various sources",
          "Extensive Shift Management",
        ],
        PayOut: [],
        Timesheets: [],
        "Multi-Company Support": [],
        "Employee Self On-boarding": [],
      },
      addOns: [
        { name: "Performance Management", price: "₹120.00 /per employee" },
        { name: "Applicant Tracking System", price: "₹60.00 /per employee" },
      ],
    },
    {
      name: "Smart HR",
      description:
        "Advanced tools for growing businesses. Manage leave, track attendance, handle expense claims, and process employee payouts seamlessly—all in one platform.",
      crossedOutPrice: "4400.00",
      price: "3499.00",
      period: "/mo",
      discount: "SAVE 20%",
      employees: "up to 25 Employees",
      popular: true,
      additionalCost: "₹79.00 per month (For every additional employee)",
      features: {
        "Core HR Management": [
          "Employee Information Management",
          "Know Your Employee(KYE)",
          "Employee Documents Management",
          "Employee Communication",
          "Reminders and Alerts",
          "HR Reports",
          "Company policies and Forms",
        ],
        "Payroll Management": [
          "Configurable Salary Structure",
          "Payroll Input",
          "Payroll Reimbursement",
          "Loan and Salary Advances",
          "Statutory Compliance",
          "Payroll Processing",
          "PaySlip Generation and Distribution",
          "Payroll Reports",
        ],
        "Employee Self-Service": [],
        "Leave Management": [
          "Fully customizable leave policies",
          "Manage Balance and Transactions",
        ],
        "Attendance Management": [
          "Swipe Capture from various sources",
          "Extensive Shift Management",
          "Highly configurable policies",
          "Attendance Processing",
          "Biometric Integration",
          "Geo-Tagging",
        ],
        "Expense Claims Management": [
          "Highly Customizable Business Rules",
          "Expense Claims Processing",
        ],
        PayOut: [],
        Timesheets: [],
        "Multi-Company Support": [],
        "Employee Self On-boarding": [],
      },
      addOns: [
        { name: "Performance Management", price: "₹120.00 /per employee" },
        { name: "Applicant Tracking System", price: "₹60.00 /per employee" },
      ],
    },
    {
      name: "360° HR Suite",
      description:
        "Complete enterprise-grade HR solution. From timesheet, multi-company support, employee self-onboarding, manage every aspect of your workforce with custom workflows and advanced analytics.",
      crossedOutPrice: "8500.00",
      price: "4999.00",
      period: "/mo",
      discount: "SAVE 41%",
      employees: "25 Employees",
      popular: false,
      additionalCost: "₹118.00 per month (For every additional employee)",
      features: {
        "Core HR Management": [
          "Employee Information Management",
          "Know Your Employee(KYE)",
          "Employee Documents Management",
          "Employee Communication",
          "Reminders and Alerts",
          "HR Reports",
          "Company policies and Forms",
        ],
        "Payroll Management": [
          "Configurable Salary Structure",
          "Payroll Input",
          "Payroll Reimbursement",
          "Loan and Salary Advances",
          "Statutory Compliance",
          "Payroll Processing",
          "PaySlip Generation and Distribution",
          "Payroll Reports",
        ],
        "Employee Self-Service": [],
        "Leave Management": [
          "Fully customizable leave policies",
          "Manage Balance and Transactions",
        ],
        "Attendance Management": [
          "Swipe Capture from various sources",
          "Extensive Shift Management",
          "Highly configurable policies",
          "Attendance Processing",
          "Biometric Integration",
          "Geo-Tagging",
        ],
        "Expense Claims Management": [
          "Highly Customizable Business Rules",
          "Expense Claims Processing",
        ],
        PayOut: [],
        Timesheets: [],
        "Multi-Company Support": [],
        "Employee Self On-boarding": [],
      },
      addOns: [
        { name: "Performance Management", price: "₹120.00 /per employee" },
        { name: "Applicant Tracking System", price: "₹60.00 /per employee" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
<section className="bg-appanBlue px-4 pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-20 min-h-[50vh] sm:min-h-screen">
  <div className="max-w-full sm:max-w-4xl lg:max-w-6xl xl:max-w-[1200px] mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
      <div className="text-white primary-heading-section mx-4 sm:ml-8 lg:ml-16 xl:ml-[9rem]">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-[96px] lg:h-[96px]">
            <img
              src={ICONS.icon}
              alt="Appan HR Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="bricolage-grotesque text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-bold leading-tight sm:leading-[60px] lg:leading-[72px] tracking-normal align-middle">
            Appan HR
          </h1>
        </div>
        <h2 className="dm-sans text-xl sm:text-2xl lg:text-3xl xl:text-[36px] font-bold leading-8 sm:leading-10 lg:leading-[43.2px] tracking-normal align-middle mb-4 sm:mb-6 max-w-full sm:max-w-[470px]">
          A smart HRMS built to simplify hiring, onboarding, payroll, and performance – all in one place.
        </h2>
        <p className="dm-sans text-sm sm:text-base lg:text-[16px] font-normal leading-6 lg:leading-[24px] tracking-normal align-middle opacity-90 max-w-full sm:max-w-[439.86px]">
          Smart and scalable HRMS for modern organizations. Streamline hiring, onboarding, and employee management with ease.
        </p>
      </div>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <SignupForm />
      </div>
    </div>
  </div>
</section>

      {/* Special Offer Banner */}
      <section className="mt-[-20px] sm:mt-[-30px] lg:mt-[-40px]">
        <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-[1192px] h-auto sm:h-[176px] mx-auto bg-white border border-dashed border-[#002429] shadow-[0_4px_16px_0px_rgba(0,0,0,0.25)] rounded-[12px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-[40px] py-4 sm:py-6 lg:py-[24px] gap-4 sm:gap-0">
          {/* Left Side: Gradient Text + Message */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[36px] font-bold leading-8 sm:leading-9 lg:leading-10 xl:leading-[40px] font-dm-sans bg-gradient-to-b from-[#6D3B6B] to-[#00B6CE] text-transparent bg-clip-text">
              #STARTUP Special
            </h2>
            <p className="text-[#002429] text-sm sm:text-base lg:text-base font-medium leading-6 lg:leading-[24px] max-w-full sm:max-w-[700px]">
              Registered after July 31, 2023? Unlock premium HR features for
              just ₹5.00 per employee/month with AppanHR!
            </p>
          </div>

          {/* Right Side: Special Offer Label */}
          <div className="flex items-center text-white px-4 py-2 rounded-lg font-bold text-xs sm:text-sm uppercase">
            <span className="mr-2">
              <img
                src={ICONS.specialIcon}
                alt="Special Offer Icon"
                className="w-full h-full object-contain"
              />
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-8 sm:py-12 lg:py-16 xl:py-24 px-4">
        <div className="max-w-full sm:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pick your perfect plan
            </h2>
            <p className="w-full sm:w-3/4 lg:w-4/5 xl:w-[880px] text-sm sm:text-base leading-6 lg:leading-[24px] text-[#4B5563] font-dm-sans mx-auto text-center">
              Get started in complete confidence. Enjoy a 60-day free trial with
              no commitments, experience everything, risk-free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Paperless Section */}
      <section className="h-auto sm:h-[459px]">
        <div className="w-full sm:w-11/12 lg:w-4/5 xl:w-[1275px] mx-auto h-full flex flex-col sm:flex-row">
          {/* Left Block */}
          <div className="w-full sm:w-[60%] lg:w-[738px] h-auto sm:h-[459px] bg-[#99E2EB] rounded-t-[12px] sm:rounded-tl-[12px] sm:rounded-bl-[12px] px-6 sm:px-8 lg:px-12 xl:px-[72px] py-8 sm:py-12 lg:py-[94px] flex flex-col justify-start gap-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] leading-8 sm:leading-10 lg:leading-12 xl:leading-[45.6px] font-bold text-[#002A2E] max-w-full sm:max-w-[563px]">
              Go 100% Paperless, Get Productive – The Smarter Way to HR.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-[20px] leading-7 lg:leading-8 xl:leading-[30px] font-normal text-[#002A2E] max-w-full sm:max-w-[563px]">
              Let AppanHR do the heavy lifting—your paperless HR journey starts here.
            </p>
            <button
              className="w-[159px] h-[46px] px-6 sm:px-[29px] py-3 sm:py-[13px] bg-[#004952] text-white rounded-[8px] font-medium text-sm lg:text-[14px] leading-5 lg:leading-[16px] hover:bg-[#003A42] transition-colors"
            >
              Get Free Trial
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center sm:justify-end">
            <img
              src={ICONS.Apanindustry}
              alt="Person working with documents"
              className="w-full sm:w-[40%] lg:w-[538px] h-auto sm:h-[459px] rounded-b-[12px] sm:rounded-tr-[12px] sm:rounded-br-[12px] shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-cyan-400 to-cyan-500 py-8 sm:py-12 lg:py-16 text-center">
        <div className="max-w-full sm:max-w-3xl lg:max-w-4xl xl:max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Experience effortless HR management with a 60-day free trial.
          </h2>
          <button className="w-[159px] h-[46px] px-6 sm:px-[29px] py-3 sm:py-[13px] bg-[#004952] text-white rounded-[8px] border border-[#004952] text-sm lg:text-[14px] font-medium leading-5 lg:leading-[16px]">
            Get Free Trial
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;