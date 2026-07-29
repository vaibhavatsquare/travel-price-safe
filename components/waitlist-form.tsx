"use client"

import { useState, type FormEvent } from "react"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

type Status = "idle" | "loading" | "success" | "error"

export function WaitlistForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!fullName.trim()) {
      setStatus("error")
      setErrorMessage("Please enter your full name.")
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }
    const phonePattern = /^\+?[1-9]\d{6,14}$/
    if (phone.trim() && !phonePattern.test(phone.trim().replace(/[\s\-()]/g, ""))) {
      setStatus("error")
      setErrorMessage("Please enter a valid phone number.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const supabase = createClient()
      const { error } = await supabase.from("waitlist").insert({
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
      })

      if (error) {
        if (error.code === "23505") {
          setStatus("error")
          setErrorMessage("You're already on the list! We'll be in touch soon.")
          return
        }
        throw error
      }

      setStatus("success")
      setFullName("")
      setEmail("")
      setPhone("")
    } catch (err) {
      console.log("[v0] Waitlist submit error:", err)
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again in a moment.")
    }
  }

  if (status === "success") {
    return (
      <div className="glass mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="text-2xl font-bold text-foreground">{"🎉 You're on the list!"}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {"We'll notify you at launch with early access and exclusive offers."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Add another email
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass mx-auto flex max-w-xl flex-col gap-4 rounded-2xl p-6 sm:p-8"
      noValidate
    >
      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="fullName" className="text-sm font-semibold text-secondary-foreground">
          Full name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Alex Traveler"
          className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="email" className="text-sm font-semibold text-secondary-foreground">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <label htmlFor="phone" className="text-sm font-semibold text-secondary-foreground">
          Phone number
          <span className="ml-1 font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 234 567 8900"
          className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
        />
      </div>

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Joining...
          </>
        ) : (
          "Join Waitlist"
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        No spam. Just launch updates and exclusive early-access offers.
      </p>
    </form>
  )
}