export function normalizeWhatsAppNumber(
    phone: string,
  ): string {
    return phone.replace(/\D/g, "");
  }
  
  export function createWhatsAppUrl(
    phone: string,
    message?: string,
  ): string {
    const normalizedPhone =
      normalizeWhatsAppNumber(phone);
  
    const baseUrl = `https://wa.me/${normalizedPhone}`;
  
    if (!message) {
      return baseUrl;
    }
  
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }