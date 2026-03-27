"use client";

import Link from "next/link";

import { useCart } from "@/components/cart-provider";
import { siteDetails } from "@/data/site";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

function buildOrderSummary(
  items: {
    name: string;
    price: string;
    quantity: number;
  }[],
  total: number
) {
  const itemLines = items.map(
    (item) => `- ${item.name} x${item.quantity} (${item.price} each)`
  );

  return [
    "Blazin Hog Order Request",
    "",
    ...itemLines,
    "",
    `Total: ${formatCurrency(total)}`,
    "",
    "Customer name:",
    "Pickup or service time:",
    "Notes:",
  ].join("\n");
}

type CartSummaryProps = {
  compact?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
};

export function CartSummary({
  compact = false,
  showCloseButton = false,
  onClose,
}: CartSummaryProps) {
  const { items, itemCount, total, decrementItem, addItem, removeItem, clearCart } =
    useCart();
  const orderSummary = buildOrderSummary(items, total);
  const emailHref = `mailto:${siteDetails.email}?subject=${encodeURIComponent(
    "Blazin Hog Order Request"
  )}&body=${encodeURIComponent(orderSummary)}`;
  const squareCheckoutUrl = siteDetails.squareCheckoutUrl.trim();

  return (
    <>
      <div className={`border-b border-white/10 ${compact ? "p-5" : "p-6 sm:p-7"}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Order Cart
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase text-[var(--color-cream)] sm:text-3xl">
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </h2>
          </div>
          {showCloseButton ? (
            <button
              type="button"
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.76)] transition-all duration-200 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
              onClick={onClose}
            >
              Close
            </button>
          ) : (
            <Link
              href="/menu"
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.76)] transition-all duration-200 hover:border-[var(--color-orange)] hover:text-[var(--color-orange)]"
            >
              Add More
            </Link>
          )}
        </div>
      </div>

      <div
        className={`space-y-3 overflow-y-auto ${
          compact ? "max-h-[min(55vh,24rem)] p-5" : "max-h-none p-6 sm:p-7"
        }`}
      >
        {items.length === 0 ? (
          <div className="rounded-[1.5rem] border border-dashed border-[color:rgba(255,243,223,0.14)] bg-[color:rgba(255,243,223,0.03)] p-5">
            <p className="text-sm leading-7 text-[color:rgba(255,243,223,0.74)]">
              Your cart is empty. Add menu items and they will show up here.
            </p>
            {!compact ? (
              <Link
                href="/menu"
                className="mt-4 inline-flex min-h-[38px] items-center justify-center rounded-full border border-[color:rgba(255,147,80,0.45)] bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] shadow-[0_8px_18px_rgba(240,118,45,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
              >
                Browse Menu
              </Link>
            ) : null}
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="rounded-[1.5rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.08em] text-[var(--color-cream)]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm font-bold text-[var(--color-orange)]">
                    {item.price}
                  </p>
                </div>
                <button
                  type="button"
                  className="text-[11px] font-bold uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.56)] transition-all duration-200 hover:text-[var(--color-orange)]"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)]"
                  onClick={() => decrementItem(item.id)}
                >
                  -
                </button>
                <span className="min-w-8 text-center text-sm font-bold text-[var(--color-cream)]">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)]"
                  onClick={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                    })
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className={`border-t border-white/10 ${compact ? "p-5" : "p-6 sm:p-7"}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Total
          </span>
          <span className="text-2xl font-black text-[var(--color-cream)]">
            {formatCurrency(total)}
          </span>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[color:rgba(255,243,223,0.1)] bg-[color:rgba(255,243,223,0.04)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Square Checkout
          </p>
          <p className="mt-2 text-sm leading-6 text-[color:rgba(255,243,223,0.74)]">
            Connect a Square payment link in `data/site.ts` to send customers
            straight to Square from this cart.
          </p>
          {squareCheckoutUrl ? (
            <a
              href={squareCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-[38px] w-full items-center justify-center rounded-full border border-[color:rgba(255,147,80,0.5)] bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] shadow-[0_10px_20px_rgba(240,118,45,0.2)] transition-all duration-200 hover:brightness-110"
            >
              Continue To Square
            </a>
          ) : (
            <div className="mt-4 rounded-[1rem] border border-dashed border-[color:rgba(255,243,223,0.14)] px-4 py-3 text-xs leading-6 text-[color:rgba(255,243,223,0.6)]">
              Square checkout link not set yet.
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-[color:rgba(255,243,223,0.14)] bg-[color:rgba(255,243,223,0.06)] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-gold)]"
            onClick={clearCart}
          >
            Clear
          </button>
          <a
            href={emailHref}
            className="inline-flex min-h-[38px] items-center justify-center rounded-full border border-[color:rgba(255,147,80,0.25)] bg-[color:rgba(255,147,80,0.08)] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--color-cream)] transition-all duration-200 hover:border-[color:rgba(255,147,80,0.5)] hover:bg-[color:rgba(255,147,80,0.12)]"
          >
            Send Order
          </a>
        </div>
      </div>
    </>
  );
}
