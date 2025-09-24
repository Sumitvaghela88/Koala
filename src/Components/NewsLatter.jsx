import React, { useState } from 'react';

export default function NewsletterForm() {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    if (!form.consent) newErrors.consent = 'This field is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form here
    console.log('Form submitted:', form);
  };

  return (
    <section className="bg-[#F7F6F1] py-8 px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-[#1E1E1E] mb-2">
          Subscribe to our emails
        </h2>
        {/* Subtitle */}
        <p className="text-dark  text-sm mb-8">
          Be the first to know about new collections and exclusive offers.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs Row */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full md:w-[200px] px-2 py-3 border border-gray-300 bg-white  text-sm focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full md:w-[200px] px-4 py-3 border border-gray-300 bg-white  text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full md:w-[400px] px-6 py-3 bg-[#5E5F4C] text-white rounded-full hover:bg-[#494A3B] transition text-sm"
            >
              SIGN UP
            </button>
          </div>

          {/* Consent + Privacy Text */}
          <div className="text-left text-sm text-gray-600">
            <p className="mt-2 mb-4">
              By clicking 'Sign up' you agree that you have read and understood Koala’s{' '}
              <a
                href="https://au.koala.com/policies/privacy-policy"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>

            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>
                I agree to receive marketing communications and product updates from Koala.
              </span>
            </label>

            {/* Inline Validation Message for Consent */}
            {errors.consent && (
              <div className="mt-1 text-xs text-red-600 border border-red-300 bg-red-50 rounded px-2 py-1 inline-block">
                {errors.consent}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
