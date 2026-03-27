import type { Metadata } from "next";

import { CartSummary } from "@/components/cart-summary";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Blazin Hog order cart and send your order request.",
};

export default function CartPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-orange)]">
            Cart
          </p>
          <h1 className="text-3xl font-black uppercase leading-tight text-[var(--color-cream)] sm:text-4xl md:text-5xl">
            Review your order before you send it.
          </h1>
          <p className="text-sm leading-8 text-[color:rgba(248,239,224,0.74)] sm:text-base">
            Adjust quantities, clear items, or jump back to the menu if you want
            to keep building your order.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[color:rgba(255,243,223,0.12)] bg-[linear-gradient(180deg,rgba(20,15,14,0.97),rgba(10,8,8,0.97))] shadow-[0_28px_60px_rgba(0,0,0,0.32)] md:mt-12">
          <CartSummary />
        </div>
      </section>

      <CTASection
        eyebrow="Need More Smoke?"
        title="Jump back to the menu and add more to your order."
        description="You can keep building your cart with plates, sandwiches, sides, and drinks, then come right back here to review everything."
        primaryHref="/menu"
        primaryLabel="Back To Menu"
      />
    </>
  );
}
