/**
 * ==========================================================================
 * AROGYA MITRA (ఆరోగ్య మిత్ర) — APPLICATION LOGIC & STATE ENGINE
 * Home Healthcare Platform for Rural & Urban Andhra Pradesh
 * ==========================================================================
 */

(function () {
  'use strict';

  // ========================================================================
  // 1. BILINGUAL TRANSLATION DICTIONARY (ENGLISH & TELUGU)
  // ========================================================================
  const TRANSLATIONS = {
    en: {
      emergency_247: "AP 24/7 Health Helplines:",
      ambulance: "Ambulance",
      medical_advice: "Medical Advice",
      maternal_care: "Thalli-Bidda",
      emergency_sos: "SOS EMERGENCY",
      tagline: "Rural & Urban Home Healthcare • Andhra Pradesh",
      service_location: "Location",
      village_resident: "Grama Resident",
      nav_main_menu: "HEALTHCARE SERVICES",
      tab_dashboard: "Home Overview",
      tab_book_visit: "Book Home Visit",
      tab_medicines: "Medicine Reminders",
      tab_teleconsult: "Teleconsultation",
      tab_records: "Aarogya Vault (Records)",
      tab_diagnostics: "Home Lab & ECG",
      tab_maternal: "Maternal & Child Care",
      tab_elder: "Elder Care & Vitals",
      popular: "Fast",
      asha_worker_support: "Need Help Booking?",
      asha_desc: "Call your local Village Ward Healthcare Secretariat / ASHA Volunteer.",
      call_104_free: "Dial 104 (Toll-Free)",
      ap_initiative: "Dr. YSR Aarogya Asara & Grama Clinic Connected",
      hero_greeting: "Namaskaram",
      hero_subtext: "Quality doctor consultations, certified nursing, diagnostics, and elderly assistance delivered right to your home in rural & urban Andhra Pradesh.",
      btn_book_visit: "Book Home Visit Now",
      btn_video_doctor: "Instant Video Call",
      vitals_status: "Health Vitals",
      status_stable: "All Normal (BP 120/80)",
      last_checked: "Checked 2h ago",
      next_medicine: "Next Medicine",
      after_lunch: "After Lunch",
      services_header: "Home Healthcare Services",
      services_sub: "Doorstep medical support across 26 Districts in AP",
      all_services_available: "All Services Available Today",
      srv_doctor: "Doctor Home Visit",
      srv_doctor_desc: "General Physicians & Specialists visit your home for diagnosis & treatment.",
      from_fee_300: "From ₹299 / Free (Aarogyasri)",
      srv_nurse: "Nurse Care & Injections",
      srv_nurse_desc: "Injections, IV drip, wound dressing, catheter change, and post-op care.",
      from_fee_150: "From ₹149",
      srv_physio: "Physiotherapy at Home",
      srv_physio_desc: "Stroke rehabilitation, joint pain, paralysis recovery, and ortho exercises.",
      from_fee_350: "From ₹349",
      srv_elder: "Elder Care & Attendants",
      srv_elder_desc: "Daily companionship, medicine management, mobility, and hygiene care.",
      from_fee_400: "Day / 24h Attendant",
      srv_diagnostic: "Home Diagnostic & ECG",
      srv_diag_desc: "Blood tests, Sugar, Thyroid, HbA1c, and Portable 12-lead ECG at home.",
      from_fee_99: "From ₹99 Sample Pickup",
      srv_maternal: "Maternal & Child Care",
      srv_maternal_desc: "Pregnancy checkup tracking, ANC schedules, and baby vaccination reminders.",
      free_schemes: "Free with Thalli-Bidda Express",
      active_appointments: "Upcoming Home Visits",
      book_new: "+ Book New",
      today_medicines_title: "Today's Medicines (Schedule)",
      view_all: "View All",
      ap_govt_collab: "Andhra Pradesh Health & Family Welfare Network",
      ap_govt_collab_desc: "Arogya Mitra is synced with YSR Village Health Clinics, PHCs, and 104 Mobile Medical Units across all districts.",
      view_ap_hospitals: "Find Nearest PHC / Hospital",
      book_visit_title: "Book Home Healthcare Visit",
      book_visit_sub: "Select certified healthcare professionals for visits anywhere in Andhra Pradesh",
      quick_request: "Quick Request (1-Minute)",
      cat_all: "All Specialists",
      cat_doctors: "Doctors (వైద్యులు)",
      cat_nurses: "Nurses (నర్సులు)",
      cat_physio: "Physiotherapists",
      cat_elder: "Elder Attendants",
      cat_postsurgery: "Post-Surgery Care",
      search_doctor_placeholder: "Search doctor, nurse by name, specialty, or village...",
      my_booked_visits: "My Booked Home Visits & History",
      th_booking_id: "Booking ID",
      th_specialist: "Healthcare Provider",
      th_service: "Service Type",
      th_datetime: "Date & Time Slot",
      th_address: "Village / Address",
      th_status: "Status",
      th_actions: "Action",
      medicine_reminder_title: "Medicine Reminders & Tracker",
      medicine_reminder_sub: "Never miss a dose. Track daily pills, meal timings, and prescription refills.",
      test_alarm: "Test Reminder Sound",
      add_medicine_btn: "+ Add Medicine",
      doses_taken: "Doses Taken Today",
      doses_pending: "Doses Remaining",
      adherence_rate: "Monthly Adherence",
      refill_alert_label: "Pills Low on Stock",
      morning_slot: "Morning (ఉదయం)",
      afternoon_slot: "Afternoon (మధ్యాహ్నం)",
      night_slot: "Night (రాత్రి)",
      rx_refill_title: "Village Pharmacy / Jana Aushadhi Refill Support",
      rx_refill_desc: "Get your generic medicines delivered via Grama Sachivalayam / Arogya Mitra partner pharmacies at 80% lower cost.",
      order_refill_btn: "Request Doorstep Refill",
      teleconsult_title: "Teleconsultation & Doctor Video Call",
      teleconsult_sub: "Connect with certified MBBS doctors and specialists in seconds via video or chat",
      instant_connect: "Connect with Doctor Now (Live)",
      call_connected: "Live Call Connected",
      end_call: "End Call",
      live_chat_title: "Live Consultation Chat",
      live_prescription: "Digital Prescription (ఈ-ప్రిస్క్రిప్షన్)",
      download_rx: "Download PDF Prescription",
      health_vault_title: "Aarogya Vault — Health Records",
      health_vault_sub: "Securely store and share prescriptions, lab reports, vaccination cards, and hospital discharge summaries.",
      upload_record_btn: "+ Upload New Record",
      rec_all: "All Records",
      rec_prescriptions: "Prescriptions",
      rec_lab: "Lab & Blood Reports",
      rec_vaccine: "Vaccination",
      rec_discharge: "Hospital Summaries",
      diagnostics_title: "Home Diagnostics & Portable ECG",
      diagnostics_sub: "Certified phlebotomists collect samples at your doorstep. Reports delivered on WhatsApp & App within 6 hours.",
      view_past_reports: "View Past Lab Reports",
      individual_tests_title: "Individual Routine & Blood Tests",
      maternal_title: "Maternal & Child Care (తల్లి & బిడ్డ సంరక్షణ)",
      maternal_sub: "Pregnancy week tracking, ANC checkups, nutrition guides, and 0-5 years child immunization schedule.",
      call_102_btn: "Call 102 (Thalli-Bidda Express)",
      sub_pregnancy: "Pregnancy Tracker",
      sub_vaccine: "Child Vaccine Schedule",
      week_28: "28th Week • 3rd Trimester",
      due_date_text: "Estimated Due Date: 18 Nov, 2026",
      book_anm_visit: "Book ANM Home Visit",
      child_immunization_title: "National Universal Immunization Programme (UIP AP)",
      child_immunization_sub: "Check due dates for your baby's lifesaving vaccines from birth to 5 years.",
      baby_dob_label: "Baby's Date of Birth:",
      elder_title: "Elder Care & Daily Vitals Tracker",
      elder_sub: "Dedicated caregivers for senior citizens, routine vital stats logging, and emergency family alert triggers.",
      book_caregiver_btn: "Book Elder Caregiver",
      log_vitals_title: "Quick Vitals Check Station (వైటల్స్ రికార్డ్ చేయండి)",
      label_bp: "Blood Pressure (BP)",
      label_sugar: "Blood Glucose (Fasting / PP)",
      label_spo2: "Oxygen Saturation (SpO2)",
      label_pulse: "Heart Pulse Rate",
      save_vitals_btn: "Save & Analyze Health Status",
      elder_packages_title: "Specialized Caregiver & Assistance Packages",
      pack_day: "Day Shift (10 Hours)",
      pack_247: "24x7 Live-in Support",
      pack_rehab: "Paralysis / Post-Stroke",
      modal_book_title: "Book Healthcare Home Visit",
      modal_book_sub: "Certified specialist visit to your doorstep in AP",
      form_service_type: "Service Requested",
      form_pref_doc: "Preferred Specialist",
      form_patient_name: "Patient Full Name",
      form_patient_age: "Age / Gender",
      form_mobile: "Mobile Number",
      form_district: "AP District",
      form_village_address: "Village / Town & House Landmark",
      form_date: "Preferred Visit Date",
      form_time_slot: "Preferred Time Slot",
      form_payment_mode: "Payment Option",
      form_symptoms: "Describe Symptoms / Specific Need (లక్షణాలు)",
      btn_cancel: "Cancel",
      btn_confirm_booking: "Confirm & Generate Booking Pass",
      pass_confirmed_title: "Home Visit Confirmed!",
      pass_confirmed_sub: "Healthcare professional dispatched to your village",
      print_pass: "Print / Save Pass",
      done_btn: "Done",
      modal_add_med_title: "Add Medication Reminder",
      modal_add_med_sub: "Set pill schedules and refill notifications",
      med_name_label: "Medicine / Tablet Name",
      med_dosage_label: "Dosage",
      med_timing_slot: "Time Slot",
      med_meal_relation: "Meal Timing",
      med_pills_left: "Current Stock (Pills)",
      med_purpose_label: "Purpose / Doctor Note (Optional)",
      save_reminder_btn: "Save Medication Reminder",
      modal_upload_title: "Add Record to Aarogya Vault",
      modal_upload_sub: "Upload lab reports, prescriptions, or discharge notes",
      record_title_label: "Document / Report Title",
      record_type_label: "Category",
      record_hospital_label: "Hospital / Lab Name",
      record_date_label: "Date of Test / Visit",
      record_doctor_label: "Doctor / Pathologist",
      click_upload: "Click to Select File / Take Camera Photo",
      file_types_supported: "Supports PDF, JPG, PNG (Max 25MB)",
      save_to_vault_btn: "Save to Aarogya Vault",
      emergency_ap_title: "Andhra Pradesh 24/7 Emergency Assistance",
      emergency_ap_sub: "Instant 1-Touch Dispatch to Ambulance & Area Hospitals",
      sos_instruction: "Tap to broadcast emergency location to 108 Command Center and your registered emergency contacts.",
      dial_108_title: "Free 108 Ambulance",
      dial_108_desc: "Accidents, Heart attack, Stroke & Trauma emergency.",
      dial_104_title: "104 Medical Advice",
      dial_104_desc: "Doctor consultation, medicine guidance & nearest PHC.",
      dial_102_title: "102 Thalli-Bidda",
      dial_102_desc: "Free maternal transport for pregnant mothers & infants.",
      dial_112_title: "112 National SOS",
      dial_112_desc: "Police, Fire & Unified Emergency Response.",
      nearby_ap_hospitals: "Nearest Hospitals & Primary Health Centres (PHC)",
      btn_close: "Close Window",
      share_whatsapp: "Share via WhatsApp / Doctor",
      nav_home: "Home",
      nav_visit: "Visits",
      nav_medicines: "Medicines",
      nav_teleconsult: "Doctor",
      nav_records: "Vault"
    },
    te: {
      emergency_247: "ఆంధ్రప్రదేశ్ 24/7 అత్యవసర నంబర్లు:",
      ambulance: "అంబులెన్స్",
      medical_advice: "వైద్య సలహా",
      maternal_care: "తల్లి-బిడ్డ",
      emergency_sos: "అత్యవసర SOS",
      tagline: "గ్రామ & పట్టణ గృహ ఆరోగ్య సేవలు • ఆంధ్రప్రదేశ్",
      service_location: "ప్రాంతం",
      village_resident: "గ్రామ నివాసి",
      nav_main_menu: "ఆరోగ్య సేవలు",
      tab_dashboard: "హోమ్ ఓవర్‌వ్యూ",
      tab_book_visit: "ఇంటి వద్ద వైద్య సేవలు",
      tab_medicines: "మందుల రిమైండర్లు",
      tab_teleconsult: "టెలికన్సల్టేషన్ (వీడియో)",
      tab_records: "ఆరోగ్య వాల్ట్ (రికార్డులు)",
      tab_diagnostics: "రక్త & ECG పరీక్షలు",
      tab_maternal: "తల్లి & బిడ్డ సంరక్షణ",
      tab_elder: "వయోవృద్ధుల సంరక్షణ",
      popular: "వేగవంతం",
      asha_worker_support: "బుకింగ్ సహాయం కావాలా?",
      asha_desc: "మీ గ్రామ/వార్డు సచివాలయ ఆరోగ్య కార్యదర్శి లేదా ఆశా కార్యకర్తను సంప్రదించండి.",
      call_104_free: "104 కు కాల్ చేయండి (ఉచితం)",
      ap_initiative: "డాక్టర్ వైఎస్ఆర్ ఆరోగ్య ఆసరా & గ్రామ క్లినిక్ అనుసంధానం",
      hero_greeting: "నమస్కారం",
      hero_subtext: "ఆంధ్రప్రదేశ్‌లోని గ్రామ మరియు పట్టణ ప్రాంతాల్లో నిపుణులైన వైద్యులు, నర్సులు, ల్యాబ్ పరీక్షలు మరియు వృద్ధుల సంరక్షణ మీ ఇంటికే అందుబాటులో ఉన్నాయి.",
      btn_book_visit: "ఇప్పుడే హోమ్ విజిట్ బుక్ చేయండి",
      btn_video_doctor: "వీడియో ద్వారా వైద్యునితో మాట్లాడండి",
      vitals_status: "ఆరోగ్య సూచికలు (వైటల్స్)",
      status_stable: "అన్నీ సాధారణంగా ఉన్నాయి (BP 120/80)",
      last_checked: "2 గంటల క్రితం తనిఖీ చేయబడింది",
      next_medicine: "తదుపరి మందు",
      after_lunch: "భోజనం తర్వాత",
      services_header: "గృహ ఆరోగ్య సేవలు",
      services_sub: "ఆంధ్రప్రదేశ్‌లోని 26 జిల్లాల్లో ఇంటివద్దకే వైద్య సేవలు",
      all_services_available: "నేడు అన్ని సేవలు అందుబాటులో ఉన్నాయి",
      srv_doctor: "డాక్టర్ హోమ్ విజిట్",
      srv_doctor_desc: "జనరల్ ఫిజీషియన్లు & స్పెషలిస్ట్ వైద్యులు మీ ఇంటికే వచ్చి పరీక్షించి చికిత్స అందిస్తారు.",
      from_fee_300: "₹299 నుండి / ఆరోగ్యశ్రీ ద్వారా ఉచితం",
      srv_nurse: "నర్సింగ్ & ఇంజెక్షన్లు",
      srv_nurse_desc: "ఇంజక్షన్లు, IV డ్రిప్, డ్రెస్సింగ్, క్యాథెటర్ మార్పిడి మరియు ఆపరేషన్ తర్వాత సంరక్షణ.",
      from_fee_150: "₹149 నుండి",
      srv_physio: "ఫిజియోథెరపీ సేవలు",
      srv_physio_desc: "పక్షవాతం, కీళ్ల నొప్పులు, పక్షవాత రికవరీ మరియు ఎముకల వ్యాయామ చికిత్స.",
      from_fee_350: "₹349 నుండి",
      srv_elder: "వయోవృద్ధుల సంరక్షణ",
      srv_elder_desc: "రోజూ మందులు వేయడం, నడకలో తోడ్పాటు, స్నానం మరియు పరిశుభ్రత సేవలు.",
      from_fee_400: "పగటిపూట / 24 గంటల సహాయకులు",
      srv_diagnostic: "రక్త పరీక్షలు & ECG",
      srv_diag_desc: "షుగర్, థైరాయిడ్, రక్త పరీక్షలు మరియు పోర్టబుల్ 12-లీడ్ ECG మీ ఇంట్లోనే.",
      from_fee_99: "₹99 నుండి శాంపిల్ కలెక్షన్",
      srv_maternal: "గర్భిణీ & శిశు సంరక్షణ",
      srv_maternal_desc: "గర్భిణీ తనిఖీలు, ANC షెడ్యూల్స్ మరియు పిల్లల వ్యాక్సినేషన్ రిమైండర్లు.",
      free_schemes: "తల్లి-బిడ్డ ఎక్స్‌ప్రెస్‌తో ఉచితం",
      active_appointments: "రాబోయే హోమ్ విజిట్లు",
      book_new: "+ కొత్తది బుక్ చేయండి",
      today_medicines_title: "నేటి మందుల పట్టిక",
      view_all: "అన్నీ చూడండి",
      ap_govt_collab: "ఆంధ్రప్రదేశ్ వైద్య & కుటుంబ సంక్షేమ నెట్‌వర్క్",
      ap_govt_collab_desc: "వైఎస్సార్ విలేజ్ హెల్త్ క్లినిక్‌లు, పిహెచ్‌సిలు మరియు 104 మొబైల్ మెడికల్ యూనిట్లతో సమన్వయం.",
      view_ap_hospitals: "సమీప ఆసుపత్రి / PHC ని కనుగొనండి",
      book_visit_title: "ఇంటి వద్ద వైద్య సేవను బుక్ చేసుకోండి",
      book_visit_sub: "ఆంధ్రప్రదేశ్‌లో ఎక్కడికైనా ధృవీకరించబడిన వైద్య నిపుణులను ఎంచుకోండి",
      quick_request: "త్వరిత బుకింగ్ (1-నిమిషం)",
      cat_all: "అన్ని విభాగాలు",
      cat_doctors: "వైద్యులు (Doctors)",
      cat_nurses: "నర్సులు (Nurses)",
      cat_physio: "ఫిజియోథెరపీ",
      cat_elder: "వృద్ధుల సహాయకులు",
      cat_postsurgery: "సర్జరీ తర్వాత సంరక్షణ",
      search_doctor_placeholder: "డాక్టర్, నర్స్ పేరు లేదా మండలం ద్వారా వెతకండి...",
      my_booked_visits: "నా బుకింగ్స్ & చరిత్ర",
      th_booking_id: "బుకింగ్ ID",
      th_specialist: "వైద్య నిపుణులు",
      th_service: "సేవ రకం",
      th_datetime: "తేదీ & సమయం",
      th_address: "గ్రామం / చిరునామా",
      th_status: "స్థితి",
      th_actions: "చర్య",
      medicine_reminder_title: "మందుల రిమైండర్లు & ట్రాకర్",
      medicine_reminder_sub: "మందు వేసుకోవడం ఎప్పుడూ మర్చిపోకండి. సమయానికి మాత్రలు మరియు రీఫిల్ అలర్ట్‌లు.",
      test_alarm: "రిమైండర్ శబ్దం పరీక్షించండి",
      add_medicine_btn: "+ మందు జోడించండి",
      doses_taken: "నేడు వేసుకున్న డోసులు",
      doses_pending: "మిగిలి ఉన్న డోసులు",
      adherence_rate: "నెలవారీ క్రమశిక్షణ",
      refill_alert_label: "స్టాక్ తక్కువగా ఉన్న మందులు",
      morning_slot: "ఉదయం (Morning)",
      afternoon_slot: "మధ్యాహ్నం (Afternoon)",
      night_slot: "రాత్రి (Night)",
      rx_refill_title: "గ్రామ ఫార్మసీ / జన ఔషధి మందుల డెలివరీ",
      rx_refill_desc: "గ్రామ సచివాలయం / ఆరోగ్య మిత్ర ఫార్మసీ ద్వారా 80% తక్కువ ధరకే మీ ఇంటి వద్దకే జెనెరిక్ మందులు.",
      order_refill_btn: "ఇంటి వద్దకే మందులు ఆర్డర్ చేయండి",
      teleconsult_title: "టెలికన్సల్టేషన్ & డాక్టర్ వీడియో కాల్",
      teleconsult_sub: "కొద్ది సెకన్లలోనే వీడియో లేదా చాట్ ద్వారా అర్హత కలిగిన MBBS వైద్యులను సంప్రదించండి",
      instant_connect: "డాక్టర్‌తో లైవ్ మాట్లాడండి",
      call_connected: "లైవ్ కాల్ కనెక్ట్ అయ్యింది",
      end_call: "కాల్ ముగించండి",
      live_chat_title: "లైవ్ కన్సల్టేషన్ చాట్",
      live_prescription: "డిజిటల్ ప్రిస్క్రిప్షన్ (ఈ-ప్రిస్క్రిప్షన్)",
      download_rx: "PDF ప్రిస్క్రిప్షన్ డౌన్‌లోడ్ చేయండి",
      health_vault_title: "ఆరోగ్య వాల్ట్ — హెల్త్ రికార్డులు",
      health_vault_sub: "ప్రిస్క్రిప్షన్లు, ల్యాబ్ నివేదికలు మరియు డిశ్చార్జ్ సమ్మరీలను సురక్షితంగా నిల్వ చేసుకోండి.",
      upload_record_btn: "+ కొత్త రికార్డు అప్‌లోడ్ చేయండి",
      rec_all: "అన్ని రికార్డులు",
      rec_prescriptions: "ప్రిస్క్రిప్షన్లు",
      rec_lab: "ల్యాబ్ రిపోర్టులు",
      rec_vaccine: "టీకా సర్టిఫికెట్లు",
      rec_discharge: "హాస్పిటల్ డిశ్చార్జ్ రికార్డులు",
      diagnostics_title: "ఇంటి వద్ద ల్యాబ్ పరీక్షలు & ECG",
      diagnostics_sub: "మీ ఇంటికే వచ్చి రక్త నమూనాలు సేకరిస్తారు. 6 గంటల్లో వాట్సాప్ మరియు యాప్‌లో రిపోర్టులు.",
      view_past_reports: "పాత ల్యాబ్ రిపోర్టులు చూడండి",
      individual_tests_title: "వ్యక్తిగత రక్త & మూత్ర పరీక్షలు",
      maternal_title: "తల్లి & బిడ్డ సంరక్షణ (Maternal & Child)",
      maternal_sub: "గర్భిణీ వారాల ట్రాకింగ్, ANC పరీక్షలు మరియు 0-5 సంవత్సరాల పిల్లల టీకాల పట్టిక.",
      call_102_btn: "102 కాల్ చేయండి (తల్లి-బిడ్డ ఎక్స్‌ప్రెస్)",
      sub_pregnancy: "గర్భిణీ సంరక్షణ",
      sub_vaccine: "పిల్లల టీకాల పట్టిక",
      week_28: "28వ వారం • 3వ త్రైమాసికం",
      due_date_text: "అంచనా వేసిన డెలివరీ తేదీ: 18 నవంబర్, 2026",
      book_anm_visit: "ANM హోమ్ విజిట్ బుక్ చేయండి",
      child_immunization_title: "జాతీయ టీకాల కార్యక్రమం (UIP ఆంధ్రప్రదేశ్)",
      child_immunization_sub: "పుట్టినప్పటి నుండి 5 సంవత్సరాల వరకు మీ బిడ్డకు వేయించాల్సిన టీకాల తేదీలు తెలుసుకోండి.",
      baby_dob_label: "బిడ్డ పుట్టిన తేదీ:",
      elder_title: "వయోవృద్ధుల సంరక్షణ & రోజువారీ వైటల్స్",
      elder_sub: "వృద్ధులకు ప్రత్యేక కేర్‌గివర్లు, రోజువారీ BP/షుగర్ రికార్డింగ్ మరియు అత్యవసర కుటుంబ అలర్ట్‌లు.",
      book_caregiver_btn: "వృద్ధుల కేర్‌గివర్‌ని బుక్ చేయండి",
      log_vitals_title: "వైటల్స్ చెక్ స్టేషన్ (BP, Sugar, SpO2)",
      label_bp: "రక్తపోటు (BP - Blood Pressure)",
      label_sugar: "రక్తంలో చక్కెర (Blood Sugar)",
      label_spo2: "ఆక్సిజన్ శాతం (SpO2)",
      label_pulse: "గుండె నాడి వేగం (Pulse Rate)",
      save_vitals_btn: "రికార్డు చేసి ఆరోగ్యాన్ని విశ్లేషించండి",
      elder_packages_title: "ప్రత్యేక కేర్‌గివర్ మరియు సంరక్షణ ప్యాకేజీలు",
      pack_day: "పగటిపూట (10 గంటలు)",
      pack_247: "24x7 పూర్తికాల సహాయకులు",
      pack_rehab: "పక్షవాతం / పునరావాసం",
      modal_book_title: "ఇంటి వద్ద వైద్య సేవను బుక్ చేసుకోండి",
      modal_book_sub: "మీ గ్రామంలోని ఇంటి వద్దకే వైద్య నిపుణుల రాక",
      form_service_type: "కోరుకున్న సేవ",
      form_pref_doc: "నిపుణుల ఎంపిక",
      form_patient_name: "రోగి పూర్తి పేరు",
      form_patient_age: "వయస్సు / లింగం",
      form_mobile: "మొబైల్ నంబర్",
      form_district: "ఆంధ్రప్రదేశ్ జిల్లా",
      form_village_address: "గ్రామం / మండలం & ఇంటి గుర్తు",
      form_date: "సందర్శించాల్సిన తేదీ",
      form_time_slot: "అనుకూల సమయం",
      form_payment_mode: "చెల్లింపు విధానం",
      form_symptoms: "లక్షణాలు / సమస్య వివరాలు",
      btn_cancel: "రద్దు చేయండి",
      btn_confirm_booking: "బుకింగ్ నిర్ధారించి పాస్ పొందండి",
      pass_confirmed_title: "హోమ్ విజిట్ బుకింగ్ విజయవంతమైంది!",
      pass_confirmed_sub: "వైద్య సిబ్బంది మీ గ్రామానికి బయలుదేరనున్నారు",
      print_pass: "పాస్ ప్రింట్ / సేవ్ చేయండి",
      done_btn: "పూర్తయింది",
      modal_add_med_title: "కొత్త మందు రిమైండర్ జోడించండి",
      modal_add_med_sub: "మాత్రల వేళలు మరియు అలర్ట్‌లను సెట్ చేయండి",
      med_name_label: "మందు / మాత్ర పేరు",
      med_dosage_label: "మోతాదు (Dosage)",
      med_timing_slot: "సమయం",
      med_meal_relation: "భోజన సమయం",
      med_pills_left: "ప్రస్తుత స్టాక్ (మాత్రల సంఖ్య)",
      med_purpose_label: "ఉద్దేశం / డాక్టర్ సూచన",
      save_reminder_btn: "రిమైండర్ సేవ్ చేయండి",
      modal_upload_title: "ఆరోగ్య వాల్ట్‌కు రికార్డు జోడించండి",
      modal_upload_sub: "ప్రిస్క్రిప్షన్ లేదా ల్యాబ్ నివేదికలను భద్రపరచండి",
      record_title_label: "డాక్యుమెంట్ / రిపోర్ట్ పేరు",
      record_type_label: "విభాగం",
      record_hospital_label: "ఆసుపత్రి / ల్యాబ్ పేరు",
      record_date_label: "పరీక్ష / విజిట్ తేదీ",
      record_doctor_label: "డాక్టర్ / పాథాలజిస్ట్ పేరు",
      click_upload: "ఫైల్ ఎంచుకోండి / ఫోటో తీయండి",
      file_types_supported: "PDF, JPG, PNG ఫైళ్లు (గరిష్టంగా 25MB)",
      save_to_vault_btn: "వాల్ట్‌లో భద్రపరచండి",
      emergency_ap_title: "ఆంధ్రప్రదేశ్ 24/7 అత్యవసర సేవలు",
      emergency_ap_sub: "ఒక్క ట్యాప్‌తో అంబులెన్స్ & సమీప ఆసుపత్రులకు సమాచారం",
      sos_instruction: "108 కంట్రోల్ రూమ్ మరియు మీ కుటుంబ సభ్యులకు తక్షణ లొకేషన్ పంపడానికి ట్యాప్ చేయండి.",
      dial_108_title: "ఉచిత 108 అంబులెన్స్",
      dial_108_desc: "ప్రమాదాలు, గుండెపోటు మరియు అత్యవసర చికిత్స.",
      dial_104_title: "104 వైద్య సలహా కేంద్రం",
      dial_104_desc: "డాక్టర్ సలహాలు మరియు సమీప PHC సమాచారం.",
      dial_102_title: "102 తల్లి-బిడ్డ వాహనం",
      dial_102_desc: "గర్భిణీ స్త్రీలు మరియు నవజాత శిశువుల రవాణా.",
      dial_112_title: "112 జాతీయ ఎమర్జెన్సీ",
      dial_112_desc: "పోలీస్, ఫైర్ మరియు ఏకీకృత అత్యవసర సేవలు.",
      nearby_ap_hospitals: "సమీప ప్రభుత్వ ఆసుపత్రులు & ప్రాథమిక ఆరోగ్య కేంద్రాలు (PHC)",
      btn_close: "విండో మూసివేయండి",
      share_whatsapp: "వాట్సాప్ ద్వారా షేర్ చేయండి",
      nav_home: "హోమ్",
      nav_visit: "విజిట్లు",
      nav_medicines: "మందులు",
      nav_teleconsult: "డాక్టర్",
      nav_records: "వాల్ట్"
    }
  };

  // ========================================================================
  // 2. INITIAL SEED DATA
  // ========================================================================
  const DEFAULT_PROVIDERS = [
    {
      id: "doc-1",
      name: "Dr. K. Venkateswara Rao",
      qualification: "MBBS, MD (General Medicine)",
      experience: "14 Yrs Exp",
      category: "doctor",
      district: "Krishna",
      languages: "Telugu, English",
      fee: "₹299",
      rating: "4.9 ★ (340+ Visits)",
      available: "Available in 45 mins",
      services: "Fever, BP, Diabetes, Elder checkup, ECG at home"
    },
    {
      id: "nurse-1",
      name: "Sister M. Lakshmi Devi",
      qualification: "B.Sc Nursing (Registered AP Nursing Council)",
      experience: "8 Yrs Exp",
      category: "nurse",
      district: "Krishna",
      languages: "Telugu",
      fee: "₹149",
      rating: "4.8 ★ (520+ Visits)",
      available: "Available Today",
      services: "IV Injections, Wound Dressing, Catheter, Post-op care"
    },
    {
      id: "physio-1",
      name: "Dr. B. Suresh Kumar",
      qualification: "BPT, MPT (Neuro & Ortho)",
      experience: "10 Yrs Exp",
      category: "physio",
      district: "Guntur",
      languages: "Telugu, English",
      fee: "₹349",
      rating: "4.9 ★ (210+ Sessions)",
      available: "Slots Open Tomorrow",
      services: "Paralysis, Stroke Rehab, Knee Pain, Mobility Exercises"
    },
    {
      id: "elder-1",
      name: "G. Appala Swamy",
      qualification: "Certified Geriatric Caregiver (APSSDC)",
      experience: "6 Yrs Exp",
      category: "elder",
      district: "Visakhapatnam",
      languages: "Telugu",
      fee: "₹750 / Day",
      rating: "4.9 ★ (180+ Families)",
      available: "Available for 24h & Day Shifts",
      services: "Bedridden care, hygiene, feeding, medication vigilance"
    },
    {
      id: "doc-2",
      name: "Dr. P. Anitha Reddy",
      qualification: "MBBS, DGO (Gynecology & Obstetrics)",
      experience: "12 Yrs Exp",
      category: "doctor",
      district: "Tirupati",
      languages: "Telugu, English",
      fee: "₹399",
      rating: "4.9 ★ (410+ Mothers)",
      available: "Available for Home Visit",
      services: "High-risk pregnancy, ANC checkup, Postnatal care"
    },
    {
      id: "nurse-2",
      name: "Staff Nurse K. Ramesh",
      qualification: "GNM, Critical Care Certified",
      experience: "9 Yrs Exp",
      category: "post-surgery",
      district: "East Godavari",
      languages: "Telugu",
      fee: "₹249",
      rating: "4.8 ★ (290+ Visits)",
      available: "Available in 1 Hour",
      services: "Surgical stitch removal, bedsore management, oxygen setup"
    }
  ];

  const DEFAULT_MEDICINES = [
    {
      id: "med-1",
      name: "Tab Telmisartan 40mg",
      dosage: "1 Tablet",
      slot: "morning",
      meal: "After Breakfast (ఉదయం టిఫిన్ తర్వాత)",
      purpose: "Blood Pressure control",
      stock: 18,
      takenToday: true
    },
    {
      id: "med-2",
      name: "Tab Metformin 500mg",
      dosage: "1 Tablet",
      slot: "morning",
      meal: "With Breakfast (ఉదయం భోజనంతో)",
      purpose: "Blood Sugar control",
      stock: 4, // Low stock refill alert!
      takenToday: true
    },
    {
      id: "med-3",
      name: "Cap Pantoprazole 40mg",
      dosage: "1 Capsule",
      slot: "afternoon",
      meal: "Before Lunch (మధ్యాహ్న భోజనానికి 30 నిమి ముందు)",
      purpose: "Acidity & Gas relief",
      stock: 22,
      takenToday: false
    },
    {
      id: "med-4",
      name: "Tab Atorvastatin 10mg",
      dosage: "1 Tablet",
      slot: "night",
      meal: "After Dinner (రాత్రి భోజనం తర్వాత)",
      purpose: "Cholesterol & Heart health",
      stock: 15,
      takenToday: false
    }
  ];

  const DEFAULT_BOOKINGS = [
    {
      id: "AP-HM-8842",
      specialist: "Dr. K. Venkateswara Rao (General Physician)",
      service: "Doctor Home Visit",
      dateTime: "Tomorrow, 09:30 AM",
      address: "Gollapudi Village, Vijayawada Rural",
      patient: "Ramesh Garu (58/M)",
      status: "Confirmed",
      fee: "Free (Dr. YSR Aarogyasri)"
    },
    {
      id: "AP-HM-7419",
      specialist: "Sister M. Lakshmi Devi (Staff Nurse)",
      service: "Home Nursing & Injection",
      dateTime: "28 Aug, 04:00 PM",
      address: "Gollapudi Village, Near Rama Temple",
      patient: "Ramesh Garu (58/M)",
      status: "Completed",
      fee: "₹149 (Paid UPI)"
    }
  ];

  const DEFAULT_RECORDS = [
    {
      id: "rec-1",
      title: "Complete Blood Picture & Lipid Profile",
      category: "lab",
      hospital: "YSR Area Hospital & Diagnostic Lab, Vijayawada",
      date: "2026-08-20",
      doctor: "Dr. S. K. Murthy (Pathologist)",
      summary: "Hb: 13.2 g/dL (Normal), Fasting Sugar: 108 mg/dL, Total Cholesterol: 182 mg/dL. All parameters within safe limits.",
      fileType: "PDF"
    },
    {
      id: "rec-2",
      title: "General Medicine & Hypertension Prescription",
      category: "prescription",
      hospital: "Grama Primary Health Centre (PHC), Gollapudi",
      date: "2026-08-15",
      doctor: "Dr. Y. Radhika, MD",
      summary: "Prescribed Telmisartan 40mg (OD), Multivitamin (OD). Advised low salt diet and weekly BP log.",
      fileType: "Digital Rx"
    },
    {
      id: "rec-3",
      title: "COVID-19 Precaution Dose & Tetanus Certificate",
      category: "vaccine",
      hospital: "AP State Universal Immunization Wing",
      date: "2026-04-10",
      doctor: "ANM Staff, Ward Secretariat",
      summary: "Completed precaution dose & TT booster. Universal Cowin & AP Health ID: 91-8492-3849-1029.",
      fileType: "Certificate"
    }
  ];

  const DIAG_PACKAGES = [
    {
      title: "Complete Senior Citizen Home Health Panel",
      popular: true,
      includes: "CBC (18 tests), Fasting Sugar, HbA1c, Kidney Profile (Urea, Creatinine), Lipid Profile, Liver Function & Portable 12-lead ECG at home.",
      price: "₹699",
      mrp: "₹1,800",
      discount: "61% OFF",
      testsCount: "42 Parameters"
    },
    {
      title: "Diabetes & Heart Risk Monitor",
      popular: false,
      includes: "HbA1c 3-Month Glucose, Fasting Blood Sugar, Urine Microalbumin, Lipid Profile & Home ECG.",
      price: "₹449",
      mrp: "₹1,200",
      discount: "62% OFF",
      testsCount: "16 Parameters"
    },
    {
      title: "Mother & Pregnancy ANC Blood Profile",
      popular: false,
      includes: "Complete Blood Count, Blood Grouping & Rh, Random Blood Sugar, Thyroid TSH, VDRL, HIV & Urine Routine.",
      price: "₹399",
      mrp: "₹1,100",
      discount: "Free / ₹399",
      testsCount: "22 Parameters"
    },
    {
      title: "Complete Body Health Package",
      popular: true,
      includes: "Complete Blood Picture, Thyroid Profile (T3, T4, TSH), Calcium, Vitamin D, Vitamin B12 & Liver & Kidney tests.",
      price: "₹899",
      mrp: "₹2,500",
      discount: "64% OFF",
      testsCount: "68 Parameters"
    }
  ];

  const INDIVIDUAL_TESTS = [
    { name: "Fasting / Post-Lunch Blood Sugar", price: "₹49", time: "Same Day (2 Hrs)" },
    { name: "Complete Blood Picture (CBP/CBC)", price: "₹149", time: "Same Day (4 Hrs)" },
    { name: "HbA1c (3-Month Sugar Average)", price: "₹199", time: "Same Day (6 Hrs)" },
    { name: "Portable 12-Lead ECG at Home", price: "₹249", time: "Instant Report" },
    { name: "Thyroid Profile (T3, T4, TSH)", price: "₹199", time: "Same Day" },
    { name: "Kidney Function Test (Serum Creatinine, Urea)", price: "₹179", time: "Same Day" },
    { name: "Lipid Profile (Cholesterol & Triglycerides)", price: "₹199", time: "Same Day" },
    { name: "Serum Electrolytes (Sodium, Potassium)", price: "₹189", time: "Same Day" }
  ];

  const NEARBY_HOSPITALS = [
    { name: "Government General Hospital (GGH), Vijayawada", type: "Apex District Hospital", distance: "4.2 km", contact: "0866-2575678", beds: "120 Beds Free • 18 ICU Available" },
    { name: "Dr. YSR Primary Health Centre (PHC), Gollapudi", type: "Village Clinic / PHC", distance: "1.1 km", contact: "104 / 9440812345", beds: "6 Beds • 24/7 Delivery & Doctor" },
    { name: "Area Hospital, Mangalagiri (Near AIIMS AP)", type: "Government Hospital", distance: "8.5 km", contact: "08645-232108", beds: "45 Beds • 24/7 Trauma & Oxygen" },
    { name: "Andhra Hospitals Heart & Brain Institute", type: "Aarogyasri Empanelled Hospital", distance: "5.8 km", contact: "0866-2494949", beds: "24/7 Emergency & Cath Lab" }
  ];

  const CHILD_VACCINES = [
    { period: "At Birth (పుట్టినప్పుడు)", vaccines: "BCG, OPV-0 (Oral Polio), Hepatitis B (Birth Dose)", daysOffset: 0 },
    { period: "6 Weeks (6 వారాలు)", vaccines: "OPV-1, Pentavalent-1, Rotavirus-1, fIPV-1, PCV-1", daysOffset: 42 },
    { period: "10 Weeks (10 వారాలు)", vaccines: "OPV-2, Pentavalent-2, Rotavirus-2", daysOffset: 70 },
    { period: "14 Weeks (14 వారాలు)", vaccines: "OPV-3, Pentavalent-3, Rotavirus-3, fIPV-2, PCV-2", daysOffset: 98 },
    { period: "9 Months (9 నెలలు)", vaccines: "MR-1 (Measles-Rubella), JE-1, PCV Booster, Vitamin A (1st Dose)", daysOffset: 270 },
    { period: "16-24 Months (1.5 - 2 సం.)", vaccines: "MR-2, JE-2, DPT Booster-1, OPV Booster", daysOffset: 540 },
    { period: "5-6 Years (5 సం.)", vaccines: "DPT Booster-2", daysOffset: 1825 }
  ];

  // ========================================================================
  // 3. APPLICATION STATE STORE
  // ========================================================================
  class HealthcareApp {
    constructor() {
      this.currentLang = localStorage.getItem('ap_lang') || 'en';
      this.currentTab = 'dashboard';
      this.selectedDistrict = 'Krishna';
      
      // Load or initialize state in LocalStorage
      this.providers = DEFAULT_PROVIDERS;
      this.medicines = this.loadStorage('ap_medicines', DEFAULT_MEDICINES);
      this.bookings = this.loadStorage('ap_bookings', DEFAULT_BOOKINGS);
      this.records = this.loadStorage('ap_records', DEFAULT_RECORDS);

      // Video Teleconsult State
      this.isCallActive = false;
      this.callTimerInterval = null;
      this.callSeconds = 0;
      this.mediaStream = null;
      this.isMicMuted = false;
      this.isCamOff = false;

      this.init();
    }

    loadStorage(key, fallback) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
      } catch (e) {
        console.error("Storage error:", e);
        return fallback;
      }
    }

    saveStorage(key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error("Storage save error:", e);
      }
    }

    init() {
      this.setupEventListeners();
      this.applyLanguage(this.currentLang);
      this.renderAllComponents();
      this.recalculateVaccines();
    }

    // ======================================================================
    // 4. EVENT LISTENERS SETUP
    // ======================================================================
    setupEventListeners() {
      // Tab Navigation (Sidebar + Mobile Bottom Bar)
      document.querySelectorAll('[data-tab]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const targetTab = btn.getAttribute('data-tab');
          this.switchTab(targetTab);
        });
      });

      // Language Switch Buttons
      const enBtn = document.getElementById('langEnBtn');
      const teBtn = document.getElementById('langTeBtn');
      if (enBtn && teBtn) {
        enBtn.addEventListener('click', () => this.applyLanguage('en'));
        teBtn.addEventListener('click', () => this.applyLanguage('te'));
      }

      // SOS Buttons
      const openSosBtn = document.getElementById('openSosBtn');
      if (openSosBtn) {
        openSosBtn.addEventListener('click', () => this.openEmergencyModal());
      }

      // Test Alarm Button
      const testAlarmSoundBtn = document.getElementById('testAlarmSoundBtn');
      if (testAlarmSoundBtn) {
        testAlarmSoundBtn.addEventListener('click', () => this.playReminderChime());
      }

      // Visit category filter pills
      const visitFilterContainer = document.getElementById('visitCategoryFilter');
      if (visitFilterContainer) {
        visitFilterContainer.addEventListener('click', (e) => {
          const pill = e.target.closest('.pill-btn');
          if (!pill) return;
          visitFilterContainer.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const cat = pill.getAttribute('data-category');
          this.filterProviders(cat, document.getElementById('doctorSearchInput')?.value || '');
        });
      }

      // Doctor Search input & District Select
      const doctorSearchInput = document.getElementById('doctorSearchInput');
      if (doctorSearchInput) {
        doctorSearchInput.addEventListener('input', (e) => {
          const activeCategory = document.querySelector('#visitCategoryFilter .pill-btn.active')?.getAttribute('data-category') || 'all';
          this.filterProviders(activeCategory, e.target.value);
        });
      }

      const districtFilterSelect = document.getElementById('districtFilterSelect');
      if (districtFilterSelect) {
        districtFilterSelect.addEventListener('change', (e) => {
          this.selectedDistrict = e.target.value;
          const activeCategory = document.querySelector('#visitCategoryFilter .pill-btn.active')?.getAttribute('data-category') || 'all';
          this.filterProviders(activeCategory, doctorSearchInput?.value || '');
        });
      }

      // Record category filter pills
      const recordFilterContainer = document.getElementById('recordCategoryFilter');
      if (recordFilterContainer) {
        recordFilterContainer.addEventListener('click', (e) => {
          const pill = e.target.closest('.pill-btn');
          if (!pill) return;
          recordFilterContainer.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const cat = pill.getAttribute('data-category');
          this.renderRecords(cat);
        });
      }

      // Maternal Sub-tabs (Pregnancy vs Child Vaccine)
      document.querySelectorAll('.sub-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.sub-pill').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.subtab-content').forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          const subId = btn.getAttribute('data-subtab');
          const target = document.getElementById(`subtab-${subId}`);
          if (target) target.classList.add('active');
        });
      });

      // Default Date inputs (today / tomorrow)
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const bookingDateInput = document.getElementById('bookingDate');
      if (bookingDateInput) {
        bookingDateInput.value = tomorrow.toISOString().split('T')[0];
        bookingDateInput.min = new Date().toISOString().split('T')[0];
      }

      const newRecordDate = document.getElementById('newRecordDate');
      if (newRecordDate) {
        newRecordDate.value = new Date().toISOString().split('T')[0];
      }
    }

    // ======================================================================
    // 5. TAB SWITCHING
    // ======================================================================
    switchTab(tabId) {
      this.currentTab = tabId;

      // Update sidebar nav items
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-tab') === tabId);
        el.setAttribute('aria-selected', el.getAttribute('data-tab') === tabId ? 'true' : 'false');
      });

      // Update mobile bottom nav items
      document.querySelectorAll('.bnav-item').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-tab') === tabId);
      });

      // Show/Hide Tab Panels
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ======================================================================
    // 6. LANGUAGE TOGGLE (ENGLISH <-> TELUGU)
    // ======================================================================
    applyLanguage(lang) {
      this.currentLang = lang;
      localStorage.setItem('ap_lang', lang);

      // Toggle UI button states
      const enBtn = document.getElementById('langEnBtn');
      const teBtn = document.getElementById('langTeBtn');
      if (enBtn && teBtn) {
        enBtn.classList.toggle('active', lang === 'en');
        teBtn.classList.toggle('active', lang === 'te');
      }

      // Update HTML text nodes with data-i18n
      const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.textContent = dict[key];
        }
      });

      // Placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
          el.setAttribute('placeholder', dict[key]);
        }
      });

      // Re-render dynamic components with localized templates
      this.renderAllComponents();
      this.showToast(lang === 'te' ? "భాష తెలుగులోకి మార్చబడింది" : "Language switched to English", "🌐");
    }

    // ======================================================================
    // 7. COMPONENT RENDERING
    // ======================================================================
    renderAllComponents() {
      this.renderDashboard();
      this.renderProviders();
      this.renderBookedVisits();
      this.renderMedicines();
      this.renderTeleDoctors();
      this.renderRecords('all');
      this.renderDiagnostics();
      this.renderNearbyHospitals();
    }

    // Render Dashboard Widgets
    renderDashboard() {
      // 1. Next Medicine
      const nextPending = this.medicines.find(m => !m.takenToday);
      const dashNextMed = document.getElementById('dashboardNextMedText');
      if (dashNextMed) {
        if (nextPending) {
          dashNextMed.textContent = `${nextPending.name} • ${nextPending.slot.toUpperCase()}`;
        } else {
          dashNextMed.textContent = this.currentLang === 'te' ? "నేటి అన్ని మందులు వేసుకున్నారు ✓" : "All today's doses taken ✓";
        }
      }

      // 2. Dashboard Upcoming Bookings
      const bookContainer = document.getElementById('dashboardBookingsList');
      if (bookContainer) {
        if (this.bookings.length === 0) {
          bookContainer.innerHTML = `<div style="padding: 16px; text-align:center; color: var(--text-muted);">${this.currentLang === 'te' ? 'రాబోయే విజిట్‌లు ఏవీ లేవు' : 'No upcoming visits booked'}</div>`;
        } else {
          bookContainer.innerHTML = this.bookings.slice(0, 2).map(b => `
            <div class="booking-item-card">
              <div class="booking-item-left">
                <div class="booking-doc-avatar">🩺</div>
                <div>
                  <div class="booking-item-title">${b.specialist}</div>
                  <div class="booking-item-meta">${b.service} • ${b.dateTime}</div>
                </div>
              </div>
              <span class="status-badge ${b.status === 'Confirmed' ? 'badge-confirmed' : 'badge-completed'}">${b.status}</span>
            </div>
          `).join('');
        }
      }

      // 3. Dashboard Today's Medicines
      const medContainer = document.getElementById('dashboardMedicinesList');
      if (medContainer) {
        medContainer.innerHTML = this.medicines.slice(0, 3).map(m => `
          <div class="dash-med-item">
            <div class="dash-med-left">
              <div class="med-pill-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div>
                <div style="font-weight: 700; font-size: 0.88rem;">${m.name}</div>
                <small style="color: var(--text-muted);">${m.dosage} • ${m.meal}</small>
              </div>
            </div>
            <button class="btn-take-pill ${m.takenToday ? 'taken' : ''}" onclick="window.app.toggleMedicine('${m.id}')">
              ${m.takenToday ? '✓ ' + (this.currentLang === 'te' ? 'తీసుకున్నారు' : 'Taken') : (this.currentLang === 'te' ? 'తీసుకోండి' : 'Take Dose')}
            </button>
          </div>
        `).join('');
      }
    }

    // Render Providers (Doctors / Nurses / Physio)
    renderProviders(filteredList = null) {
      const container = document.getElementById('providersListingContainer');
      if (!container) return;

      const list = filteredList || this.providers;
      if (list.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; padding: 32px; text-align: center; color: var(--text-muted);">${this.currentLang === 'te' ? 'ఎటువంటి నిపుణులు కనుగొనబడలేదు' : 'No healthcare specialists matched your criteria.'}</div>`;
        return;
      }

      container.innerHTML = list.map(p => `
        <div class="provider-card glass-card">
          <div class="provider-card-head">
            <div class="provider-photo">
              ${p.name.split(' ')[1] ? p.name.split(' ')[1][0] : 'Dr'}
            </div>
            <div class="provider-head-info">
              <div class="provider-name">${p.name}</div>
              <div class="provider-qual">${p.qualification}</div>
              <div class="provider-rating-pill">⭐ ${p.rating}</div>
            </div>
          </div>

          <div class="provider-meta-row">
            <span class="meta-chip">📍 ${p.district} Dist</span>
            <span class="meta-chip">🗣️ ${p.languages}</span>
            <span class="meta-chip">⏳ ${p.experience}</span>
            <span class="meta-chip" style="background:#dcfce7; color:#166534;">✓ ${p.available}</span>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-sub); line-height: 1.4;">
            <strong>${this.currentLang === 'te' ? 'సేవలు:' : 'Services:'}</strong> ${p.services}
          </p>

          <div class="provider-footer-row">
            <div class="visit-fee">
              ${p.fee} <small>${this.currentLang === 'te' ? '/ విజిట్' : '/ Visit'}</small>
            </div>
            <button class="btn btn-sm btn-primary" onclick="window.app.startDirectBooking('${p.name}', '${p.category}')">
              ${this.currentLang === 'te' ? 'హోమ్ విజిట్ బుక్ చేయండి' : 'Book Home Visit'}
            </button>
          </div>
        </div>
      `).join('');
    }

    filterProviders(category, query) {
      let result = this.providers;

      if (category && category !== 'all') {
        result = result.filter(p => p.category === category);
      }

      if (this.selectedDistrict && this.selectedDistrict !== 'all') {
        result = result.filter(p => p.district === this.selectedDistrict);
      }

      if (query && query.trim() !== '') {
        const q = query.toLowerCase();
        result = result.filter(p =>
          p.name.toLowerCase().includes(q) ||
          p.qualification.toLowerCase().includes(q) ||
          p.services.toLowerCase().includes(q) ||
          p.district.toLowerCase().includes(q)
        );
      }

      this.renderProviders(result);
    }

    // Render My Booked Visits Table
    renderBookedVisits() {
      const tbody = document.getElementById('myVisitsTableBody');
      if (!tbody) return;

      tbody.innerHTML = this.bookings.map(b => `
        <tr>
          <td><strong>${b.id}</strong></td>
          <td>
            <strong>${b.specialist}</strong><br>
            <small style="color: var(--text-muted);">${b.patient}</small>
          </td>
          <td><span class="meta-chip">${b.service}</span></td>
          <td>${b.dateTime}</td>
          <td>${b.address}</td>
          <td><span class="status-badge ${b.status === 'Confirmed' ? 'badge-confirmed' : 'badge-completed'}">${b.status}</span></td>
          <td>
            <button class="btn-text" onclick="window.app.viewBookingPass('${b.id}')">
              ${this.currentLang === 'te' ? 'పాస్ చూడండి' : 'View Pass'}
            </button>
          </td>
        </tr>
      `).join('');
    }

    // Render Medicines in Morning, Afternoon, Night Slots
    renderMedicines() {
      const morningContainer = document.getElementById('morningMedsList');
      const afternoonContainer = document.getElementById('afternoonMedsList');
      const nightContainer = document.getElementById('nightMedsList');

      const morning = this.medicines.filter(m => m.slot === 'morning');
      const afternoon = this.medicines.filter(m => m.slot === 'afternoon');
      const night = this.medicines.filter(m => m.slot === 'night');

      const renderSlotList = (items) => {
        if (items.length === 0) return `<div style="color: var(--text-muted); font-size: 0.84rem; padding: 6px;">${this.currentLang === 'te' ? 'ఈ సమయానికి మందులు లేవు' : 'No medicines scheduled'}</div>`;
        return items.map(m => `
          <div class="med-card-row">
            <div class="med-card-left">
              <button class="med-checkbox-btn ${m.takenToday ? 'checked' : ''}" onclick="window.app.toggleMedicine('${m.id}')" title="Mark as taken">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              </button>
              <div>
                <div class="med-name" style="${m.takenToday ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${m.name} <small style="color:var(--primary); font-weight:600;">(${m.dosage})</small></div>
                <div class="med-detail">${m.meal} • ${m.purpose}</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="meta-chip ${m.stock <= 5 ? 'tag-amber' : ''}">Stock: ${m.stock} pills</span>
              <button class="btn-text" style="color: var(--danger); font-size: 0.78rem;" onclick="window.app.deleteMedicine('${m.id}')">✕</button>
            </div>
          </div>
        `).join('');
      };

      if (morningContainer) morningContainer.innerHTML = renderSlotList(morning);
      if (afternoonContainer) afternoonContainer.innerHTML = renderSlotList(afternoon);
      if (nightContainer) nightContainer.innerHTML = renderSlotList(night);

      // Update counters
      const takenCount = this.medicines.filter(m => m.takenToday).length;
      const pendingCount = this.medicines.length - takenCount;
      const lowStockCount = this.medicines.filter(m => m.stock <= 5).length;

      const takenEl = document.getElementById('medTakenCount');
      const pendingEl = document.getElementById('medPendingCount');
      const lowStockEl = document.getElementById('medRefillAlertCount');
      const pendingTagEl = document.getElementById('pendingPillCount');

      if (takenEl) takenEl.textContent = takenCount;
      if (pendingEl) pendingEl.textContent = pendingCount;
      if (lowStockEl) lowStockEl.textContent = lowStockCount;
      if (pendingTagEl) pendingTagEl.textContent = `${pendingCount} Due`;
    }

    // Render Teleconsultation Doctors
    renderTeleDoctors() {
      const container = document.getElementById('teleDoctorsGrid');
      if (!container) return;

      const onlineDocs = [
        { name: "Dr. Y. Radhika", qual: "MD (General Medicine), AP Health", exp: "11 Yrs", spec: "Fever, Cough, BP & Chronic Disease", status: "Online (Immediate)" },
        { name: "Dr. T. Venkat Raman", qual: "DCH, MD (Pediatrics)", exp: "15 Yrs", spec: "Child Health, Growth & Vaccination", status: "Online" },
        { name: "Dr. S. Sarada Devi", qual: "MS (OBG) Gynecologist", exp: "9 Yrs", spec: "Women Health & Pregnancy Care", status: "Online" },
        { name: "Dr. C. Madhava Rao", qual: "MD (Cardiology)", exp: "18 Yrs", spec: "Heart Health, Chest Pain & ECG", status: "Online" }
      ];

      container.innerHTML = onlineDocs.map(d => `
        <div class="tele-doc-card glass-card">
          <div class="tele-doc-head">
            <div class="tele-doc-avatar">
              ${d.name.split(' ')[1] ? d.name.split(' ')[1][0] : 'D'}
              <span class="online-badge-dot"></span>
            </div>
            <div>
              <h4 style="font-size: 1.05rem; font-weight:700;">${d.name}</h4>
              <p style="font-size: 0.78rem; color: var(--text-muted);">${d.qual} • ${d.exp}</p>
              <span class="meta-chip" style="background:#dcfce7; color:#15803d; font-size:0.7rem; font-weight:800;">● ${d.status}</span>
            </div>
          </div>
          <p style="font-size: 0.82rem; color: var(--text-sub);">
            <strong>Specialty:</strong> ${d.spec}
          </p>
          <button class="btn btn-primary full-width" onclick="window.app.startDirectTeleconsult('${d.name}, ${d.qual}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            ${this.currentLang === 'te' ? 'వీడియో కాల్ ప్రారంభించండి' : 'Start Video Consultation'}
          </button>
        </div>
      `).join('');
    }

    // Render Health Records
    renderRecords(category = 'all') {
      const container = document.getElementById('recordsGrid');
      if (!container) return;

      let list = this.records;
      if (category !== 'all') {
        list = list.filter(r => r.category === category);
      }

      if (list.length === 0) {
        container.innerHTML = `<div style="grid-column: 1/-1; padding: 32px; text-align: center; color: var(--text-muted);">${this.currentLang === 'te' ? 'ఈ విభాగంలో రికార్డులు ఏవీ లేవు' : 'No health records found in this category.'}</div>`;
        return;
      }

      container.innerHTML = list.map(r => `
        <div class="record-card glass-card">
          <div class="record-header">
            <span class="record-badge badge-${r.category}">${r.category.toUpperCase()}</span>
            <small style="font-weight: 700; color: var(--text-muted);">${r.date}</small>
          </div>
          <div class="record-title">${r.title}</div>
          <div class="record-meta-info">
            <span><strong>${this.currentLang === 'te' ? 'ఆసుపత్రి:' : 'Hospital:'}</strong> ${r.hospital}</span>
            <span><strong>${this.currentLang === 'te' ? 'డాక్టర్:' : 'Doctor:'}</strong> ${r.doctor}</span>
          </div>
          <p style="font-size: 0.8rem; color: var(--text-sub); line-height: 1.4; background: #f8fafc; padding: 8px; border-radius: var(--radius-sm);">
            ${r.summary}
          </p>
          <div class="record-card-footer">
            <button class="btn btn-sm btn-outline-emerald flex-1" onclick="window.app.viewRecord('${r.id}')">
              ${this.currentLang === 'te' ? 'రిపోర్ట్ చూడండి' : 'View Report'}
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.app.shareRecordWhatsApp('${r.title}')" title="Share via WhatsApp">
              📲
            </button>
          </div>
        </div>
      `).join('');
    }

    // Render Diagnostics Packages & Checklist
    renderDiagnostics() {
      const packContainer = document.getElementById('diagPackagesGrid');
      if (packContainer) {
        packContainer.innerHTML = DIAG_PACKAGES.map(dp => `
          <div class="diag-pack-card glass-card">
            ${dp.popular ? `<span class="pack-popular-badge">${this.currentLang === 'te' ? 'ప్రజాదరణ పొందినది' : 'Most Popular'}</span>` : ''}
            <div class="diag-pack-title">${dp.title}</div>
            <div class="diag-pack-includes">${dp.includes}</div>
            <div class="diag-price-row">
              <span class="diag-price">${dp.price}</span>
              <span class="diag-mrp">${dp.mrp}</span>
              <span class="diag-discount">${dp.discount}</span>
            </div>
            <button class="btn btn-primary full-width" onclick="window.app.startLabBooking('${dp.title}')">
              ${this.currentLang === 'te' ? 'ఇంటివద్ద నమూనా సేకరణ బుక్ చేయండి' : 'Book Home Sample Collection'}
            </button>
          </div>
        `).join('');
      }

      const testsContainer = document.getElementById('individualTestsGrid');
      if (testsContainer) {
        testsContainer.innerHTML = INDIVIDUAL_TESTS.map(t => `
          <div class="test-item-card">
            <div>
              <div style="font-weight: 700; font-size: 0.88rem;">${t.name}</div>
              <small style="color: var(--text-muted);">${t.time}</small>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <strong style="color: var(--primary); font-size: 0.95rem;">${t.price}</strong>
              <button class="btn btn-sm btn-outline-emerald" onclick="window.app.startLabBooking('${t.name}')">+ Book</button>
            </div>
          </div>
        `).join('');
      }
    }

    // Render Nearby AP Hospitals in SOS Window
    renderNearbyHospitals() {
      const container = document.getElementById('nearbyHospitalsList');
      if (!container) return;

      container.innerHTML = NEARBY_HOSPITALS.map(h => `
        <div class="hosp-item">
          <div class="hosp-info">
            <h5>${h.name}</h5>
            <span>${h.type} • <strong>${h.distance}</strong> away</span><br>
            <small style="color:#059669; font-weight:700;">🟢 ${h.beds}</small>
          </div>
          <a href="tel:${h.contact}" class="btn btn-sm btn-primary" style="text-decoration:none;">
            📞 Call Now
          </a>
        </div>
      `).join('');
    }

    // ======================================================================
    // 8. INTERACTIVE MODAL ACTIONS
    // ======================================================================
    openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('open');
      }
    }

    closeModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('open');
      }
    }

    openCustomBookingModal() {
      this.openModal('bookingWizardModal');
    }

    startDirectBooking(specialistName, category) {
      const prefDoc = document.getElementById('modalSpecialistName');
      const serviceSelect = document.getElementById('modalServiceType');
      if (prefDoc) prefDoc.value = specialistName;
      if (serviceSelect && category) {
        if (category === 'doctor') serviceSelect.value = "Doctor Consultation (వైద్యుల సంప్రదింపులు)";
        else if (category === 'nurse') serviceSelect.value = "Home Nursing & Injection (నర్సింగ్ సేవలు)";
        else if (category === 'physio') serviceSelect.value = "Physiotherapy Rehabilitation (ఫిజియోథెరపీ)";
        else if (category === 'elder') serviceSelect.value = "Elder Attendant Care (వృద్ధుల సంరక్షణ)";
        else if (category === 'post-surgery') serviceSelect.value = "Post-Surgery Wound Dressing (శస్త్రచికిత్స అనంతర సంరక్షణ)";
      }
      this.openModal('bookingWizardModal');
    }

    startServiceBooking(serviceType) {
      this.switchTab('book-visit');
      const pill = document.querySelector(`#visitCategoryFilter .pill-btn[data-category="${serviceType}"]`);
      if (pill) {
        pill.click();
      }
    }

    confirmBooking(e) {
      e.preventDefault();
      const patientName = document.getElementById('bookingPatientName').value || 'Patient';
      const patientAge = document.getElementById('bookingPatientAge').value || '45';
      const mobile = document.getElementById('bookingMobile').value || '9876543210';
      const service = document.getElementById('modalServiceType').value;
      const specialist = document.getElementById('modalSpecialistName').value;
      const district = document.getElementById('bookingDistrict').value;
      const address = document.getElementById('bookingAddress').value;
      const date = document.getElementById('bookingDate').value;
      const slot = document.getElementById('bookingSlot').value;
      const paymentMode = document.getElementById('bookingPaymentMode').value;

      const newBookingId = `AP-HM-${Math.floor(1000 + Math.random() * 9000)}`;

      const newBookingObj = {
        id: newBookingId,
        specialist: specialist || "Assigned AP Govt Certified Specialist",
        service: service.split('(')[0].trim(),
        dateTime: `${date}, ${slot.split('(')[0].trim()}`,
        address: `${address}, ${district} Dist`,
        patient: `${patientName} (${patientAge})`,
        status: "Confirmed",
        fee: paymentMode
      };

      this.bookings.unshift(newBookingObj);
      this.saveStorage('ap_bookings', this.bookings);
      this.closeModal('bookingWizardModal');

      // Generate Digital Pass Modal Content
      const passContent = document.getElementById('bookingPassContent');
      if (passContent) {
        passContent.innerHTML = `
          <div class="digital-pass">
            <div class="pass-top-bar">
              <div>
                <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">Government of Andhra Pradesh • Arogya Mitra</span>
                <div class="pass-id">${newBookingId}</div>
              </div>
              <span class="status-badge badge-confirmed">Confirmed ✓</span>
            </div>

            <div class="pass-grid">
              <div class="pass-field">
                <label>Patient Name</label>
                <strong>${patientName} (${patientAge})</strong>
              </div>
              <div class="pass-field">
                <label>Contact Mobile</label>
                <strong>+91 ${mobile}</strong>
              </div>
              <div class="pass-field">
                <label>Healthcare Provider</label>
                <strong>${specialist}</strong>
              </div>
              <div class="pass-field">
                <label>Requested Service</label>
                <strong>${service.split('(')[0]}</strong>
              </div>
              <div class="pass-field">
                <label>Scheduled Date & Slot</label>
                <strong>${date} • ${slot}</strong>
              </div>
              <div class="pass-field">
                <label>Payment Mode</label>
                <strong>${paymentMode}</strong>
              </div>
            </div>

            <div class="pass-field" style="margin-top: 6px;">
              <label>Doorstep Location</label>
              <strong>${address}, ${district} District, AP</strong>
            </div>

            <div class="pass-qr-box">
              <div>
                <div style="font-size: 0.85rem; font-weight: 800; color: #065f46;">Arogya Mitra Secure Verification Pass</div>
                <small style="color: #047857;">Show this digital pass to the visiting doctor/nurse upon arrival.</small>
              </div>
              <div style="font-size: 1.8rem;">📱</div>
            </div>
          </div>
        `;
      }

      this.openModal('bookingPassModal');
      this.renderBookedVisits();
      this.renderDashboard();
      this.showToast(this.currentLang === 'te' ? "హోమ్ విజిట్ బుకింగ్ విజయవంతమైంది!" : "Home visit booked successfully!", "✅");
    }

    viewBookingPass(bookingId) {
      const b = this.bookings.find(item => item.id === bookingId);
      if (!b) return;

      const passContent = document.getElementById('bookingPassContent');
      if (passContent) {
        passContent.innerHTML = `
          <div class="digital-pass">
            <div class="pass-top-bar">
              <div>
                <span style="font-size:0.7rem; color:var(--text-muted); font-weight:700;">Andhra Pradesh Home Healthcare Pass</span>
                <div class="pass-id">${b.id}</div>
              </div>
              <span class="status-badge ${b.status === 'Confirmed' ? 'badge-confirmed' : 'badge-completed'}">${b.status}</span>
            </div>
            <div class="pass-grid">
              <div class="pass-field">
                <label>Patient</label>
                <strong>${b.patient}</strong>
              </div>
              <div class="pass-field">
                <label>Specialist</label>
                <strong>${b.specialist}</strong>
              </div>
              <div class="pass-field">
                <label>Service</label>
                <strong>${b.service}</strong>
              </div>
              <div class="pass-field">
                <label>Date & Time</label>
                <strong>${b.dateTime}</strong>
              </div>
            </div>
            <div class="pass-field" style="margin-top: 6px;">
              <label>Address</label>
              <strong>${b.address}</strong>
            </div>
          </div>
        `;
      }
      this.openModal('bookingPassModal');
    }

    // ======================================================================
    // 9. MEDICINE REMINDERS ENGINE
    // ======================================================================
    openAddMedicineModal() {
      this.openModal('addMedicineModal');
    }

    saveNewMedicine(e) {
      e.preventDefault();
      const name = document.getElementById('newMedName').value;
      const dosage = document.getElementById('newMedDosage').value || '1 Tablet';
      const slot = document.getElementById('newMedSlot').value;
      const meal = document.getElementById('newMedMeal').value;
      const stock = parseInt(document.getElementById('newMedStock').value, 10) || 10;
      const purpose = document.getElementById('newMedPurpose').value || 'Daily Routine Dose';

      const newMed = {
        id: `med-${Date.now()}`,
        name,
        dosage,
        slot,
        meal,
        purpose,
        stock,
        takenToday: false
      };

      this.medicines.push(newMed);
      this.saveStorage('ap_medicines', this.medicines);
      this.closeModal('addMedicineModal');
      this.renderMedicines();
      this.renderDashboard();
      this.showToast(this.currentLang === 'te' ? "మందుల రిమైండర్ సేవ్ చేయబడింది" : "Medication reminder saved!", "💊");
    }

    toggleMedicine(medId) {
      const med = this.medicines.find(m => m.id === medId);
      if (med) {
        med.takenToday = !med.takenToday;
        if (med.takenToday && med.stock > 0) {
          med.stock -= 1;
        }
        this.saveStorage('ap_medicines', this.medicines);
        this.renderMedicines();
        this.renderDashboard();
        this.showToast(med.takenToday ? (this.currentLang === 'te' ? "మందు వేసుకున్నట్లు నమోదు చేసాము" : "Dose marked as taken!") : "Dose unmarked", "✓");
      }
    }

    deleteMedicine(medId) {
      this.medicines = this.medicines.filter(m => m.id !== medId);
      this.saveStorage('ap_medicines', this.medicines);
      this.renderMedicines();
      this.renderDashboard();
    }

    triggerPharmacyRefill() {
      this.showToast(this.currentLang === 'te' ? "జన ఔషధి ఫార్మసీ రీఫిల్ అభ్యర్థన పంపబడింది!" : "Refill request sent to local Grama Jana Aushadhi Kendra!", "📦");
    }

    // Audio chime using Web Audio API
    playReminderChime() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        const playTone = (freq, start, duration) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
          gain.gain.setValueAtTime(0.3, ctx.currentTime + start);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + start + duration);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + start);
          osc.stop(ctx.currentTime + start + duration);
        };

        playTone(523.25, 0, 0.3); // C5
        playTone(659.25, 0.2, 0.3); // E5
        playTone(783.99, 0.4, 0.5); // G5
        playTone(1046.50, 0.65, 0.8); // C6

        this.showToast(this.currentLang === 'te' ? "మందుల అలారం శబ్దం వినిపించింది" : "Medication Alert Chime Playing 🔔", "🔔");
      } catch (err) {
        console.warn("Audio playback not supported without interaction:", err);
      }
    }

    // ======================================================================
    // 10. TELECONSULTATION ENGINE (VIDEO CALL)
    // ======================================================================
    startDirectTeleconsult(docName) {
      this.switchTab('teleconsult');
      const room = document.getElementById('teleCallRoom');
      const docNameEl = document.getElementById('activeDoctorName');
      const docTag = document.getElementById('doctorScreenTag');

      if (room) room.style.display = 'flex';
      if (docNameEl) docNameEl.textContent = docName;
      if (docTag) docTag.textContent = docName;

      this.isCallActive = true;
      this.callSeconds = 0;

      // Start call timer
      if (this.callTimerInterval) clearInterval(this.callTimerInterval);
      this.callTimerInterval = setInterval(() => {
        this.callSeconds++;
        const mins = String(Math.floor(this.callSeconds / 60)).padStart(2, '0');
        const secs = String(this.callSeconds % 60).padStart(2, '0');
        const timerEl = document.getElementById('callTimer');
        if (timerEl) timerEl.textContent = `${mins}:${secs}`;
      }, 1000);

      // Attempt to access user webcam
      this.initWebcam();
      this.showToast(this.currentLang === 'te' ? "డాక్టర్ వీడియో కన్సల్టేషన్ ప్రారంభమైంది" : "Live Doctor Video Consultation Connected!", "📹");
    }

    async initWebcam() {
      const video = document.getElementById('patientWebcamVideo');
      const placeholder = document.getElementById('camPlaceholder');
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          this.mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          if (video) {
            video.srcObject = this.mediaStream;
            video.style.display = 'block';
          }
          if (placeholder) placeholder.style.display = 'none';
        } catch (err) {
          console.warn("Webcam access declined or unavailable, using simulation view:", err);
          if (video) video.style.display = 'none';
          if (placeholder) placeholder.style.display = 'flex';
        }
      }
    }

    endTeleconsult() {
      this.isCallActive = false;
      if (this.callTimerInterval) clearInterval(this.callTimerInterval);
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach(track => track.stop());
        this.mediaStream = null;
      }
      const room = document.getElementById('teleCallRoom');
      if (room) room.style.display = 'none';
      this.showToast(this.currentLang === 'te' ? "కన్సల్టేషన్ ముగిసింది" : "Teleconsultation ended. Prescription saved in Aarogya Vault.", "📞");
    }

    toggleMic() {
      this.isMicMuted = !this.isMicMuted;
      if (this.mediaStream) {
        this.mediaStream.getAudioTracks().forEach(t => { t.enabled = !this.isMicMuted; });
      }
      const micBtn = document.getElementById('toggleMicBtn');
      if (micBtn) {
        micBtn.style.background = this.isMicMuted ? '#fee2e2' : '#f1f5f9';
        micBtn.style.color = this.isMicMuted ? '#dc2626' : 'var(--text-main)';
      }
      this.showToast(this.isMicMuted ? "Microphone Muted" : "Microphone Active", "🎙️");
    }

    toggleCamera() {
      this.isCamOff = !this.isCamOff;
      if (this.mediaStream) {
        this.mediaStream.getVideoTracks().forEach(t => { t.enabled = !this.isCamOff; });
      }
      const camBtn = document.getElementById('toggleCamBtn');
      if (camBtn) {
        camBtn.style.background = this.isCamOff ? '#fee2e2' : '#f1f5f9';
        camBtn.style.color = this.isCamOff ? '#dc2626' : 'var(--text-main)';
      }
      this.showToast(this.isCamOff ? "Camera Turned Off" : "Camera Turned On", "📷");
    }

    sendTeleMessage() {
      const input = document.getElementById('teleChatInput');
      const flow = document.getElementById('teleChatFlow');
      if (!input || !input.value.trim() || !flow) return;

      const userText = input.value.trim();
      input.value = '';

      // Append user msg
      const userMsgDiv = document.createElement('div');
      userMsgDiv.className = 'msg patient-msg';
      userMsgDiv.innerHTML = `
        <div class="msg-author">You • Just now</div>
        <div class="msg-bubble">${userText}</div>
      `;
      flow.appendChild(userMsgDiv);
      flow.scrollTop = flow.scrollHeight;

      // Doctor automated intelligent reply
      setTimeout(() => {
        const docReplyDiv = document.createElement('div');
        docReplyDiv.className = 'msg doc-msg';
        const docReplyText = this.currentLang === 'te' 
          ? "సరే రమేష్ గారు, నేను ప్రిస్క్రిప్షన్ అప్‌డేట్ చేశాను. తగినంత నీరు త్రాగండి మరియు మందులు క్రమం తప్పకుండా తీసుకోండి."
          : "Understood Ramesh Garu. I have recorded your symptoms and generated your digital prescription. Take rest and maintain your hydration.";
        docReplyDiv.innerHTML = `
          <div class="msg-author">Dr. Y. Radhika • Just now</div>
          <div class="msg-bubble">${docReplyText}</div>
        `;
        flow.appendChild(docReplyDiv);
        flow.scrollTop = flow.scrollHeight;
      }, 1200);
    }

    downloadRx() {
      window.print();
      this.showToast("Prescription downloaded as PDF", "📄");
    }

    // ======================================================================
    // 11. HEALTH RECORDS (AAROGYA VAULT)
    // ======================================================================
    openUploadRecordModal() {
      this.openModal('uploadRecordModal');
    }

    handleFileSelected(input) {
      if (input.files && input.files[0]) {
        const display = document.getElementById('selectedFileNameDisplay');
        if (display) {
          display.textContent = `Selected: ${input.files[0].name} (${(input.files[0].size / 1024).toFixed(1)} KB)`;
        }
      }
    }

    saveNewRecord(e) {
      e.preventDefault();
      const title = document.getElementById('newRecordTitle').value;
      const category = document.getElementById('newRecordCategory').value;
      const hospital = document.getElementById('newRecordHospital').value || 'AP Community Health Center';
      const date = document.getElementById('newRecordDate').value || new Date().toISOString().split('T')[0];
      const doctor = document.getElementById('newRecordDoctor').value || 'Dr. Health Officer';

      const newRec = {
        id: `rec-${Date.now()}`,
        title,
        category,
        hospital,
        date,
        doctor,
        summary: "Digital copy securely verified and linked to AP Health Card EHR vault.",
        fileType: "PDF"
      };

      this.records.unshift(newRec);
      this.saveStorage('ap_records', this.records);
      this.closeModal('uploadRecordModal');
      this.renderRecords('all');
      this.showToast(this.currentLang === 'te' ? "రికార్డు ఆరోగ్య వాల్ట్‌లో భద్రపరచబడింది" : "Record uploaded to Aarogya Vault!", "📁");
    }

    viewRecord(recordId) {
      const rec = this.records.find(r => r.id === recordId);
      if (!rec) return;

      const titleEl = document.getElementById('viewRecordModalTitle');
      const contentEl = document.getElementById('viewRecordContent');

      if (titleEl) titleEl.textContent = rec.title;
      if (contentEl) {
        contentEl.innerHTML = `
          <div style="background:#f8fafc; border:1px solid var(--border-light); padding:18px; border-radius:var(--radius-md);">
            <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
              <span class="record-badge badge-${rec.category}">${rec.category.toUpperCase()}</span>
              <strong>${rec.date}</strong>
            </div>
            <h4 style="font-size:1.15rem; margin-bottom:6px; color:var(--text-main);">${rec.title}</h4>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">
              ${rec.hospital} • ${rec.doctor}
            </p>
            <div style="background:#ffffff; border:1px dashed #94a3b8; padding:14px; border-radius:var(--radius-sm); font-size:0.85rem; line-height:1.6;">
              <strong>Clinical Summary & Test Findings:</strong><br>
              ${rec.summary}
            </div>
          </div>
        `;
      }
      this.openModal('viewRecordModal');
    }

    shareRecordWhatsApp(title = "Medical Record") {
      const text = encodeURIComponent(`Arogya Mitra AP Health Record: ${title} for Ramesh Garu. Verified via AP Aarogya Vault.`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    }

    // ======================================================================
    // 12. LAB DIAGNOSTICS BOOKING
    // ======================================================================
    startLabBooking(testName) {
      this.startDirectBooking(`Phlebotomist (Home Sample Collection)`, 'nurse');
      const desc = document.getElementById('bookingSymptoms');
      if (desc) {
        desc.value = `Sample collection request for: ${testName}. Fasting sample requested.`;
      }
    }

    // ======================================================================
    // 13. MATERNAL & CHILD VACCINE CALCULATOR
    // ======================================================================
    recalculateVaccines() {
      const dobPicker = document.getElementById('babyDobPicker');
      const container = document.getElementById('vaccinesTimelineList');
      if (!dobPicker || !container) return;

      const birthDate = new Date(dobPicker.value || '2026-01-15');
      
      container.innerHTML = CHILD_VACCINES.map(v => {
        const dueDate = new Date(birthDate);
        dueDate.setDate(dueDate.getDate() + v.daysOffset);
        const formattedDue = dueDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
        const isPast = dueDate < new Date();

        return `
          <div class="vax-row-card">
            <div>
              <div style="font-weight: 800; font-size: 0.92rem; color: var(--text-main);">${v.period}</div>
              <div style="font-size: 0.8rem; color: var(--text-sub);">${v.vaccines}</div>
            </div>
            <div style="text-align: right;">
              <strong style="font-size: 0.85rem; color: ${isPast ? '#059669' : '#0284c7'};">Due: ${formattedDue}</strong><br>
              <span class="status-badge ${isPast ? 'badge-completed' : 'badge-assigned'}">${isPast ? 'Completed ✓' : 'Upcoming'}</span>
            </div>
          </div>
        `;
      }).join('');
    }

    // ======================================================================
    // 14. ELDER CARE & VITALS LOGGER
    // ======================================================================
    saveVitals(e) {
      e.preventDefault();
      const sys = parseInt(document.getElementById('bpSystolic').value, 10);
      const dia = parseInt(document.getElementById('bpDiastolic').value, 10);
      const sugar = parseInt(document.getElementById('bloodSugarInput').value, 10);
      const spo2 = parseInt(document.getElementById('spo2Input').value, 10);
      const pulse = parseInt(document.getElementById('pulseInput').value, 10);

      // BP Assessment
      const bpTag = document.getElementById('bpStatusTag');
      if (bpTag) {
        if (sys <= 125 && dia <= 85) {
          bpTag.textContent = "Normal Range ✓";
          bpTag.className = "status-indicator text-success";
        } else if (sys <= 140 && dia <= 90) {
          bpTag.textContent = "Borderline Elevated ⚠️";
          bpTag.className = "status-indicator text-amber";
        } else {
          bpTag.textContent = "High BP Alert 🚨";
          bpTag.className = "status-indicator text-danger";
        }
      }

      // Sugar Assessment
      const sugarTag = document.getElementById('sugarStatusTag');
      if (sugarTag) {
        if (sugar < 140) {
          sugarTag.textContent = "Optimal (Normal)";
          sugarTag.className = "status-indicator text-success";
        } else if (sugar <= 180) {
          sugarTag.textContent = "Pre-Diabetes / Borderline";
          sugarTag.className = "status-indicator text-amber";
        } else {
          sugarTag.textContent = "Elevated Blood Glucose 🚨";
          sugarTag.className = "status-indicator text-danger";
        }
      }

      this.showToast(this.currentLang === 'te' ? "వైటల్స్ రికార్డ్ చేయబడ్డాయి! విశ్లేషణ పూర్తి." : "Daily Vitals Saved & Analyzed Successfully!", "🩺");
    }

    startCaregiverBooking(packageName, price) {
      this.startDirectBooking(`Elder Care Attendant (${packageName})`, 'elder');
      const desc = document.getElementById('bookingSymptoms');
      if (desc) {
        desc.value = `Booking requested for: ${packageName} (Rate: ₹${price}/day). Elder assistance required.`;
      }
    }

    openCaregiverBookingModal() {
      this.startDirectBooking('Senior Caregiver Attendant', 'elder');
    }

    // ======================================================================
    // 15. EMERGENCY SOS SYSTEM
    // ======================================================================
    openEmergencyModal() {
      this.openModal('emergencyModal');
    }

    triggerSosBeacon() {
      const statusText = document.getElementById('sosBeaconStatusText');
      if (statusText) {
        statusText.innerHTML = `<strong>🚨 SOS BEACON BROADCASTING!</strong><br>GPS coordinates [16.5062° N, 80.6480° E] dispatched to 108 Emergency Control Room (Vijayawada) & Registered Family Contacts.`;
        statusText.style.color = '#ef4444';
      }

      this.playReminderChime();
      this.showToast(this.currentLang === 'te' ? "అత్యవసర SOS సిగ్నల్ 108 కంట్రోల్ రూమ్‌కు పంపబడింది!" : "Emergency SOS beacon broadcast to 108 command center!", "🚨");
    }

    // ======================================================================
    // 16. TOAST NOTIFICATIONS
    // ======================================================================
    showToast(message, icon = "ℹ️") {
      const container = document.getElementById('toastContainer');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        toast.style.transition = '0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }
  }

  // Initialize and attach to global window
  window.addEventListener('DOMContentLoaded', () => {
    window.app = new HealthcareApp();
  });

})();
