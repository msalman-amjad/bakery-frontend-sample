'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Sparkles } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryArea, setDeliveryArea] = useState(bakeryInfo.deliveryAreas[0]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const isFreeDelivery = subtotal >= bakeryInfo.freeDeliveryThreshold;
  const deliveryFee = items.length > 0 ? (isFreeDelivery ? 0 : bakeryInfo.deliveryFee) : 0;
  const total = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsOrdering(true);

    // Build the WhatsApp message
    let message = `🧁 *NEW BAKERY ORDER - cream. Lahore (@creampk._)*\n\n`;
    message += `*Customer Name:* ${customerName || 'Valued Customer'}\n`;
    message += `*Phone:* ${customerPhone || 'Not provided'}\n`;
    message += `*Area:* ${deliveryArea}\n`;
    if (deliveryAddress) message += `*Address:* ${deliveryAddress}\n`;
    if (specialNotes) message += `*Special Notes:* ${specialNotes}\n\n`;

    message += `*📦 Ordered Treats:*\n`;
    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} (${item.dietary}) x ${item.quantity} = Rs. ${(
        item.price * item.quantity
      ).toLocaleString()}\n`;
    });

    message += `\n*Subtotal:* Rs. ${subtotal.toLocaleString()}`;
    message += `\n*Delivery Fee:* ${isFreeDelivery ? 'FREE (Special Offer)' : `Rs. ${deliveryFee}`}`;
    message += `\n*Total Amount:* Rs. ${total.toLocaleString()}`;
    message += `\n*Order Processing:* 2-3 Days Fresh Bake Cycle\n\n`;
    message += `_Sent via cream. web portal._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${bakeryInfo.whatsappRaw}?text=${encodedMessage}`;

    // Safe dynamic confetti trigger
    try {
      if (typeof window !== 'undefined') {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 80,
          spread: 65,
          origin: { y: 0.6 },
          colors: ['#79A03F', '#FFB7C5', '#F49EAF', '#628233'],
        });
      }
    } catch {
      // Ignore confetti errors
    }

    // IMMEDIATELY CLEAR CART & LOCALSTORAGE
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('cream_cart_v2');
        window.localStorage.setItem('cream_cart_v2', JSON.stringify([]));
      }
    } catch {
      // Ignore storage errors
    }

    if (onClearCart) {
      onClearCart(true);
    }

    // Reset customer form fields
    setCustomerName('');
    setCustomerPhone('');
    setDeliveryAddress('');
    setSpecialNotes('');

    // Open WhatsApp in new tab / app
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }

    // Reset loading state and close drawer
    setIsOrdering(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D1E18]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full justify-end">
        <div className="w-full sm:max-w-md bg-white border-l-2 border-[#79A03F]/30 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 h-full max-h-screen">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-[#FFF0F3] flex-shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white border-2 border-[#79A03F] flex items-center justify-center text-[#79A03F] shadow-xs">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#2D1E18] font-display">
                  Your Fresh Box
                </h3>
                <p className="text-[11px] sm:text-xs text-[#2D1E18]/70 font-semibold">
                  {items.length} unique item{items.length === 1 ? '' : 's'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl text-[#2D1E18]/60 hover:text-[#2D1E18] hover:bg-white transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Free delivery tracker */}
          {items.length > 0 && (
            <div className="px-4 sm:px-5 py-2.5 bg-[#FFF0F3] border-b border-slate-100 text-[11px] sm:text-xs flex-shrink-0">
              {isFreeDelivery ? (
                <div className="flex items-center gap-1.5 text-[#496522] font-extrabold">
                  <Sparkles className="w-3.5 h-3.5 text-[#79A03F] flex-shrink-0" />
                  <span>🎉 Unlocked <strong>FREE Delivery</strong> in Lahore!</span>
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex justify-between text-[#2D1E18] font-bold text-[10px] sm:text-xs">
                    <span>Add Rs. {(bakeryInfo.freeDeliveryThreshold - subtotal).toLocaleString()} more for FREE delivery</span>
                    <span>{Math.round((subtotal / bakeryInfo.freeDeliveryThreshold) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 sm:h-2 bg-white rounded-full overflow-hidden border border-[#2D1E18]/10">
                    <div
                      className="h-full bg-[#79A03F] transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / bakeryInfo.freeDeliveryThreshold) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scrollable Body: Items list + checkout form */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FFF0F3] border-2 border-dashed border-[#79A03F]/30 flex items-center justify-center mx-auto text-3xl">
                  🧁
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-black text-[#2D1E18] font-display">
                    Your box is empty
                  </h4>
                  <p className="text-xs text-[#2D1E18]/70 max-w-xs mx-auto font-medium">
                    Explore our Belgian brownies, gooey cinnamon rolls, and eggless loaves to start.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl btn-olive text-xs font-extrabold shadow-xs cursor-pointer"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] font-black text-[#2D1E18]/70 uppercase tracking-wider">
                    <span>Selected Treats</span>
                    <button
                      onClick={() => onClearCart && onClearCart(false)}
                      className="text-rose-600 hover:text-rose-800 font-black flex items-center gap-1 cursor-pointer text-[11px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl bg-[#FFFDF9] border border-[#2D1E18]/10 flex items-center gap-3 hover:border-[#79A03F]/40 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0 bg-slate-100"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1.5">
                          <h5 className="text-xs font-black text-[#2D1E18] truncate">
                            {item.name}
                          </h5>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#2D1E18]/40 hover:text-red-500 transition-colors p-0.5 cursor-pointer flex-shrink-0"
                            aria-label="Remove item"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-[10px] font-bold text-[#79A03F] block">
                          {item.dietary}
                        </span>

                        <div className="flex items-center justify-between mt-1.5">
                          <div className="text-xs font-black text-[#2D1E18]">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </div>

                          <div className="flex items-center gap-1 bg-white border border-[#2D1E18]/15 rounded-lg p-0.5 shadow-xs">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-5 h-5 rounded flex items-center justify-center text-[#2D1E18] hover:bg-[#FFF0F3] transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-black text-[#2D1E18] px-1 min-w-[0.8rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-5 h-5 rounded flex items-center justify-center text-[#2D1E18] hover:bg-[#FFF0F3] transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <form id="orderForm" onSubmit={handleCheckoutWhatsApp} className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-black text-[#2D1E18]/70 uppercase tracking-wider block">
                    Lahore Delivery Details
                  </span>

                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#FFFDF9] border border-[#2D1E18]/15 text-xs sm:text-sm text-[#2D1E18] placeholder-[#2D1E18]/50 focus:outline-none focus:border-[#79A03F]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone (0300-1234567) *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#FFFDF9] border border-[#2D1E18]/15 text-xs sm:text-sm text-[#2D1E18] placeholder-[#2D1E18]/50 focus:outline-none focus:border-[#79A03F]"
                  />

                  <select
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#FFFDF9] border border-[#2D1E18]/15 text-xs sm:text-sm text-[#2D1E18] focus:outline-none focus:border-[#79A03F]"
                  >
                    {bakeryInfo.deliveryAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>

                  <textarea
                    rows={2}
                    placeholder="Street Address, House #, Sector *"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#FFFDF9] border border-[#2D1E18]/15 text-xs sm:text-sm text-[#2D1E18] placeholder-[#2D1E18]/50 focus:outline-none focus:border-[#79A03F] resize-none"
                  />

                  <input
                    type="text"
                    placeholder="Gift card note / instructions (optional)"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full px-3 py-2 sm:py-2.5 rounded-xl bg-[#FFFDF9] border border-[#2D1E18]/15 text-xs sm:text-sm text-[#2D1E18] placeholder-[#2D1E18]/50 focus:outline-none focus:border-[#79A03F]"
                  />
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer: Totals & WhatsApp Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-[#FFF0F3] space-y-3 flex-shrink-0">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[#2D1E18]/70 font-bold">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#2D1E18]/70 font-bold">
                  <span>Lahore Delivery</span>
                  <span>{isFreeDelivery ? 'FREE' : `Rs. ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-black text-[#2D1E18] pt-1.5 border-t border-slate-200">
                  <span>Estimated Total</span>
                  <span className="text-[#79A03F] font-display text-base sm:text-lg">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="orderForm"
                disabled={isOrdering}
                className="w-full py-3 sm:py-3.5 rounded-xl sm:rounded-2xl btn-olive text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-md shadow-[#79A03F]/30 hover:shadow-lg cursor-pointer active:scale-98 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isOrdering ? 'Generating Order...' : 'Confirm & Order on WhatsApp'}
                </span>
              </button>

              <p className="text-[10px] text-center text-[#2D1E18]/60 font-semibold leading-tight">
                ⏳ Dispatches in 2-3 days • Cash on Delivery / Bank Transfer
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
