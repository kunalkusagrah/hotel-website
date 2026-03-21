import { HOTEL } from '@/utils/constants';

export function getWhatsAppBookingLink(message) {
  const phone = HOTEL.phone.replace(/\D/g, '');
  const text = encodeURIComponent(message || `Hi, I would like to book a stay at ${HOTEL.name}. Please share availability and pricing.`);
  return `https://wa.me/${phone}?text=${text}`;
}

export function getPhoneCallLink() {
  return `tel:${HOTEL.phone.replace(/\s+/g, '')}`;
}

export function openWhatsAppBooking(message) {
  const url = getWhatsAppBookingLink(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
