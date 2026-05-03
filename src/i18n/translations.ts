// Translations for 30+ languages. English first as requested.
export interface Translation {
  bismillah: string;
  tagline: string; // "Dëgjo · Mediton · Shkarko"
  createdBy: string; // "Created by DS Interactive · Dashmir Sallahi"
  surahs: string;
  reciters: string;
  searchSurah: string;
  ayahs: string;
  downloadSurah: string;
  meccan: string;
  medinan: string;
  language: string;
  audioFailed: string;
  downloaded: string;
  downloadFailed: string;
  playFailed: string;
}

export interface Language {
  code: string;
  name: string; // native name
  english: string;
  t: Translation;
}

const CREATED = "Created by DS Interactive · Dashmir Sallahi";

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", english: "English", t: {
    bismillah: "Bismillah", tagline: "Listen · Meditate · Download", createdBy: CREATED,
    surahs: "Surahs", reciters: "Reciters", searchSurah: "Search Surah...",
    ayahs: "ayahs", downloadSurah: "Download Surah", meccan: "Meccan", medinan: "Medinan",
    language: "Language", audioFailed: "Audio failed to load. Try another reciter.",
    downloaded: "Downloaded", downloadFailed: "Download failed.", playFailed: "Could not play audio. Try again.",
  }},
  { code: "ar", name: "العربية", english: "Arabic", t: {
    bismillah: "بسم الله", tagline: "استمع · تأمل · حمّل", createdBy: "من إنشاء DS Interactive · Dashmir Sallahi",
    surahs: "السور", reciters: "القراء", searchSurah: "ابحث عن سورة...",
    ayahs: "آيات", downloadSurah: "تحميل السورة", meccan: "مكية", medinan: "مدنية",
    language: "اللغة", audioFailed: "فشل تحميل الصوت. جرب قارئاً آخر.",
    downloaded: "تم التحميل", downloadFailed: "فشل التحميل.", playFailed: "تعذر تشغيل الصوت. حاول مرة أخرى.",
  }},
  { code: "sq", name: "Shqip", english: "Albanian", t: {
    bismillah: "Bismillah", tagline: "Dëgjo · Mediton · Shkarko", createdBy: "Krijuar nga DS Interactive · Dashmir Sallahi",
    surahs: "Suret", reciters: "Recitues", searchSurah: "Kërko Sure...",
    ayahs: "ajete", downloadSurah: "Shkarko Suren", meccan: "Mekase", medinan: "Medinase",
    language: "Gjuha", audioFailed: "Audio nuk u ngarkua. Provoni një recitues tjetër.",
    downloaded: "U shkarkua", downloadFailed: "Shkarkimi dështoi.", playFailed: "Nuk u luajt audio. Provoni përsëri.",
  }},
  { code: "tr", name: "Türkçe", english: "Turkish", t: {
    bismillah: "Bismillah", tagline: "Dinle · Düşün · İndir", createdBy: "DS Interactive · Dashmir Sallahi tarafından oluşturuldu",
    surahs: "Sureler", reciters: "Kariler", searchSurah: "Sure ara...",
    ayahs: "ayet", downloadSurah: "Sureyi İndir", meccan: "Mekkî", medinan: "Medenî",
    language: "Dil", audioFailed: "Ses yüklenemedi. Başka bir kari deneyin.",
    downloaded: "İndirildi", downloadFailed: "İndirme başarısız.", playFailed: "Ses çalınamadı. Tekrar deneyin.",
  }},
  { code: "ur", name: "اردو", english: "Urdu", t: {
    bismillah: "بسم اللہ", tagline: "سنیں · غور کریں · ڈاؤنلوڈ کریں", createdBy: "DS Interactive · Dashmir Sallahi کی تخلیق",
    surahs: "سورتیں", reciters: "قاری", searchSurah: "سورۃ تلاش کریں...",
    ayahs: "آیات", downloadSurah: "سورۃ ڈاؤنلوڈ کریں", meccan: "مکی", medinan: "مدنی",
    language: "زبان", audioFailed: "آڈیو لوڈ نہیں ہوا۔ دوسرا قاری منتخب کریں۔",
    downloaded: "ڈاؤنلوڈ ہو گیا", downloadFailed: "ڈاؤنلوڈ ناکام۔", playFailed: "آڈیو نہیں چل سکا۔ دوبارہ کوشش کریں۔",
  }},
  { code: "id", name: "Bahasa Indonesia", english: "Indonesian", t: {
    bismillah: "Bismillah", tagline: "Dengar · Renungkan · Unduh", createdBy: "Dibuat oleh DS Interactive · Dashmir Sallahi",
    surahs: "Surah", reciters: "Qari", searchSurah: "Cari Surah...",
    ayahs: "ayat", downloadSurah: "Unduh Surah", meccan: "Makkiyah", medinan: "Madaniyah",
    language: "Bahasa", audioFailed: "Audio gagal dimuat. Coba qari lain.",
    downloaded: "Diunduh", downloadFailed: "Unduhan gagal.", playFailed: "Tidak dapat memutar audio.",
  }},
  { code: "ms", name: "Bahasa Melayu", english: "Malay", t: {
    bismillah: "Bismillah", tagline: "Dengar · Renung · Muat Turun", createdBy: "Dicipta oleh DS Interactive · Dashmir Sallahi",
    surahs: "Surah", reciters: "Qari", searchSurah: "Cari Surah...",
    ayahs: "ayat", downloadSurah: "Muat Turun Surah", meccan: "Makkiyah", medinan: "Madaniyah",
    language: "Bahasa", audioFailed: "Audio gagal dimuat. Cuba qari lain.",
    downloaded: "Dimuat turun", downloadFailed: "Muat turun gagal.", playFailed: "Tidak dapat main audio.",
  }},
  { code: "fr", name: "Français", english: "French", t: {
    bismillah: "Bismillah", tagline: "Écouter · Méditer · Télécharger", createdBy: "Créé par DS Interactive · Dashmir Sallahi",
    surahs: "Sourates", reciters: "Récitateurs", searchSurah: "Chercher une sourate...",
    ayahs: "versets", downloadSurah: "Télécharger la sourate", meccan: "Mecquoise", medinan: "Médinoise",
    language: "Langue", audioFailed: "Échec du chargement audio. Essayez un autre récitateur.",
    downloaded: "Téléchargé", downloadFailed: "Échec du téléchargement.", playFailed: "Lecture impossible. Réessayez.",
  }},
  { code: "es", name: "Español", english: "Spanish", t: {
    bismillah: "Bismillah", tagline: "Escucha · Medita · Descarga", createdBy: "Creado por DS Interactive · Dashmir Sallahi",
    surahs: "Suras", reciters: "Recitadores", searchSurah: "Buscar sura...",
    ayahs: "aleyas", downloadSurah: "Descargar sura", meccan: "Mecana", medinan: "Medinense",
    language: "Idioma", audioFailed: "Error al cargar audio. Pruebe otro recitador.",
    downloaded: "Descargado", downloadFailed: "Descarga fallida.", playFailed: "No se pudo reproducir.",
  }},
  { code: "de", name: "Deutsch", english: "German", t: {
    bismillah: "Bismillah", tagline: "Hören · Meditieren · Herunterladen", createdBy: "Erstellt von DS Interactive · Dashmir Sallahi",
    surahs: "Suren", reciters: "Rezitatoren", searchSurah: "Sure suchen...",
    ayahs: "Verse", downloadSurah: "Sure herunterladen", meccan: "Mekkanisch", medinan: "Medinensisch",
    language: "Sprache", audioFailed: "Audio konnte nicht geladen werden.",
    downloaded: "Heruntergeladen", downloadFailed: "Download fehlgeschlagen.", playFailed: "Wiedergabe fehlgeschlagen.",
  }},
  { code: "it", name: "Italiano", english: "Italian", t: {
    bismillah: "Bismillah", tagline: "Ascolta · Medita · Scarica", createdBy: "Creato da DS Interactive · Dashmir Sallahi",
    surahs: "Sure", reciters: "Recitatori", searchSurah: "Cerca sura...",
    ayahs: "versetti", downloadSurah: "Scarica sura", meccan: "Meccana", medinan: "Medinese",
    language: "Lingua", audioFailed: "Audio non caricato.", downloaded: "Scaricato",
    downloadFailed: "Download fallito.", playFailed: "Riproduzione non riuscita.",
  }},
  { code: "pt", name: "Português", english: "Portuguese", t: {
    bismillah: "Bismillah", tagline: "Ouvir · Meditar · Baixar", createdBy: "Criado por DS Interactive · Dashmir Sallahi",
    surahs: "Suras", reciters: "Recitadores", searchSurah: "Buscar sura...",
    ayahs: "versículos", downloadSurah: "Baixar sura", meccan: "Mecana", medinan: "Medinense",
    language: "Idioma", audioFailed: "Falha ao carregar áudio.", downloaded: "Baixado",
    downloadFailed: "Download falhou.", playFailed: "Não foi possível reproduzir.",
  }},
  { code: "ru", name: "Русский", english: "Russian", t: {
    bismillah: "Бисмиллях", tagline: "Слушай · Размышляй · Скачай", createdBy: "Создано DS Interactive · Dashmir Sallahi",
    surahs: "Суры", reciters: "Чтецы", searchSurah: "Поиск суры...",
    ayahs: "аяты", downloadSurah: "Скачать суру", meccan: "Мекканская", medinan: "Мединская",
    language: "Язык", audioFailed: "Не удалось загрузить аудио.", downloaded: "Загружено",
    downloadFailed: "Ошибка загрузки.", playFailed: "Не удалось воспроизвести.",
  }},
  { code: "fa", name: "فارسی", english: "Persian", t: {
    bismillah: "بسم الله", tagline: "گوش بده · تأمل کن · دانلود کن", createdBy: "ساخته شده توسط DS Interactive · Dashmir Sallahi",
    surahs: "سوره‌ها", reciters: "قاریان", searchSurah: "جستجوی سوره...",
    ayahs: "آیات", downloadSurah: "دانلود سوره", meccan: "مکی", medinan: "مدنی",
    language: "زبان", audioFailed: "بارگذاری صدا ناموفق بود.", downloaded: "دانلود شد",
    downloadFailed: "دانلود ناموفق.", playFailed: "پخش ممکن نشد.",
  }},
  { code: "bn", name: "বাংলা", english: "Bengali", t: {
    bismillah: "বিসমিল্লাহ", tagline: "শুনুন · ভাবুন · ডাউনলোড", createdBy: "DS Interactive · Dashmir Sallahi দ্বারা তৈরি",
    surahs: "সূরা", reciters: "ক্বারী", searchSurah: "সূরা খুঁজুন...",
    ayahs: "আয়াত", downloadSurah: "সূরা ডাউনলোড", meccan: "মাক্কী", medinan: "মাদানী",
    language: "ভাষা", audioFailed: "অডিও লোড ব্যর্থ।", downloaded: "ডাউনলোড হয়েছে",
    downloadFailed: "ডাউনলোড ব্যর্থ।", playFailed: "অডিও চালানো যায়নি।",
  }},
  { code: "hi", name: "हिन्दी", english: "Hindi", t: {
    bismillah: "बिस्मिल्लाह", tagline: "सुनें · मनन करें · डाउनलोड करें", createdBy: "DS Interactive · Dashmir Sallahi द्वारा निर्मित",
    surahs: "सूरह", reciters: "क़ारी", searchSurah: "सूरह खोजें...",
    ayahs: "आयतें", downloadSurah: "सूरह डाउनलोड करें", meccan: "मक्की", medinan: "मदनी",
    language: "भाषा", audioFailed: "ऑडियो लोड विफल।", downloaded: "डाउनलोड हुआ",
    downloadFailed: "डाउनलोड विफल।", playFailed: "ऑडियो नहीं चल सका।",
  }},
  { code: "zh", name: "中文", english: "Chinese", t: {
    bismillah: "以真主之名", tagline: "聆听 · 沉思 · 下载", createdBy: "由 DS Interactive · Dashmir Sallahi 创作",
    surahs: "章", reciters: "诵读者", searchSurah: "搜索章节...",
    ayahs: "节", downloadSurah: "下载章节", meccan: "麦加", medinan: "麦地那",
    language: "语言", audioFailed: "音频加载失败。", downloaded: "已下载",
    downloadFailed: "下载失败。", playFailed: "无法播放音频。",
  }},
  { code: "ja", name: "日本語", english: "Japanese", t: {
    bismillah: "ビスミッラー", tagline: "聴く · 瞑想 · ダウンロード", createdBy: "DS Interactive · Dashmir Sallahi 制作",
    surahs: "スーラ", reciters: "朗誦者", searchSurah: "スーラを検索...",
    ayahs: "節", downloadSurah: "スーラをダウンロード", meccan: "メッカ", medinan: "メディナ",
    language: "言語", audioFailed: "音声の読み込みに失敗しました。", downloaded: "ダウンロード完了",
    downloadFailed: "ダウンロード失敗。", playFailed: "再生できませんでした。",
  }},
  { code: "ko", name: "한국어", english: "Korean", t: {
    bismillah: "비스밀라", tagline: "듣기 · 명상 · 다운로드", createdBy: "DS Interactive · Dashmir Sallahi 제작",
    surahs: "수라", reciters: "낭송자", searchSurah: "수라 검색...",
    ayahs: "구절", downloadSurah: "수라 다운로드", meccan: "메카", medinan: "메디나",
    language: "언어", audioFailed: "오디오 로드 실패.", downloaded: "다운로드 완료",
    downloadFailed: "다운로드 실패.", playFailed: "재생할 수 없습니다.",
  }},
  { code: "nl", name: "Nederlands", english: "Dutch", t: {
    bismillah: "Bismillah", tagline: "Luister · Mediteer · Download", createdBy: "Gemaakt door DS Interactive · Dashmir Sallahi",
    surahs: "Soera's", reciters: "Reciteurs", searchSurah: "Zoek soera...",
    ayahs: "verzen", downloadSurah: "Soera downloaden", meccan: "Mekkaans", medinan: "Medinees",
    language: "Taal", audioFailed: "Audio niet geladen.", downloaded: "Gedownload",
    downloadFailed: "Download mislukt.", playFailed: "Kan audio niet afspelen.",
  }},
  { code: "pl", name: "Polski", english: "Polish", t: {
    bismillah: "Bismillah", tagline: "Słuchaj · Medytuj · Pobierz", createdBy: "Stworzone przez DS Interactive · Dashmir Sallahi",
    surahs: "Sury", reciters: "Recytatorzy", searchSurah: "Szukaj sury...",
    ayahs: "wersety", downloadSurah: "Pobierz surę", meccan: "Mekkańska", medinan: "Medyńska",
    language: "Język", audioFailed: "Nie udało się załadować audio.", downloaded: "Pobrano",
    downloadFailed: "Pobieranie nie powiodło się.", playFailed: "Nie można odtworzyć.",
  }},
  { code: "sv", name: "Svenska", english: "Swedish", t: {
    bismillah: "Bismillah", tagline: "Lyssna · Meditera · Ladda ner", createdBy: "Skapad av DS Interactive · Dashmir Sallahi",
    surahs: "Suror", reciters: "Recitatorer", searchSurah: "Sök sura...",
    ayahs: "verser", downloadSurah: "Ladda ner sura", meccan: "Meckansk", medinan: "Medinsk",
    language: "Språk", audioFailed: "Ljudet kunde inte laddas.", downloaded: "Nedladdad",
    downloadFailed: "Nedladdning misslyckades.", playFailed: "Kunde inte spela.",
  }},
  { code: "no", name: "Norsk", english: "Norwegian", t: {
    bismillah: "Bismillah", tagline: "Lytt · Mediter · Last ned", createdBy: "Laget av DS Interactive · Dashmir Sallahi",
    surahs: "Suraer", reciters: "Resitatører", searchSurah: "Søk sura...",
    ayahs: "vers", downloadSurah: "Last ned sura", meccan: "Mekkansk", medinan: "Medinsk",
    language: "Språk", audioFailed: "Lyd kunne ikke lastes.", downloaded: "Lastet ned",
    downloadFailed: "Nedlasting mislyktes.", playFailed: "Kunne ikke spille.",
  }},
  { code: "da", name: "Dansk", english: "Danish", t: {
    bismillah: "Bismillah", tagline: "Lyt · Mediter · Download", createdBy: "Skabt af DS Interactive · Dashmir Sallahi",
    surahs: "Suraer", reciters: "Recitatorer", searchSurah: "Søg sura...",
    ayahs: "vers", downloadSurah: "Download sura", meccan: "Mekkansk", medinan: "Medinensisk",
    language: "Sprog", audioFailed: "Lyd kunne ikke indlæses.", downloaded: "Downloadet",
    downloadFailed: "Download mislykkedes.", playFailed: "Kunne ikke afspille.",
  }},
  { code: "fi", name: "Suomi", english: "Finnish", t: {
    bismillah: "Bismillah", tagline: "Kuuntele · Mietiskele · Lataa", createdBy: "Luonut DS Interactive · Dashmir Sallahi",
    surahs: "Suurat", reciters: "Lausujat", searchSurah: "Etsi suuraa...",
    ayahs: "jakeet", downloadSurah: "Lataa suura", meccan: "Mekkalainen", medinan: "Medinalainen",
    language: "Kieli", audioFailed: "Äänen lataus epäonnistui.", downloaded: "Ladattu",
    downloadFailed: "Lataus epäonnistui.", playFailed: "Toisto epäonnistui.",
  }},
  { code: "el", name: "Ελληνικά", english: "Greek", t: {
    bismillah: "Μπισμιλλάχ", tagline: "Άκου · Διαλογίσου · Κατέβασε", createdBy: "Δημιουργήθηκε από DS Interactive · Dashmir Sallahi",
    surahs: "Σούρες", reciters: "Απαγγελείς", searchSurah: "Αναζήτηση σούρας...",
    ayahs: "στίχοι", downloadSurah: "Λήψη σούρας", meccan: "Μεκκανική", medinan: "Μεντίνσκι",
    language: "Γλώσσα", audioFailed: "Αποτυχία φόρτωσης ήχου.", downloaded: "Έγινε λήψη",
    downloadFailed: "Αποτυχία λήψης.", playFailed: "Αδυναμία αναπαραγωγής.",
  }},
  { code: "he", name: "עברית", english: "Hebrew", t: {
    bismillah: "בשם אללה", tagline: "האזן · הרהר · הורד", createdBy: "נוצר על ידי DS Interactive · Dashmir Sallahi",
    surahs: "סורות", reciters: "קוראים", searchSurah: "חפש סורה...",
    ayahs: "פסוקים", downloadSurah: "הורד סורה", meccan: "מכית", medinan: "מדינית",
    language: "שפה", audioFailed: "טעינת השמע נכשלה.", downloaded: "הורד",
    downloadFailed: "ההורדה נכשלה.", playFailed: "לא ניתן לנגן.",
  }},
  { code: "uk", name: "Українська", english: "Ukrainian", t: {
    bismillah: "Бісміллях", tagline: "Слухай · Розмірковуй · Завантаж", createdBy: "Створено DS Interactive · Dashmir Sallahi",
    surahs: "Сури", reciters: "Читці", searchSurah: "Пошук сури...",
    ayahs: "аяти", downloadSurah: "Завантажити суру", meccan: "Мекканська", medinan: "Мединська",
    language: "Мова", audioFailed: "Не вдалося завантажити аудіо.", downloaded: "Завантажено",
    downloadFailed: "Помилка завантаження.", playFailed: "Не вдалося відтворити.",
  }},
  { code: "ro", name: "Română", english: "Romanian", t: {
    bismillah: "Bismillah", tagline: "Ascultă · Meditează · Descarcă", createdBy: "Creat de DS Interactive · Dashmir Sallahi",
    surahs: "Sure", reciters: "Recitatori", searchSurah: "Caută sura...",
    ayahs: "versete", downloadSurah: "Descarcă sura", meccan: "Meccană", medinan: "Medinensă",
    language: "Limba", audioFailed: "Încărcarea audio a eșuat.", downloaded: "Descărcat",
    downloadFailed: "Descărcare eșuată.", playFailed: "Redarea a eșuat.",
  }},
  { code: "hu", name: "Magyar", english: "Hungarian", t: {
    bismillah: "Bismillah", tagline: "Hallgasd · Elmélkedj · Töltsd le", createdBy: "Készítette: DS Interactive · Dashmir Sallahi",
    surahs: "Szúrák", reciters: "Recitálók", searchSurah: "Szúra keresése...",
    ayahs: "versek", downloadSurah: "Szúra letöltése", meccan: "Mekkai", medinan: "Medinai",
    language: "Nyelv", audioFailed: "Hang betöltése sikertelen.", downloaded: "Letöltve",
    downloadFailed: "Letöltés sikertelen.", playFailed: "Nem sikerült lejátszani.",
  }},
  { code: "cs", name: "Čeština", english: "Czech", t: {
    bismillah: "Bismillah", tagline: "Poslouchej · Medituj · Stáhni", createdBy: "Vytvořeno DS Interactive · Dashmir Sallahi",
    surahs: "Súry", reciters: "Recitátoři", searchSurah: "Hledat súru...",
    ayahs: "verše", downloadSurah: "Stáhnout súru", meccan: "Mekkánská", medinan: "Medínská",
    language: "Jazyk", audioFailed: "Načtení zvuku selhalo.", downloaded: "Staženo",
    downloadFailed: "Stahování selhalo.", playFailed: "Přehrávání selhalo.",
  }},
  { code: "th", name: "ไทย", english: "Thai", t: {
    bismillah: "บิสมิลลาห์", tagline: "ฟัง · ใคร่ครวญ · ดาวน์โหลด", createdBy: "สร้างโดย DS Interactive · Dashmir Sallahi",
    surahs: "ซูเราะห์", reciters: "ผู้อ่าน", searchSurah: "ค้นหาซูเราะห์...",
    ayahs: "อายัต", downloadSurah: "ดาวน์โหลดซูเราะห์", meccan: "มักกี", medinan: "มะดะนี",
    language: "ภาษา", audioFailed: "โหลดเสียงล้มเหลว", downloaded: "ดาวน์โหลดแล้ว",
    downloadFailed: "ดาวน์โหลดล้มเหลว", playFailed: "เล่นไม่ได้",
  }},
  { code: "vi", name: "Tiếng Việt", english: "Vietnamese", t: {
    bismillah: "Bismillah", tagline: "Nghe · Suy ngẫm · Tải xuống", createdBy: "Tạo bởi DS Interactive · Dashmir Sallahi",
    surahs: "Chương", reciters: "Người đọc", searchSurah: "Tìm chương...",
    ayahs: "câu", downloadSurah: "Tải chương", meccan: "Mecca", medinan: "Medina",
    language: "Ngôn ngữ", audioFailed: "Không tải được âm thanh.", downloaded: "Đã tải",
    downloadFailed: "Tải xuống thất bại.", playFailed: "Không thể phát.",
  }},
  { code: "sw", name: "Kiswahili", english: "Swahili", t: {
    bismillah: "Bismillah", tagline: "Sikiliza · Tafakari · Pakua", createdBy: "Imeundwa na DS Interactive · Dashmir Sallahi",
    surahs: "Sura", reciters: "Wasomaji", searchSurah: "Tafuta sura...",
    ayahs: "aya", downloadSurah: "Pakua sura", meccan: "Makkah", medinan: "Madina",
    language: "Lugha", audioFailed: "Sauti haikupakia.", downloaded: "Imepakuliwa",
    downloadFailed: "Upakuaji umeshindwa.", playFailed: "Haikuweza kucheza.",
  }},
  { code: "ha", name: "Hausa", english: "Hausa", t: {
    bismillah: "Bismillah", tagline: "Saurara · Yi tunani · Sauke", createdBy: "Wanda DS Interactive · Dashmir Sallahi suka kirkira",
    surahs: "Surori", reciters: "Masu karatu", searchSurah: "Nemi sura...",
    ayahs: "ayoyi", downloadSurah: "Sauke sura", meccan: "Makka", medinan: "Madina",
    language: "Harshe", audioFailed: "Sauti bai loda ba.", downloaded: "An sauke",
    downloadFailed: "Saukewa ya gaza.", playFailed: "Ba a iya kunna ba.",
  }},
];

export const DEFAULT_LANG = "en";
