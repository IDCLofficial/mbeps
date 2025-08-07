"use client"
import React, { useState } from "react";

const ContactFormSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#222] text-white p-8 rounded shadow-lg w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-medium mb-2">LET&apos;S TALK HERE</h2>
      <p className="mb-6 text-gray-200 text-sm">Typically, we respond to all messages sent within 24 hours</p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded border border-gray-300 text-black bg-white focus:outline-none min-h-[100px]"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 rounded font-medium mt-2 cursor-pointer ${isSubmitting ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} text-white`}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        {isSuccess && (
          <div className="text-green-500 text-center py-2">
            Message sent successfully! We&apos;ll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactFormSection; 