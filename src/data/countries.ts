
interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  isAfrican?: boolean;
}

// Liste complète des pays avec indication des pays africains
export const countries: Country[] = [
  // Pays africains
  { name: "Afrique du Sud", code: "ZA", dialCode: "+27", flag: "🇿🇦", isAfrican: true },
  { name: "Algérie", code: "DZ", dialCode: "+213", flag: "🇩🇿", isAfrican: true },
  { name: "Angola", code: "AO", dialCode: "+244", flag: "🇦🇴", isAfrican: true },
  { name: "Bénin", code: "BJ", dialCode: "+229", flag: "🇧🇯", isAfrican: true },
  { name: "Botswana", code: "BW", dialCode: "+267", flag: "🇧🇼", isAfrican: true },
  { name: "Burkina Faso", code: "BF", dialCode: "+226", flag: "🇧🇫", isAfrican: true },
  { name: "Burundi", code: "BI", dialCode: "+257", flag: "🇧🇮", isAfrican: true },
  { name: "Cameroun", code: "CM", dialCode: "+237", flag: "🇨🇲", isAfrican: true },
  { name: "Cap-Vert", code: "CV", dialCode: "+238", flag: "🇨🇻", isAfrican: true },
  { name: "République centrafricaine", code: "CF", dialCode: "+236", flag: "🇨🇫", isAfrican: true },
  { name: "Comores", code: "KM", dialCode: "+269", flag: "🇰🇲", isAfrican: true },
  { name: "Congo", code: "CG", dialCode: "+242", flag: "🇨🇬", isAfrican: true },
  { name: "République démocratique du Congo", code: "CD", dialCode: "+243", flag: "🇨🇩", isAfrican: true },
  { name: "Côte d'Ivoire", code: "CI", dialCode: "+225", flag: "🇨🇮", isAfrican: true },
  { name: "Djibouti", code: "DJ", dialCode: "+253", flag: "🇩🇯", isAfrican: true },
  { name: "Égypte", code: "EG", dialCode: "+20", flag: "🇪🇬", isAfrican: true },
  { name: "Érythrée", code: "ER", dialCode: "+291", flag: "🇪🇷", isAfrican: true },
  { name: "Eswatini", code: "SZ", dialCode: "+268", flag: "🇸🇿", isAfrican: true },
  { name: "Éthiopie", code: "ET", dialCode: "+251", flag: "🇪🇹", isAfrican: true },
  { name: "Gabon", code: "GA", dialCode: "+241", flag: "🇬🇦", isAfrican: true },
  { name: "Gambie", code: "GM", dialCode: "+220", flag: "🇬🇲", isAfrican: true },
  { name: "Ghana", code: "GH", dialCode: "+233", flag: "🇬🇭", isAfrican: true },
  { name: "Guinée", code: "GN", dialCode: "+224", flag: "🇬🇳", isAfrican: true },
  { name: "Guinée-Bissau", code: "GW", dialCode: "+245", flag: "🇬🇼", isAfrican: true },
  { name: "Guinée équatoriale", code: "GQ", dialCode: "+240", flag: "🇬🇶", isAfrican: true },
  { name: "Kenya", code: "KE", dialCode: "+254", flag: "🇰🇪", isAfrican: true },
  { name: "Lesotho", code: "LS", dialCode: "+266", flag: "🇱🇸", isAfrican: true },
  { name: "Libéria", code: "LR", dialCode: "+231", flag: "🇱🇷", isAfrican: true },
  { name: "Libye", code: "LY", dialCode: "+218", flag: "🇱🇾", isAfrican: true },
  { name: "Madagascar", code: "MG", dialCode: "+261", flag: "🇲🇬", isAfrican: true },
  { name: "Malawi", code: "MW", dialCode: "+265", flag: "🇲🇼", isAfrican: true },
  { name: "Mali", code: "ML", dialCode: "+223", flag: "🇲🇱", isAfrican: true },
  { name: "Maroc", code: "MA", dialCode: "+212", flag: "🇲🇦", isAfrican: true },
  { name: "Maurice", code: "MU", dialCode: "+230", flag: "🇲🇺", isAfrican: true },
  { name: "Mauritanie", code: "MR", dialCode: "+222", flag: "🇲🇷", isAfrican: true },
  { name: "Mozambique", code: "MZ", dialCode: "+258", flag: "🇲🇿", isAfrican: true },
  { name: "Namibie", code: "NA", dialCode: "+264", flag: "🇳🇦", isAfrican: true },
  { name: "Niger", code: "NE", dialCode: "+227", flag: "🇳🇪", isAfrican: true },
  { name: "Nigeria", code: "NG", dialCode: "+234", flag: "🇳🇬", isAfrican: true },
  { name: "Ouganda", code: "UG", dialCode: "+256", flag: "🇺🇬", isAfrican: true },
  { name: "Rwanda", code: "RW", dialCode: "+250", flag: "🇷🇼", isAfrican: true },
  { name: "Sao Tomé-et-Principe", code: "ST", dialCode: "+239", flag: "🇸🇹", isAfrican: true },
  { name: "Sénégal", code: "SN", dialCode: "+221", flag: "🇸🇳", isAfrican: true },
  { name: "Seychelles", code: "SC", dialCode: "+248", flag: "🇸🇨", isAfrican: true },
  { name: "Sierra Leone", code: "SL", dialCode: "+232", flag: "🇸🇱", isAfrican: true },
  { name: "Somalie", code: "SO", dialCode: "+252", flag: "🇸🇴", isAfrican: true },
  { name: "Soudan", code: "SD", dialCode: "+249", flag: "🇸🇩", isAfrican: true },
  { name: "Soudan du Sud", code: "SS", dialCode: "+211", flag: "🇸🇸", isAfrican: true },
  { name: "Tanzanie", code: "TZ", dialCode: "+255", flag: "🇹🇿", isAfrican: true },
  { name: "Tchad", code: "TD", dialCode: "+235", flag: "🇹🇩", isAfrican: true },
  { name: "Togo", code: "TG", dialCode: "+228", flag: "🇹🇬", isAfrican: true },
  { name: "Tunisie", code: "TN", dialCode: "+216", flag: "🇹🇳", isAfrican: true },
  { name: "Zambie", code: "ZM", dialCode: "+260", flag: "🇿🇲", isAfrican: true },
  { name: "Zimbabwe", code: "ZW", dialCode: "+263", flag: "🇿🇼", isAfrican: true },
  
  // Autres pays populaires (non africains)
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Roumanie", code: "RO", dialCode: "+40", flag: "🇷🇴" },
  { name: "Italie", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Espagne", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Allemagne", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "Belgique", code: "BE", dialCode: "+32", flag: "🇧🇪" },
  { name: "Suisse", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Portugal", code: "PT", dialCode: "+351", flag: "🇵🇹" },
  { name: "Royaume-Uni", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "États-Unis", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "Pays-Bas", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "Autriche", code: "AT", dialCode: "+43", flag: "🇦🇹" },
  { name: "Suède", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "Norvège", code: "NO", dialCode: "+47", flag: "🇳🇴" },
  { name: "Danemark", code: "DK", dialCode: "+45", flag: "🇩🇰" },
  
  // Autres pays du monde
  { name: "Afghanistan", code: "AF", dialCode: "+93", flag: "🇦🇫" },
  { name: "Arabie saoudite", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "Argentine", code: "AR", dialCode: "+54", flag: "🇦🇷" },
  { name: "Australie", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Brésil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "Chili", code: "CL", dialCode: "+56", flag: "🇨🇱" },
  { name: "Chine", code: "CN", dialCode: "+86", flag: "🇨🇳" },
  { name: "Colombie", code: "CO", dialCode: "+57", flag: "🇨🇴" },
  { name: "Corée du Sud", code: "KR", dialCode: "+82", flag: "🇰🇷" },
  { name: "Inde", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "Indonésie", code: "ID", dialCode: "+62", flag: "🇮🇩" },
  { name: "Japon", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Mexique", code: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "Nouvelle-Zélande", code: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { name: "Russie", code: "RU", dialCode: "+7", flag: "🇷🇺" },
  { name: "Thaïlande", code: "TH", dialCode: "+66", flag: "🇹🇭" },
  { name: "Turquie", code: "TR", dialCode: "+90", flag: "🇹🇷" },
];

export function getCountryByCode(code: string): Country | undefined {
  return countries.find(country => country.code === code);
}

// Filtrer les pays africains seulement
export function getAfricanCountries(): Country[] {
  return countries.filter(country => country.isAfrican === true);
}

// Obtenir tous les pays
export function getAllCountries(): Country[] {
  return countries;
}

// Obtenir les indicatifs téléphoniques avec priorité aux pays africains
export function getPhoneIndicatives(): Country[] {
  const africanCountries = countries.filter(country => country.isAfrican === true);
  const popularCountries = countries.filter(country => 
    !country.isAfrican && ['FR', 'RO', 'IT', 'ES', 'DE', 'BE', 'CH', 'PT', 'GB', 'CA', 'US'].includes(country.code)
  );
  const otherCountries = countries.filter(country => 
    !country.isAfrican && !['FR', 'RO', 'IT', 'ES', 'DE', 'BE', 'CH', 'PT', 'GB', 'CA', 'US'].includes(country.code)
  );
  
  return [...africanCountries, ...popularCountries, ...otherCountries];
}
