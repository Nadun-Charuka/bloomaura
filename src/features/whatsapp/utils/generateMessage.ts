import { WHATSAPP_NUMBER } from '@/core/constants';
import type { WhatsAppMessage } from '@/core/types';

export function generateWhatsAppMessage({
  productName,
  price,
  location = 'Western Province',
}: WhatsAppMessage): string {
  const message = `Hi BloomAura! I'm interested in the ${productName} (Rs. ${price.toLocaleString()}). Is this available for delivery in ${location}?`;
  
  return encodeURIComponent(message);
}

export function generateWhatsAppLink(message: WhatsAppMessage): string {
  const encodedMessage = generateWhatsAppMessage(message);
  const phoneNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, ''); // Remove non-numeric characters
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
