
interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export const countries: Country[] = [
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Belgique", code: "BE", dialCode: "+32", flag: "🇧🇪" },
  { name: "Suisse", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "États-Unis", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "Allemagne", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "Royaume-Uni", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Italie", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Espagne", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Portugal", code: "PT", dialCode: "+351", flag: "🇵🇹" },
  { name: "Maroc", code: "MA", dialCode: "+212", flag: "🇲🇦" },
  { name: "Algérie", code: "DZ", dialCode: "+213", flag: "🇩🇿" },
  { name: "Tunisie", code: "TN", dialCode: "+216", flag: "🇹🇳" },
  { name: "Sénégal", code: "SN", dialCode: "+221", flag: "🇸🇳" },
  { name: "Côte d'Ivoire", code: "CI", dialCode: "+225", flag: "🇨🇮" },
  { name: "Cameroun", code: "CM", dialCode: "+237", flag: "🇨🇲" },
  { name: "République démocratique du Congo", code: "CD", dialCode: "+243", flag: "🇨🇩" },
  { name: "Madagascar", code: "MG", dialCode: "+261", flag: "🇲🇬" },
  { name: "Mali", code: "ML", dialCode: "+223", flag: "🇲🇱" },
  { name: "Niger", code: "NE", dialCode: "+227", flag: "🇳🇪" },
  { name: "Burkina Faso", code: "BF", dialCode: "+226", flag: "🇧🇫" },
  // Ajouter plus de pays au besoin
];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(country => country.code === code);
}
