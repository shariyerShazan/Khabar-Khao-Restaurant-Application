const Terms = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center relative overflow-hidden p-6">
      <div className="absolute w-[600px] h-[600px] bg-[#ea2853] blur-[200px] opacity-15 top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500 blur-[180px] opacity-10 bottom-[-150px] right-[-150px]" />

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 z-10">
        <h1 className="text-3xl font-bold text-[#ea2853] mb-6">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-gray-300 text-sm leading-6">
          <section>
            <h2 className="text-white font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using Khabar Khao, you agree to be bound by these Terms &
              Conditions. If you do not agree, you should not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">2. User Accounts</h2>
            <p>
              You must provide accurate information when creating an account.
              You are responsible for maintaining the security of your account.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">3. Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt unauthorized access,
              or engage in harmful activities such as hacking or fraud.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">4. Role System</h2>
            <p>
              Users must select a valid role (CUSTOMER, RIDER, RESTAURANT). Each
              role has different permissions and responsibilities.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              5. Service Availability
            </h2>
            <p>
              We do not guarantee uninterrupted service. Maintenance or downtime
              may occur without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              Khabar Khao is not responsible for any indirect damages, data
              loss, or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              our policies or misuse the platform.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              8. Changes to Terms
            </h2>
            <p>
              We may update these Terms at any time. Continued usage means
              acceptance of updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
