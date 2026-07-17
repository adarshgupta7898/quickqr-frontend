export const QR_TYPES = [
  { value: "URL",     label: "URL",     hint: "Website link"      },
  { value: "TEXT",    label: "Text",    hint: "Plain text"        },
  { value: "EMAIL",   label: "Email",   hint: "Email address"     },
  { value: "WIFI",    label: "WiFi",    hint: "WiFi credentials"  },
  { value: "CONTACT", label: "Contact", hint: "Contact / vCard"   },
];

export const QR_TYPE_BADGE = {
  URL:     { bg: "bg-blue-100",   text: "text-blue-700"   },
  TEXT:    { bg: "bg-slate-100",  text: "text-slate-700"  },
  EMAIL:   { bg: "bg-violet-100", text: "text-violet-700" },
  WIFI:    { bg: "bg-emerald-100",text: "text-emerald-700"},
  CONTACT: { bg: "bg-orange-100", text: "text-orange-700" },
};

export const QR_PLACEHOLDER = {
  URL:     "https://example.com",
  TEXT:    "Enter your text here…",
  EMAIL:   "user@example.com",
  WIFI:    "SSID:MyNetwork;T:WPA;P:mypassword;;",
  CONTACT: "BEGIN:VCARD\nFN:John Doe\nTEL:+1234567890\nEMAIL:john@example.com\nEND:VCARD",
};
