"use client"

import { useState, type FormEvent } from "react"
import { createClient } from "@/lib/supabase/client"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [toast, setToast] = useState(false)
  const [touched, setTouched] = useState({ name: false, email: false })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched({ name: true, email: true })
    if (!name || !email) return
    const supabase = createClient()
    const { error } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, message }])
    if (!error) {
      setToast(true)
      setName("")
      setEmail("")
      setMessage("")
      setTimeout(() => setToast(false), 3000)
    }
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="container-wide grid items-start gap-12 lg:grid-cols-2">

        {/* Left – copy */}
        <div className="max-w-sm">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Contact Us
          </span>
          <h2 className="mt-3 font-bold leading-snug tracking-tight text-[#0a1628]" style={{ fontSize: "clamp(24px, 3.5vw, 52px)" }}>
            We&apos;d Love to<br />hear from you!
          </h2>
          <p className="mt-3 leading-snug text-gray-500" style={{ fontSize: "clamp(13px, 1.2vw, 18px)" }}>
            Have a question or suggestion?&nbsp;
            Drop us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* Right – form card */}
        <div className="rounded-2xl border border-gray-250 bg-white" style={{ aspectRatio: "4/3", padding: "clamp(16px, 3vw, 48px)", boxShadow: "0px 4px 10px 0px rgba(140,140,140,0.1), 0px 18px 18px 0px rgba(140,140,140,0.09), 0px 40px 24px 0px rgba(140,140,140,0.05), 0px 71px 29px 0px rgba(140,140,140,0.01)" }}>
          <>
              <p className="font-bold text-[#0a1628]" style={{ fontSize: "clamp(16px, 2vw, 28px)", marginBottom: "clamp(6px, 1vw, 14px)" }}>Send us a message</p>
              <p className="text-gray-400" style={{ fontSize: "clamp(12px, 1.1vw, 18px)", marginBottom: "clamp(12px, 2vw, 32px)" }}>Fill out the form and we&apos;ll get back to you.</p>

              <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "clamp(10px, 1.5vw, 24px)" }} noValidate>
                <div className="grid sm:grid-cols-2" style={{ gap: "clamp(8px, 1.2vw, 20px)" }}>
                  <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`w-full rounded-xl border bg-white text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${touched.name && !name ? "border-red-500 focus:border-red-500" : "border-black focus:border-primary"}`} style={{ padding: "clamp(10px, 1.5vw, 20px) clamp(12px, 1.8vw, 24px)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
                  />
                  {touched.name && !name && <p className="text-xs text-red-500">Name is required</p>}
                  </div>
                  <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full rounded-xl border bg-white text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${touched.email && !email ? "border-red-500 focus:border-red-500" : "border-black focus:border-primary"}`} style={{ padding: "clamp(10px, 1.5vw, 20px) clamp(12px, 1.8vw, 24px)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
                  />
                  {touched.email && !email && <p className="text-xs text-red-500">Email is required</p>}
                  </div>
                </div>

                <textarea
                  placeholder="Write message here..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full resize-none rounded-xl border border-black bg-white text-[#0a1628] placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" style={{ padding: "clamp(10px, 1.5vw, 20px) clamp(12px, 1.8vw, 24px)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
                />

                <div className="flex items-center justify-between" style={{ gap: "clamp(8px, 1.5vw, 24px)", marginTop: "clamp(6px, 1vw, 16px)" }}>
                  <button
                    type="submit"
                    className="rounded-xl bg-primary font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                    style={{ padding: "clamp(8px, 1vw, 14px) clamp(16px, 2vw, 28px)", fontSize: "clamp(12px, 1vw, 16px)" }}
                  >
                    Send message
                  </button>
                  <span className="text-right text-xs text-gray-400">
                    Prefer email?<br />
                    <a href="mailto:info@travelpriceSafe.com" className="text-primary hover:underline">
                      info@travelpriceSafe.com
                    </a>
                  </span>
                </div>
              </form>
          </>
        </div>

      </div>
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-[#0a1628] shadow-xl border border-gray-100">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-white" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p className="font-semibold text-[#0a1628]">Message sent successfully!</p>
        </div>
      )}
    </section>
  )
}