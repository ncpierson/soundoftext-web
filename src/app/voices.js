
const voices = [
  { key: "af-ZA", value: "Afrikaans" },
  { key: "sq",    value: "Albanian" },
  { key: "ar-AE", value: "Arabic" },
  { key: "hy",    value: "Armenian" },
  { key: "bn",    value: "Bengali" },
  { key: "bs",    value: "Bosnian" },
  { key: "ca-ES", value: "Catalan" },
  { key: "yue-Hant-HK", value: "Chinese, Cantonese (Traditional)" },
  { key: "cmn-Hans-CN", value: "Chinese, Mandarin (Simplified)" },
  { key: "hr-HR", value: "Croatian" },
  { key: "cs-CZ", value: "Czech" },
  { key: "da-DK", value: "Danish" },
  { key: "nl-NL", value: "Dutch" },
  { key: "en-AU", value: "English (Australia)" },
  { key: "en-GB", value: "English (United Kingdom)" },
  { key: "en-US", value: "English (United States)" },
  { key: "eo",    value: "Esperanto" },
  { key: "fi-FI", value: "Finnish" },
  { key: "fr-FR", value: "French" },
  { key: "de-DE", value: "German" },
  { key: "el-GR", value: "Greek" },
  { key: "hi-IN", value: "Hindi" },
  { key: "hu-HU", value: "Hungarian" },
  { key: "is-IS", value: "Icelandic" },
  { key: "id-ID", value: "Indonesian" },
  { key: "it-IT", value: "Italian" },
  { key: "ja-JP", value: "Japanese (Japan)" },
  { key: "km",    value: "Khmer" },
  { key: "ko-KR", value: "Korean" },
  { key: "la",    value: "Latin" },
  { key: "lv",    value: "Latvian" },
  { key: "mk",    value: "Macedonian" },
  { key: "ne",    value: "Nepali" },
  { key: "nb-NO", value: "Norwegian" },
  { key: "pl-PL", value: "Polish" },
  { key: "pt-BR", value: "Portuguese" },
  { key: "ro-RO", value: "Romanian" },
  { key: "ru-RU", value: "Russian" },
  { key: "sr-RS", value: "Serbian" },
  { key: "si",    value: "Sinhala" },
  { key: "sk-SK", value: "Slovak" },
  { key: "es-MX", value: "Spanish (Mexico)" },
  { key: "es-ES", value: "Spanish (Spain)" },
  { key: "sw",    value: "Swahili" },
  { key: "sv-SE", value: "Swedish" },
  { key: "ta",	  value: "Tamil" },
  { key: "th-TH", value: "Thai" },
  { key: "tr-TR", value: "Turkish" },
  { key: "uk-UA", value: "Ukrainian" },
  { key: "vi-VN", value: "Vietnamese" },
  { key: "cy",    value: "Welsh" }
];

function lookupVoice(key) {
  const voice = voices.find(v => v.key === key);
  return voice ? voice.value : null;
}

export { lookupVoice };

export default voices;
