
async function detectUserLanguage() {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const state = data.region;
  
      const stateToLangMap = {
        "Maharashtra": "mr",
        "West Bengal": "bn",
        "Tamil Nadu": "ta",
        "Telangana": "te",
        "Karnataka": "kn",
        "Gujarat": "gu",
        "Kerala": "ml",
        "Punjab": "pa",
        "Uttar Pradesh": "hi",
        "Uttrakhand":"hi",
        "Delhi": "hi",
        "Bihar": "hi",
        "Madhya Pradesh": "hi",
        "Rajasthan": "hi",
        "Haryana": "hi"
      };
  
      console.log("Detected State:", state); // Check if the state is coming correctly
      return stateToLangMap[state] || "en";  // Default to English if no match
    } catch (err) {
      console.error("Location detection failed:", err);
      return "en"; // Default to English in case of error
    }
  }
  
  // 2. Inject Google Translate Script
  function loadGoogleTranslateScript() {
    const script = document.createElement("script");
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(script);
  }
  
  // 3. Initialize Google Translate and Auto-Select Language
  window.googleTranslateElementInit = async function () {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,hi,mr,ta,te,kn,bn,gu,ml,pa',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  
    const userLang = await detectUserLanguage();
    console.log("User's language:", userLang); // Log the language for debugging
  
    // Wait for the dropdown to appear and then set value
    const interval = setInterval(() => {
      const dropdown = document.querySelector(".goog-te-combo");
      if (dropdown) {
        dropdown.value = userLang;
        dropdown.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 500); // Check for dropdown every 500ms
  };
  
  // 4. Load everything after DOM
  document.addEventListener("DOMContentLoaded", () => {
    loadGoogleTranslateScript();
  });
  