import { motion } from "motion/react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with backend endpoint later
      await new Promise((res) => setTimeout(res, 1200));

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.12)_0%,transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Contact PharmaGuard
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch With Our Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about pharmacogenomic analysis, integration, or
            clinical workflows? We’re here to help.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ================= CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Card */}
            <InfoCard
              title="Clinical Support"
              description="Questions about CPIC guidelines or drug-gene interpretation."
              icon="support"
            />

            <InfoCard
              title="Technical Integration"
              description="Need help integrating PharmaGuard into your workflow?"
              icon="code"
            />

            <InfoCard
              title="Partnerships"
              description="Interested in collaborating or research opportunities?"
              icon="shield"
            />
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-cyan-500/20 p-10 rounded-2xl shadow-lg space-y-6"
          >
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <div>
              <label className="block mb-2 text-sm text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none p-3 rounded-lg text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 transition py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center">
                Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900 border border-cyan-500/20 p-6 rounded-2xl shadow-md transition"
    >
      <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-4">
        {getIcon(icon)}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
}

/* ================= INPUT FIELD ================= */

function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block mb-2 text-sm text-gray-400">{label}</label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full bg-slate-800 border border-slate-700 focus:border-cyan-500 focus:outline-none p-3 rounded-lg text-sm"
      />
    </div>
  );
}

/* ================= ICONS ================= */

function getIcon(type) {
  const common = "w-6 h-6 stroke-current";

  if (type === "support")
    return (
      <svg className={common} fill="none" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 8a6 6 0 10-12 0v5a3 3 0 003 3h6a3 3 0 003-3V8z" />
      </svg>
    );

  if (type === "code")
    return (
      <svg className={common} fill="none" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 16l-4-4 4-4M16 8l4 4-4 4" />
      </svg>
    );

  return (
    <svg className={common} fill="none" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 2l9 4-9 4-9-4 9-4zm0 6v14" />
    </svg>
  );
}
