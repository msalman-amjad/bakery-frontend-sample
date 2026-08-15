'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send } from 'lucide-react';
import { bakeryInfo } from '../data/menuData';

export default function CartDrawer({
  isOpen,
  onClose,
  items = [],
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
    message += `\n*Delivery Fee:* ${isFreeDelivery ? 'FREE' : `Rs. ${deliveryFee}`}`;
    message += `\n*Total Amount:* Rs. ${total.toLocaleString()}`;
    message += `\n*Order Processing:* 2-3 Days Fresh Bake Cycle\n\n`;
    message += `_Sent via cream. web portal._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${bakeryInfo.whatsappRaw}?text=${encodedMessage}`;

    try {
      if (typeof window !== 'undefined') {
        const confetti = (await import('canvas-confetti')).default;
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#79A03F', '#FFB7C5', '#2D1E18', '#FFFFFF'],
        });
      }
    } catch {
      // Ignore confetti errors
    }

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

    setCustomerName('');
    setCustomerPhone('');
    setDeliveryAddress('');
    setSpecialNotes('');

    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }

    setIsOrdering(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D1E18]/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full justify-end">
        <div className="w-full sm:max-w-md bg-[#FFF0F3] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 h-full max-h-screen">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-5 border-b border-[#2D1E18]/10 flex items-center justify-between bg-white flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFF0F3] flex items-center justify-center text-[#79A03F]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#2D1E18]">
                  Your Box
                </h3>
                <p className="text-[11px] font-bold text-[#79A03F]">
                  {items.length} item{items.length === 1 ? '' : 's'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-[#2D1E18] hover:text-[#79A03F] hover:bg-[#FFF0F3] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free delivery tracker */}
          {items.length > 0 && (
            <div className="px-4 py-2 bg-white border-b border-[#2D1E18]/10 text-xs flex-shrink-0">
              {isFreeDelivery ? (
                <div className="text-[#79A03F] font-black text-center text-[11px]">
                  🎉 You have unlocked <strong>FREE Delivery</strong> in Lahore!
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="flex justify-between text-[#2D1E18]/70 text-[11px] font-bold">
                    <span>Add Rs. {(bakeryInfo.freeDeliveryThreshold - subtotal).toLocaleString()} for free delivery</span>
                    <span>{Math.round((subtotal / bakeryInfo.freeDeliveryThreshold) * 100)}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FFF0F3] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#79A03F] transition-all duration-300 rounded-full"
                      style={{ width: `${Math.min(100, (subtotal / bakeryInfo.freeDeliveryThreshold) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="text-3xl">🧁</div>
                <div className="space-y-1">
                  <h4 className="text-base font-black text-[#2D1E18]">
                    Your box is empty
                  </h4>
                  <p className="text-xs text-[#2D1E18]/70 font-medium">
                    Select your favorite brownies, rolls, and loaves to get started.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="h-8 px-4 rounded-full btn-olive text-xs font-bold"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-black text-[#2D1E18] uppercase tracking-wider">
                    <span>Items</span>
                    <button
                      onClick={() => onClearCart && onClearCart(false)}
                      className="text-rose-600 hover:text-rose-800 font-bold flex items-center gap-1 cursor-pointer text-[10px]"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-2xl bg-white border border-[#2D1E18]/10 flex items-center gap-3 shadow-xs"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-11 h-11 rounded-xl object-cover flex-shrink-0 bg-[#FFF0F3]"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h5 className="text-xs font-bold text-[#2D1E18] truncate">
                            {item.name}
                          </h5>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-[#2D1E18]/40 hover:text-rose-600 p-0.5 cursor-pointer"
                            aria-label="Remove item"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <div className="text-xs font-black text-[#79A03F]">
                            Rs. {(item.price * item.quantity).toLocaleString()}
                          </div>

                          <div className="flex items-center bg-[#FFF0F3] rounded-full p-0.5 border border-[#79A03F]">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-5 h-5 rounded-full bg-white text-[#2D1E18] flex items-center justify-center cursor-pointer shadow-2xs"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-2 h-2" />
                            </button>
                            <span className="text-xs font-black text-[#2D1E18] px-1.5 min-w-[1rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-5 h-5 rounded-full bg-[#79A03F] text-white flex items-center justify-center cursor-pointer shadow-2xs"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-2 h-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Checkout Form */}
                <form id="orderForm" onSubmit={handleCheckoutWhatsApp} className="space-y-2 pt-1">
                  <span className="text-[11px] font-black text-[#2D1E18] uppercase tracking-wider block">
                    Delivery Details
                  </span>

                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full h-9.5 px-3 rounded-xl bg-white border border-[#2D1E18]/15 text-xs text-[#2D1E18] placeholder-[#2D1E18]/40 focus:outline-none focus:border-[#79A03F]"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full h-9.5 px-3 rounded-xl bg-white border border-[#2D1E18]/15 text-xs text-[#2D1E18] placeholder-[#2D1E18]/40 focus:outline-none focus:border-[#79A03F]"
                  />

                  <select
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    className="w-full h-9.5 px-3 rounded-xl bg-white border border-[#2D1E18]/15 text-xs text-[#2D1E18] focus:outline-none focus:border-[#79A03F]"
                  >
                    {bakeryInfo.deliveryAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>

                  <textarea
                    rows={2}
                    placeholder="Street Address, House # *"
                    required
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#2D1E18]/15 text-xs text-[#2D1E18] placeholder-[#2D1E18]/40 focus:outline-none focus:border-[#79A03F] resize-none"
                  />

                  <input
                    type="text"
                    placeholder="Special instructions or gift note (optional)"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="w-full h-9.5 px-3 rounded-xl bg-white border border-[#2D1E18]/15 text-xs text-[#2D1E18] placeholder-[#2D1E18]/40 focus:outline-none focus:border-[#79A03F]"
                  />
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-[#2D1E18]/10 bg-white space-y-2.5 flex-shrink-0">
              <div className="space-y-1 text-xs font-bold text-[#2D1E18]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lahore Delivery</span>
                  <span>{isFreeDelivery ? 'FREE' : `Rs. ${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-[#2D1E18] pt-1.5 border-t border-[#2D1E18]/10">
                  <span>Total</span>
                  <span className="text-[#79A03F]">
                    Rs. {total.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                form="orderForm"
                disabled={isOrdering}
                className="w-full h-10 rounded-full btn-olive text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer active:scale-98 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {isOrdering ? 'Opening WhatsApp...' : 'Confirm Order on WhatsApp'}
                </span>
              </button>

              <p className="text-[10px] text-center text-[#2D1E18]/70 font-semibold">
                2-3 days fresh bake cycle · Cash on Delivery or Bank Transfer
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
