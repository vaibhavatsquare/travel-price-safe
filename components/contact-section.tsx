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
    <section id="contact" className="bg-white pb-12 sm:pb-40 mt-10">
      <div className="container-wide grid items-center gap-8 grid-cols-1 lg:grid-cols-[1fr_0.8fr]">

        {/* Left – copy */}
        <div className="max-w-md w-full">
          <span className="font-bold uppercase tracking-widest text-primary" style={{ fontSize: "150%" }}>
            Contact Us
          </span>
          <h2 className="mt-8 font-bold leading-snug text-[#0a1628]" style={{ fontSize: "clamp(24px, 3vw, 42px)", letterSpacing: "0.04em" }}>
            We&apos;d Love to<br /> hear from you!
          </h2>
          <p className="mt-8 leading-relaxed" style={{ fontSize: "clamp(13px, 1.4vw, 20px)", color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 400 }}>
            Have a question or suggestion?&nbsp;<br />
            Drop us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* Right – form card */}
        <div className="border border-gray-100 w-full rounded-2xl lg:rounded-[32px] lg:w-[46.5vw] lg:min-h-[66vh]" style={{ background: "rgba(255, 255, 255, 1)", padding: "clamp(16px, 3vw, 48px)", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.5)" }}>
          <>
              <p className="font-bold text-[#0a1628]" style={{ fontSize: "clamp(16px, 2vw, 28px)", marginBottom: "clamp(6px, 1vw, 14px)" }}>Send us a message</p>
              <p style={{ fontSize: "clamp(12px, 1.1vw, 18px)", marginBottom: "clamp(12px, 2vw, 32px)", color: "var(--Primary, rgba(21, 34, 63, 1))", fontWeight: 400 }}>Fill out the form and we&apos;ll get back to you.</p>

              <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: "clamp(10px, 1.5vw, 24px)" }} noValidate>
                <div className="grid sm:grid-cols-2" style={{ gap: "clamp(8px, 1.2vw, 20px)" }}>
                  <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={`w-full border bg-white text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${touched.name && !name ? "border-red-500 focus:border-red-500" : "border-black focus:border-primary"}`} style={{ borderRadius: "0.42vw", padding: "clamp(10px, 1.5vw, 20px) clamp(12px, 1.8vw, 24px)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
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
                    className={`w-full border bg-white text-[#0a1628] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 ${touched.email && !email ? "border-red-500 focus:border-red-500" : "border-black focus:border-primary"}`} style={{ borderRadius: "0.42vw", padding: "clamp(10px, 1.5vw, 20px) clamp(12px, 1.8vw, 24px)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
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
                  className="w-full resize-none border border-black bg-white text-[#0a1628] placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" style={{ borderRadius: "0.42vw", padding: "clamp(10px, 1.5vw, 20px) clamp(12px, 1.8vw, 24px)", fontSize: "clamp(16px, 1.2vw, 20px)" }}
                />

                <div className="flex flex-wrap items-center justify-between" style={{ gap: "clamp(8px, 1.5vw, 24px)", marginTop: "clamp(6px, 1vw, 16px)" }}>
                  <button
                    type="submit"
                    className="rounded-[24px] bg-primary font-bold text-white shadow-sm transition-all hover:bg-primary/90 hover:shadow-md min-h-[44px] px-6 text-sm lg:text-base"
                    style={{ padding: "clamp(12px, 1vw, 14px) clamp(20px, 2vw, 28px)", fontSize: "clamp(14px, 1vw, 16px)" }}
                  >
                    Send message
                  </button>
                  <span className="text-right text-xs lg:text-sm text-gray-400">
                    Prefer email?<br />
                    <a href="mailto:info@travelpriceSafe.com" className="text-primary hover:underline break-all">
                      info@travelpriceSafe.com
                    </a>
                  </span>
                </div>
              </form>
          </>
        </div>

      </div>
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-4 text-[#0a1628] shadow-xl border border-gray-100 w-[90vw] sm:w-auto max-w-sm sm:max-w-none">
          <div className="flex h-10 w-10 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-green-500">
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-4 sm:w-4 fill-current text-white" aria-hidden="true">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <p className="font-semibold text-sm sm:text-base text-[#0a1628]">Message sent successfully!</p>
        </div>
      )}
    </section>
  )
}