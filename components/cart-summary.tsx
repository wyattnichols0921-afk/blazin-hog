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
      <div
        className={`border-b border-white/10 ${
          compact ? "p-4 sm:p-5" : "p-6 sm:p-7"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Order Cart
            </p>
            <h2
              className={`mt-2 font-black uppercase text-[var(--color-cream)] ${
                compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
              }`}
            >
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
        className={`overflow-y-auto ${
          compact ? "max-h-[min(46vh,20rem)] space-y-2 p-4 sm:max-h-[min(55vh,24rem)] sm:space-y-3 sm:p-5" : "max-h-none space-y-3 p-6 sm:p-7"
        }`}
      >
        {items.length === 0 ? (
          <div
            className={`rounded-[1.5rem] border border-dashed border-[color:rgba(255,243,223,0.14)] bg-[color:rgba(255,243,223,0.03)] ${
              compact ? "p-4" : "p-5"
            }`}
          >
            <p
              className={`text-[color:rgba(255,243,223,0.74)] ${
                compact ? "text-xs leading-6 sm:text-sm sm:leading-7" : "text-sm leading-7"
              }`}
            >
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
              className={`rounded-[1.5rem] border border-[color:rgba(255,243,223,0.1)] bg-[linear-gradient(180deg,rgba(255,243,223,0.08),rgba(255,243,223,0.03))] ${
                compact ? "p-3.5 sm:p-4" : "p-4"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className={`font-black uppercase tracking-[0.08em] text-[var(--color-cream)] ${
                      compact ? "text-[13px] sm:text-sm" : "text-sm"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`mt-1.5 font-bold text-[var(--color-orange)] ${
                      compact ? "text-[13px] sm:mt-2 sm:text-sm" : "text-sm"
                    }`}
                  >
                    {item.price}
                  </p>
                </div>
                <button
                  type="button"
                  className={`font-bold uppercase tracking-[0.16em] text-[color:rgba(255,243,223,0.56)] transition-all duration-200 hover:text-[var(--color-orange)] ${
                    compact ? "text-[10px]" : "text-[11px]"
                  }`}
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
              <div className={`flex items-center gap-2 ${compact ? "mt-3" : "mt-4"}`}>
                <button
                  type="button"
                  className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 font-black text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)] ${
                    compact ? "h-7 w-7 text-[13px] sm:h-8 sm:w-8 sm:text-sm" : "h-8 w-8 text-sm"
                  }`}
                  onClick={() => decrementItem(item.id)}
                >
                  -
                </button>
                <span
                  className={`text-center font-bold text-[var(--color-cream)] ${
                    compact ? "min-w-7 text-[13px] sm:min-w-8 sm:text-sm" : "min-w-8 text-sm"
                  }`}
                >
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 font-black text-[var(--color-cream)] transition-all duration-200 hover:border-[var(--color-orange)] ${
                    compact ? "h-7 w-7 text-[13px] sm:h-8 sm:w-8 sm:text-sm" : "h-8 w-8 text-sm"
                  }`}
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

      <div
        className={`border-t border-white/10 ${
          compact ? "p-4 sm:p-5" : "p-6 sm:p-7"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-gold)]">
            Total
          </span>
          <span
            className={`font-black text-[var(--color-cream)] ${
              compact ? "text-xl sm:text-2xl" : "text-2xl"
            }`}
          >
            {formatCurrency(total)}
          </span>
        </div>

        <div
          className={`rounded-[1.5rem] border border-[color:rgba(255,243,223,0.1)] bg-[color:rgba(255,243,223,0.04)] ${
            compact ? "mt-4 p-3.5 sm:mt-5 sm:p-4" : "mt-5 p-4"
          }`}
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">
            Square Checkout
          </p>
          <p
            className={`mt-2 text-[color:rgba(255,243,223,0.74)] ${
              compact ? "text-xs leading-6 sm:text-sm" : "text-sm leading-6"
            }`}
          >
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
            <div
              className={`mt-4 rounded-[1rem] border border-dashed border-[color:rgba(255,243,223,0.14)] text-xs leading-6 text-[color:rgba(255,243,223,0.6)] ${
                compact ? "px-3.5 py-2.5" : "px-4 py-3"
              }`}
            >
              Square checkout link not set yet.
            </div>
          )}
        </div>

        <div className={`grid grid-cols-1 gap-2.5 sm:grid-cols-2 ${compact ? "mt-3 sm:mt-4" : "mt-4"}`}>
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
