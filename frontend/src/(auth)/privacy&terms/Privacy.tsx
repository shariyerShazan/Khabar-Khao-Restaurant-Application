const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center relative overflow-hidden p-6">
      <div className="absolute w-[600px] h-[600px] bg-[#ea2853] blur-[200px] opacity-15 top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-pink-500 blur-[180px] opacity-10 bottom-[-150px] right-[-150px]" />

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 z-10">
        <h1 className="text-3xl font-bold text-[#ea2853] mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300 text-sm leading-6">
          <section>
            <h2 className="text-white font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you use Khabar Khao, we collect basic information such as
              your name, email address, profile picture (from Google OAuth), and
              authentication details. We may also collect device information and
              usage data to improve performance.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              2. How We Use Your Data
            </h2>
            <p>
              We use your information to create and manage your account, provide
              access to our services, improve user experience, detect fraud, and
              maintain platform security.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              3. Data Protection
            </h2>
            <p>
              Your data is protected using JWT authentication, encrypted
              communication, and secure database storage. We follow
              industry-standard security practices.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">4. Data Sharing</h2>
            <p>
              We do not sell or trade your personal data. Data may only be
              shared with trusted third-party services (like Google OAuth)
              strictly for authentication purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              5. Cookies & Sessions
            </h2>
            <p>
              We use cookies and session tokens to maintain login sessions and
              improve user experience. You can disable cookies in your browser,
              but some features may not work properly.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">6. User Rights</h2>
            <p>
              You can request access, update, or deletion of your data at any
              time. You also have the right to deactivate your account.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">7. Data Retention</h2>
            <p>
              We retain your data only as long as your account is active or as
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold mb-2">
              8. Changes to Policy
            </h2>
            <p>
              We may update this Privacy Policy at any time. Continued use of
              the platform means you accept the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
