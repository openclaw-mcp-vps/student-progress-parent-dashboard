export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know exactly how your child is doing in school
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          SchoolView connects to Canvas, Google Classroom, and PowerSchool to give you one clean dashboard — grades, assignments, and progress, always up to date.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started for $6/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Mock dashboard preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-4">Dashboard Preview</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[{label:"GPA",value:"3.8"},{label:"Assignments Due",value:"4"},{label:"Missing",value:"0"}].map(s=>(
              <div key={s.label} className="bg-[#0d1117] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-[#58a6ff]">{s.value}</p>
                <p className="text-xs text-[#8b949e] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[
              {course:"Algebra II",grade:"A",pct:"94%"},
              {course:"English Lit",grade:"B+",pct:"88%"},
              {course:"Biology",grade:"A-",pct:"91%"},
            ].map(c=>(
              <div key={c.course} className="flex items-center justify-between bg-[#0d1117] rounded-lg px-4 py-3">
                <span className="text-sm text-[#c9d1d9]">{c.course}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-[#8b949e]">{c.pct}</span>
                  <span className="text-sm font-bold text-[#58a6ff] w-8 text-right">{c.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-4xl font-bold text-white mb-1">$6<span className="text-lg font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Per family. All children included.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Connect Canvas, Google Classroom & PowerSchool",
              "Real-time grade & assignment updates",
              "Weekly email digest for parents",
              "All children on one dashboard",
              "Cancel anytime",
            ].map(f=>(
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>{f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which LMS platforms do you support?",
              a: "We currently support Canvas, Google Classroom, and PowerSchool — the three most widely used K-12 platforms in the US."
            },
            {
              q: "Is my child's data safe?",
              a: "Yes. We use read-only API access, never store passwords, and all data is encrypted in transit and at rest. We never sell or share student data."
            },
            {
              q: "What if my school uses a different system?",
              a: "We're actively adding more integrations. Join the waitlist and we'll notify you when your school's LMS is supported."
            }
          ].map(item=>(
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} SchoolView. All rights reserved.
      </footer>
    </main>
  );
}
