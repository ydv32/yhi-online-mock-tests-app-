/**
 * YHI Online Mock Tests
 * Designed & Curated by ARVIND YADAV ✨
 * Full Responsive Web Examination Engine with Student Roll IDs, CBT Engine,
 * Subject-Wise Tests, Scoring, Step-by-Step Explanations & Admin Portal.
 */

// Initial Seed Tests Bank with high-yield MCQs and step-by-step explanations
const DEFAULT_TESTS = [
  {
    id: "test-math-01",
    title: "Quantitative Aptitude & Mathematics Master Mock",
    subject: "math",
    durationMinutes: 15,
    marksPerQuestion: 2,
    penalty: 0.5,
    description: "Covers Percentages, Profit & Loss, Time & Work, Speed-Distance, and Algebra essentials for competitive exams.",
    questions: [
      {
        id: "m1",
        text: "A shopkeeper marks an article 40% above its cost price and offers a discount of 25% on the marked price. Find his net profit or loss percentage.",
        options: ["5% Profit", "10% Profit", "5% Loss", "15% Profit"],
        correctIndex: 0,
        explanation: "Let Cost Price (CP) = 100.\nMarked Price (MP) = 100 + 40% of 100 = 140.\nDiscount = 25% of 140 = (25/100) * 140 = 35.\nSelling Price (SP) = 140 - 35 = 105.\nProfit = SP - CP = 105 - 100 = 5% Profit."
      },
      {
        id: "m2",
        text: "A train traveling at 72 km/h crosses a platform of length 250 meters in 26 seconds. What is the length of the train in meters?",
        options: ["270 meters", "250 meters", "300 meters", "220 meters"],
        correctIndex: 0,
        explanation: "Speed of train = 72 km/h = 72 * (5/18) = 20 m/s.\nTotal distance covered in 26s = Speed * Time = 20 * 26 = 520 meters.\nDistance = (Length of Train) + (Length of Platform).\n520 = Length of Train + 250\nLength of Train = 520 - 250 = 270 meters."
      },
      {
        id: "m3",
        text: "A can complete a piece of work in 12 days and B can complete it in 18 days. If they work together for 4 days, what fraction of work is left?",
        options: ["4/9", "5/9", "1/3", "7/18"],
        correctIndex: 0,
        explanation: "A's 1-day work = 1/12\nB's 1-day work = 1/18\nCombined 1-day work = 1/12 + 1/18 = (3+2)/36 = 5/36.\nWork done in 4 days = 4 * (5/36) = 20/36 = 5/9.\nWork remaining = 1 - 5/9 = 4/9."
      },
      {
        id: "m4",
        text: "The average age of 24 students and their teacher is 15 years. If the teacher's age is excluded, the average age decreases by 1 year. What is the age of the teacher?",
        options: ["39 years", "40 years", "35 years", "38 years"],
        correctIndex: 0,
        explanation: "Total persons = 24 students + 1 teacher = 25.\nSum of ages of 25 persons = 25 * 15 = 375 years.\nWhen teacher is excluded, remaining persons = 24 and new average = 14.\nSum of ages of 24 students = 24 * 14 = 336 years.\nTeacher's age = 375 - 336 = 39 years."
      },
      {
        id: "m5",
        text: "If x + (1/x) = 5, what is the value of x² + (1/x²)?",
        options: ["23", "25", "27", "21"],
        correctIndex: 0,
        explanation: "Square both sides of (x + 1/x) = 5:\n(x + 1/x)² = 5²\nx² + 2(x)(1/x) + 1/x² = 25\nx² + 2 + 1/x² = 25\nx² + 1/x² = 25 - 2 = 23."
      }
    ]
  },
  {
    id: "test-science-02",
    title: "General Science & Technology High-Yield Mock",
    subject: "science",
    durationMinutes: 12,
    marksPerQuestion: 2,
    penalty: 0.5,
    description: "Physics, Chemistry, and Human Biology questions commonly asked in SSC, Railways & Civil Services examinations.",
    questions: [
      {
        id: "s1",
        text: "Which organelle is universally termed the 'Powerhouse of the Cell' due to ATP synthesis?",
        options: ["Mitochondria", "Ribosome", "Golgi Apparatus", "Lysosome"],
        correctIndex: 0,
        explanation: "Mitochondria produce cellular energy in the form of Adenosine Triphosphate (ATP) via aerobic cellular respiration, earning the title 'Powerhouse of the Cell'."
      },
      {
        id: "s2",
        text: "What is the phenomenon responsible for the sparkling brilliance of a properly cut diamond?",
        options: ["Total Internal Reflection", "Diffraction of Light", "Interference", "Atmospheric Refraction"],
        correctIndex: 0,
        explanation: "Diamond has a very high refractive index (~2.42) and a very small critical angle (~24.4°). Light entering the cut diamond undergoes multiple Total Internal Reflections before exiting, creating brilliant sparkle."
      },
      {
        id: "s3",
        text: "Which gas is primarily known as 'Laughing Gas' and used as a mild anaesthetic in dentistry?",
        options: ["Nitrous Oxide (N₂O)", "Nitric Oxide (NO)", "Nitrogen Dioxide (NO₂)", "Sulfur Dioxide (SO₂)"],
        correctIndex: 0,
        explanation: "Nitrous Oxide (chemical formula N₂O) is popularly known as Laughing Gas. Discovered by Joseph Priestley in 1772, it produces euphoric effects and mild sedation."
      },
      {
        id: "s4",
        text: "Which vitamin is essential for blood coagulation (clotting) in the human body?",
        options: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
        correctIndex: 0,
        explanation: "Vitamin K is required for the hepatic synthesis of prothrombin and factors VII, IX, and X, which are indispensable for normal blood clotting."
      },
      {
        id: "s5",
        text: "Sound waves cannot propagate through which of the following media?",
        options: ["Vacuum", "Water", "Steel", "Air"],
        correctIndex: 0,
        explanation: "Sound is a mechanical longitudinal wave that requires a material medium with inertia and elasticity to travel. Hence, it cannot travel through a vacuum."
      }
    ]
  },
  {
    id: "test-gk-03",
    title: "Indian Polity & General Knowledge Mock",
    subject: "gk",
    durationMinutes: 10,
    marksPerQuestion: 2,
    penalty: 0.5,
    description: "Constitution of India, Fundamental Rights, Geography, and Indian History compiled by ARVIND YADAV ✨.",
    questions: [
      {
        id: "g1",
        text: "Which Article of the Indian Constitution guarantees the 'Right to Constitutional Remedies' (termed 'Heart and Soul' by Dr. B.R. Ambedkar)?",
        options: ["Article 32", "Article 21", "Article 19", "Article 14"],
        correctIndex: 0,
        explanation: "Article 32 provides the right to approach the Supreme Court directly for enforcement of Fundamental Rights via writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto)."
      },
      {
        id: "g2",
        text: "Who presided as the Permanent President of the Constituent Assembly of India in December 1946?",
        options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Dr. Sachchidananda Sinha", "Jawaharlal Nehru"],
        correctIndex: 0,
        explanation: "While Dr. Sachchidananda Sinha served as temporary President on 9th Dec 1946, Dr. Rajendra Prasad was unanimously elected permanent President of the Constituent Assembly on 11th Dec 1946."
      },
      {
        id: "g3",
        text: "Which Indian state has the longest coastline among all mainland states?",
        options: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
        correctIndex: 0,
        explanation: "Gujarat possesses the longest coastline in mainland India, stretching approximately 1,600 kilometers, followed by Andhra Pradesh (~974 km)."
      },
      {
        id: "g4",
        text: "In which year was the historic Battle of Plassey fought that paved the way for British rule in Bengal?",
        options: ["1757", "1764", "1857", "1761"],
        correctIndex: 0,
        explanation: "The Battle of Plassey was fought on 23 June 1757 between Siraj-ud-Daulah (Nawab of Bengal) and the British East India Company led by Robert Clive."
      }
    ]
  },
  {
    id: "test-reasoning-04",
    title: "Logical Reasoning & Mental Ability Speed Test",
    subject: "reasoning",
    durationMinutes: 12,
    marksPerQuestion: 2,
    penalty: 0.5,
    description: "Number Series, Analogy, Coding-Decoding, and Blood Relations to test analytical speed.",
    questions: [
      {
        id: "r1",
        text: "Find the missing number in the sequence: 4, 9, 25, 49, 121, ?",
        options: ["169", "144", "225", "196"],
        correctIndex: 0,
        explanation: "The sequence represents the squares of consecutive prime numbers:\n2² = 4\n3² = 9\n5² = 25\n7² = 49\n11² = 121\nThe next prime number is 13; therefore, 13² = 169."
      },
      {
        id: "r2",
        text: "Pointing to a photograph, a woman says: 'He is the only son of my father's only son.' How is the person in photograph related to the woman?",
        options: ["Nephew", "Son", "Brother", "Father"],
        correctIndex: 0,
        explanation: "'My father's only son' refers to the woman's brother (since she is a female). The 'only son of her brother' is her nephew."
      },
      {
        id: "r3",
        text: "If in a certain code language, 'ROSE' is written as 'ILHV', how will 'TIGER' be encoded in that system?",
        options: ["GRTVI", "GTRVI", "GSVTI", "GRVTI"],
        correctIndex: 0,
        explanation: "Opposite alphabet pairs:\nR ↔ I (18+9=27)\nO ↔ L (15+12=27)\nS ↔ H (19+8=27)\nE ↔ V (5+22=27)\nSimilarly for TIGER:\nT ↔ G, I ↔ R, G ↔ T, E ↔ V, R ↔ I -> 'GRTVI'."
      }
    ]
  },
  {
    id: "test-english-05",
    title: "English Language & Grammar Practice Mock",
    subject: "english",
    durationMinutes: 10,
    marksPerQuestion: 2,
    penalty: 0.5,
    description: "Spotting errors, idioms and phrases, synonyms, and sentence improvement.",
    questions: [
      {
        id: "e1",
        text: "Choose the correct idiom that means 'to face a difficult situation with courage':",
        options: ["Bite the bullet", "Break the ice", "Burn bridges", "Beat around the bush"],
        correctIndex: 0,
        explanation: "'Bite the bullet' means to endure a painful or difficult situation with resilience and courage."
      },
      {
        id: "e2",
        text: "Identify the part of the sentence containing a grammatical error:\n'Neither the teacher (A) / nor the students (B) / was present in the auditorium (C) / No error (D)'",
        options: ["(C) was present", "(A) Neither the teacher", "(B) nor the students", "(D) No error"],
        correctIndex: 0,
        explanation: "Rule of Proximity with 'Neither...nor': The verb agrees with the subject closest to it. Here, 'the students' is plural, so it must take the plural verb 'were present' instead of 'was present'."
      }
    ]
  },
  {
    id: "test-computer-06",
    title: "Computer Awareness & IT Fundamentals",
    subject: "computer",
    durationMinutes: 10,
    marksPerQuestion: 2,
    penalty: 0.5,
    description: "Computer architectures, protocols, shortcut keys, memory, and networking.",
    questions: [
      {
        id: "c1",
        text: "Which network protocol is primarily utilized for securely browsing websites over encrypted SSL/TLS channels?",
        options: ["HTTPS", "HTTP", "FTP", "SMTP"],
        correctIndex: 0,
        explanation: "HTTPS (Hypertext Transfer Protocol Secure) operates over port 443 and encrypts web communications using TLS/SSL."
      },
      {
        id: "c2",
        text: "Which type of computer memory is volatile, losing its data immediately when power is turned off?",
        options: ["RAM (Random Access Memory)", "ROM (Read Only Memory)", "Hard Disk", "SSD"],
        correctIndex: 0,
        explanation: "RAM is volatile primary memory. Secondary storage like SSD and HDD, as well as ROM, retain data non-volatilely without power."
      }
    ]
  }
];

// App Controller
const App = {
  // State
  tests: [],
  currentFilterSubject: 'all',
  currentUser: null,
  registeredStudents: [],
  testSubmissions: [],
  activeTest: null,
  activeQuestionIndex: 0,
  userAnswers: {}, // { qId: { selectedOption: number, status: 'answered'|'unanswered'|'marked'|'notvisited' } }
  examTimerInterval: null,
  examSecondsRemaining: 0,
  examStartTime: null,
  lastScorecardResult: null,
  adminAuthenticated: false,
  firebaseConfig: {
    mode: 'local',
    apiKey: '',
    projectId: '',
    appId: ''
  },

  init() {
    this.loadStorage();
    this.initFirebaseIfConfigured();
    this.renderAuthStatus();
    this.renderTestCatalog();
    this.updateStats();
  },

  // Local Storage Management
  loadStorage() {
    try {
      const savedTests = localStorage.getItem('yhi_tests_v1');
      this.tests = savedTests ? JSON.parse(savedTests) : DEFAULT_TESTS;
      if (!savedTests) {
        this.saveTests();
      }

      const savedStudents = localStorage.getItem('yhi_students_v1');
      this.registeredStudents = savedStudents ? JSON.parse(savedStudents) : [];

      const savedSubs = localStorage.getItem('yhi_submissions_v1');
      this.testSubmissions = savedSubs ? JSON.parse(savedSubs) : [];

      const savedUser = localStorage.getItem('yhi_active_user');
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser);
      } else {
        // Set guest student by default so tests are immediately accessible
        this.currentUser = {
          name: "Candidate Guest",
          email: "candidate@yhi.org",
          rollNumber: "YHI-2026-GUEST",
          targetExam: "All Competitive Exams",
          isGuest: true
        };
      }

      const savedFb = localStorage.getItem('yhi_fb_config');
      if (savedFb) {
        this.firebaseConfig = JSON.parse(savedFb);
      }
    } catch (e) {
      console.warn("Storage loading error:", e);
      this.tests = DEFAULT_TESTS;
    }
  },

  saveTests() {
    localStorage.setItem('yhi_tests_v1', JSON.stringify(this.tests));
  },

  saveStudents() {
    localStorage.setItem('yhi_students_v1', JSON.stringify(this.registeredStudents));
  },

  saveSubmissions() {
    localStorage.setItem('yhi_submissions_v1', JSON.stringify(this.testSubmissions));
  },

  // Firebase Setup & Sync
  initFirebaseIfConfigured() {
    if (this.firebaseConfig.mode === 'firebase' && this.firebaseConfig.apiKey && window.firebase) {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp({
            apiKey: this.firebaseConfig.apiKey,
            projectId: this.firebaseConfig.projectId,
            appId: this.firebaseConfig.appId
          });
        }
        document.getElementById('cloudStatusIcon').textContent = '🟢';
      } catch (err) {
        console.warn("Firebase Init failed:", err);
        document.getElementById('cloudStatusIcon').textContent = '☁️';
      }
    }
  },

  // Navigation
  navigateTo(viewName) {
    document.getElementById('viewHome').style.display = 'none';
    document.getElementById('viewScores').style.display = 'none';
    document.getElementById('viewAdmin').style.display = 'none';
    document.getElementById('viewScorecard').style.display = 'none';
    document.getElementById('cbtExamCockpit').classList.remove('active');
    document.getElementById('mainHeader').style.display = 'block';
    document.getElementById('mainFooter').style.display = 'block';

    // Deselect all header tabs
    document.querySelectorAll('.nav-link-btn').forEach(btn => btn.classList.remove('active'));

    if (viewName === 'home') {
      document.getElementById('viewHome').style.display = 'block';
      document.getElementById('navHomeBtn').classList.add('active');
      this.renderTestCatalog();
    } else if (viewName === 'my-scores') {
      document.getElementById('viewScores').style.display = 'block';
      document.getElementById('navScoresBtn').classList.add('active');
      this.renderScoresHistory();
    } else if (viewName === 'admin') {
      this.handleAdminNavigation();
    } else if (viewName === 'scorecard') {
      document.getElementById('viewScorecard').style.display = 'block';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  scrollToTests() {
    const el = document.getElementById('testCatalogSection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  },

  toggleMobileDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    drawer.classList.toggle('active');
  },

  // Auth Handling
  renderAuthStatus() {
    const container = document.getElementById('studentAuthContainer');
    if (this.currentUser && !this.currentUser.isGuest) {
      container.innerHTML = `
        <div class="student-badge-btn" onclick="App.openRollCardModal()">
          <span>🎓</span>
          <span>${this.currentUser.rollNumber}</span>
          <span style="font-weight: 400; color: #475569;">(${this.currentUser.name.split(' ')[0]})</span>
          <span onclick="event.stopPropagation(); App.signOut();" title="Sign Out" style="margin-left: 4px; color: #ef4444; font-weight: 800;">✕</span>
        </div>
      `;
    } else {
      container.innerHTML = `
        <button class="btn-primary" onclick="App.openAuthModal('register')">
          <span>🆔</span> Register / Login
        </button>
      `;
    }
  },

  openAuthModal(defaultTab = 'register') {
    document.getElementById('authModal').classList.add('active');
    this.switchAuthTab(defaultTab);
  },

  closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
  },

  switchAuthTab(tab) {
    const regForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const tabReg = document.getElementById('tabAuthRegister');
    const tabLog = document.getElementById('tabAuthLogin');

    if (tab === 'register') {
      regForm.style.display = 'block';
      loginForm.style.display = 'none';
      tabReg.classList.add('active');
      tabLog.classList.remove('active');
      document.getElementById('authModalTitle').textContent = 'Student Registration & Roll ID';
    } else {
      regForm.style.display = 'none';
      loginForm.style.display = 'block';
      tabReg.classList.remove('active');
      tabLog.classList.add('active');
      document.getElementById('authModalTitle').textContent = 'Candidate Portal Sign In';
    }
  },

  generateUniqueRollNumber() {
    const year = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    return `YHI-${year}-${randomSuffix}`;
  },

  handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const exam = document.getElementById('regExam').value;
    const password = document.getElementById('regPassword').value;

    if (!name || !email || !password) {
      alert("Please enter all required fields.");
      return;
    }

    const rollNumber = this.generateUniqueRollNumber();
    const newStudent = {
      name,
      email,
      targetExam: exam,
      password,
      rollNumber,
      registeredAt: new Date().toISOString(),
      isGuest: false
    };

    this.registeredStudents.push(newStudent);
    this.saveStudents();

    this.currentUser = newStudent;
    localStorage.setItem('yhi_active_user', JSON.stringify(this.currentUser));

    this.renderAuthStatus();
    this.closeAuthModal();
    this.openRollCardModal();
  },

  handleLogin(e) {
    e.preventDefault();
    const identifier = document.getElementById('loginIdentifier').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    const student = this.registeredStudents.find(s =>
      (s.email.toLowerCase() === identifier || s.rollNumber.toLowerCase() === identifier) &&
      s.password === password
    );

    if (student) {
      this.currentUser = student;
      localStorage.setItem('yhi_active_user', JSON.stringify(this.currentUser));
      this.renderAuthStatus();
      this.closeAuthModal();
      alert(`Welcome back, ${student.name}! Your Roll No is ${student.rollNumber}.`);
    } else {
      alert("Invalid credentials! If you haven't registered, click 'Register & Get Roll No' or use 'Quick Guest Login'.");
    }
  },

  loginAsGuest() {
    const guestRoll = this.generateUniqueRollNumber();
    this.currentUser = {
      name: "Guest Candidate",
      email: "guest@yhimock.com",
      rollNumber: guestRoll,
      targetExam: "General Preparation",
      isGuest: false
    };
    this.registeredStudents.push(this.currentUser);
    this.saveStudents();
    localStorage.setItem('yhi_active_user', JSON.stringify(this.currentUser));
    this.renderAuthStatus();
    this.closeAuthModal();
    alert(`Signed in as Guest Candidate! Roll Number: ${guestRoll}`);
  },

  signOut() {
    if (confirm("Do you want to sign out?")) {
      this.currentUser = {
        name: "Guest",
        email: "guest@yhi.org",
        rollNumber: "YHI-2026-GUEST",
        targetExam: "All Exams",
        isGuest: true
      };
      localStorage.removeItem('yhi_active_user');
      this.renderAuthStatus();
      this.navigateTo('home');
    }
  },

  // Admit / Roll ID Card Modal
  openRollCardModal() {
    if (!this.currentUser) return;
    document.getElementById('cardStudentName').textContent = this.currentUser.name;
    document.getElementById('cardStudentEmail').textContent = this.currentUser.email;
    document.getElementById('cardStudentTarget').textContent = "Target: " + (this.currentUser.targetExam || "All Competitive Exams");
    document.getElementById('cardStudentRoll').textContent = this.currentUser.rollNumber;
    document.getElementById('rollCardModal').classList.add('active');
  },

  closeRollCardModal() {
    document.getElementById('rollCardModal').classList.remove('active');
  },

  // Catalog Rendering & Filtering
  setSubjectFilter(subject) {
    this.currentFilterSubject = subject;
    document.querySelectorAll('#subjectFilterTabs .tab-chip').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subject') === subject);
    });
    this.renderTestCatalog();
  },

  filterTests() {
    this.renderTestCatalog();
  },

  renderTestCatalog() {
    const grid = document.getElementById('testsGridContainer');
    const searchVal = (document.getElementById('searchTestInput')?.value || '').toLowerCase();

    const filtered = this.tests.filter(t => {
      const matchSubject = this.currentFilterSubject === 'all' || t.subject === this.currentFilterSubject;
      const matchSearch = t.title.toLowerCase().includes(searchVal) || (t.description || '').toLowerCase().includes(searchVal);
      return matchSubject && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: white; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.2rem; font-weight: 700;">No mock tests found</h3>
          <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">Try choosing another subject category or clear your search query.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(t => {
      const subjectBadgeClass = `badge-${t.subject}`;
      const qCount = t.questions ? t.questions.length : 0;
      const totalMarks = qCount * (t.marksPerQuestion || 2);

      return `
        <div class="test-card">
          <div class="test-card-top">
            <span class="subject-badge ${subjectBadgeClass}">${t.subject.toUpperCase()}</span>
            <span class="difficulty-badge">⚡ Real CBT</span>
          </div>

          <h3 class="test-title">${t.title}</h3>
          <p class="test-desc">${t.description || 'Full subject mock test with authentic timed examination interface.'}</p>

          <div class="test-meta-pills">
            <div class="meta-item"><span>📝</span> ${qCount} Questions</div>
            <div class="meta-item"><span>⏱️</span> ${t.durationMinutes} Mins</div>
            <div class="meta-item"><span>🏆</span> ${totalMarks} Marks</div>
            <div class="meta-item"><span>⚠️</span> -${t.penalty || 0.5} Negative</div>
          </div>

          <button class="btn-primary" style="width: 100%; margin-top: auto;" onclick="App.launchTest('${t.id}')">
            <span>🚀</span> Start Mock Test
          </button>
        </div>
      `;
    }).join('');
  },

  updateStats() {
    let totalQuestions = 0;
    this.tests.forEach(t => {
      totalQuestions += (t.questions ? t.questions.length : 0);
    });
    const totalQEl = document.getElementById('statTotalQues');
    if (totalQEl) totalQEl.textContent = `${totalQuestions}+`;

    const totalTestsEl = document.getElementById('statTotalTests');
    if (totalTestsEl) totalTestsEl.textContent = `${this.tests.length}+`;
  },

  // CBT Exam Engine
  launchTest(testId) {
    const test = this.tests.find(t => t.id === testId);
    if (!test || !test.questions || test.questions.length === 0) {
      alert("This test does not contain any questions yet. Add questions via Admin Dashboard.");
      return;
    }

    this.activeTest = test;
    this.activeQuestionIndex = 0;
    this.userAnswers = {};

    // Initialize answer status for all questions
    test.questions.forEach(q => {
      this.userAnswers[q.id] = {
        selectedOption: null,
        status: 'notvisited'
      };
    });

    // Mark question 0 as unanswered/visited
    this.userAnswers[test.questions[0].id].status = 'unanswered';

    // Set Candidate Information
    document.getElementById('cbtCandidateName').textContent = this.currentUser.name;
    document.getElementById('cbtCandidateRoll').textContent = this.currentUser.rollNumber;
    document.getElementById('cbtAvatarLetter').textContent = (this.currentUser.name || 'S')[0].toUpperCase();
    document.getElementById('examHeaderTestTitle').textContent = test.title;

    // Set up live countdown timer
    this.examSecondsRemaining = test.durationMinutes * 60;
    this.examStartTime = Date.now();
    this.startExamTimer();

    // Show CBT Cockpit and hide regular UI
    document.getElementById('viewHome').style.display = 'none';
    document.getElementById('viewScores').style.display = 'none';
    document.getElementById('viewAdmin').style.display = 'none';
    document.getElementById('viewScorecard').style.display = 'none';
    document.getElementById('mainHeader').style.display = 'none';
    document.getElementById('mainFooter').style.display = 'none';
    document.getElementById('cbtExamCockpit').classList.add('active');

    this.renderCurrentQuestion();
    this.renderPalette();
    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  startExamTimer() {
    if (this.examTimerInterval) clearInterval(this.examTimerInterval);
    const display = document.getElementById('examCountdownDisplay');
    const badge = document.getElementById('examTimerBadge');

    const updateTimer = () => {
      if (this.examSecondsRemaining <= 0) {
        clearInterval(this.examTimerInterval);
        alert("⏰ Time is up! Your examination is being automatically submitted.");
        this.submitExam();
        return;
      }

      const mins = Math.floor(this.examSecondsRemaining / 60);
      const secs = this.examSecondsRemaining % 60;
      display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

      // Warning color when under 3 minutes
      if (this.examSecondsRemaining <= 180) {
        badge.classList.add('timer-warning');
      } else {
        badge.classList.remove('timer-warning');
      }

      this.examSecondsRemaining--;
    };

    updateTimer();
    this.examTimerInterval = setInterval(updateTimer, 1000);
  },

  renderCurrentQuestion() {
    const q = this.activeTest.questions[this.activeQuestionIndex];
    const totalQ = this.activeTest.questions.length;

    document.getElementById('cbtQuestionNumberBadge').textContent = `Question ${this.activeQuestionIndex + 1} of ${totalQ}`;
    document.getElementById('cbtMarksPill').textContent = `+${this.activeTest.marksPerQuestion || 2} / -${this.activeTest.penalty || 0.5} Marks`;
    document.getElementById('cbtQuestionText').textContent = q.text;

    const optContainer = document.getElementById('cbtOptionsContainer');
    const curAns = this.userAnswers[q.id];

    optContainer.innerHTML = q.options.map((opt, idx) => {
      const isSelected = curAns && curAns.selectedOption === idx;
      return `
        <label class="option-item ${isSelected ? 'selected' : ''}" onclick="App.selectOption(${idx})">
          <input type="radio" name="cbtOptionGroup" class="opt-radio" ${isSelected ? 'checked' : ''}>
          <span class="opt-label"><strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}</span>
        </label>
      `;
    }).join('');

    // Previous button disabled on first question
    document.getElementById('cbtPrevBtn').disabled = (this.activeQuestionIndex === 0);
  },

  selectOption(optIdx) {
    const q = this.activeTest.questions[this.activeQuestionIndex];
    this.userAnswers[q.id].selectedOption = optIdx;
    this.userAnswers[q.id].status = 'answered';
    this.renderCurrentQuestion();
    this.renderPalette();
  },

  clearCurrentAnswer() {
    const q = this.activeTest.questions[this.activeQuestionIndex];
    this.userAnswers[q.id].selectedOption = null;
    this.userAnswers[q.id].status = 'unanswered';
    this.renderCurrentQuestion();
    this.renderPalette();
  },

  saveAndNext() {
    const q = this.activeTest.questions[this.activeQuestionIndex];
    if (this.userAnswers[q.id].selectedOption !== null) {
      this.userAnswers[q.id].status = 'answered';
    } else {
      if (this.userAnswers[q.id].status !== 'marked') {
        this.userAnswers[q.id].status = 'unanswered';
      }
    }

    if (this.activeQuestionIndex < this.activeTest.questions.length - 1) {
      this.activeQuestionIndex++;
      const nextQ = this.activeTest.questions[this.activeQuestionIndex];
      if (this.userAnswers[nextQ.id].status === 'notvisited') {
        this.userAnswers[nextQ.id].status = 'unanswered';
      }
      this.renderCurrentQuestion();
      this.renderPalette();
    } else {
      alert("You have reached the end of the test. You can review your questions or click Submit Test.");
      this.renderPalette();
    }
  },

  markForReviewAndNext() {
    const q = this.activeTest.questions[this.activeQuestionIndex];
    this.userAnswers[q.id].status = 'marked';

    if (this.activeQuestionIndex < this.activeTest.questions.length - 1) {
      this.activeQuestionIndex++;
      const nextQ = this.activeTest.questions[this.activeQuestionIndex];
      if (this.userAnswers[nextQ.id].status === 'notvisited') {
        this.userAnswers[nextQ.id].status = 'unanswered';
      }
    }
    this.renderCurrentQuestion();
    this.renderPalette();
  },

  jumpToQuestionOffset(offset) {
    const newIdx = this.activeQuestionIndex + offset;
    if (newIdx >= 0 && newIdx < this.activeTest.questions.length) {
      this.jumpToQuestion(newIdx);
    }
  },

  jumpToQuestion(idx) {
    this.activeQuestionIndex = idx;
    const q = this.activeTest.questions[idx];
    if (this.userAnswers[q.id].status === 'notvisited') {
      this.userAnswers[q.id].status = 'unanswered';
    }
    this.renderCurrentQuestion();
    this.renderPalette();
  },

  renderPalette() {
    const grid = document.getElementById('cbtPaletteGrid');
    let answered = 0, unanswered = 0, marked = 0, notVisited = 0;

    grid.innerHTML = this.activeTest.questions.map((q, idx) => {
      const ans = this.userAnswers[q.id];
      const isCurrent = idx === this.activeQuestionIndex;
      let statusClass = 'p-notvisited';

      if (ans.status === 'answered') {
        statusClass = 'p-answered';
        answered++;
      } else if (ans.status === 'marked') {
        statusClass = 'p-marked';
        marked++;
      } else if (ans.status === 'unanswered') {
        statusClass = 'p-unanswered';
        unanswered++;
      } else {
        notVisited++;
      }

      return `
        <button class="palette-btn ${statusClass} ${isCurrent ? 'p-current' : ''}" onclick="App.jumpToQuestion(${idx})">
          ${idx + 1}
        </button>
      `;
    }).join('');

    document.getElementById('countAnswered').textContent = answered;
    document.getElementById('countUnanswered').textContent = unanswered;
    document.getElementById('countMarked').textContent = marked;
    document.getElementById('countNotVisited').textContent = notVisited;
  },

  adjustQuestionFont(delta) {
    const qText = document.getElementById('cbtQuestionText');
    const curSize = parseFloat(window.getComputedStyle(qText).fontSize);
    qText.style.fontSize = `${Math.min(26, Math.max(14, curSize + delta * 2))}px`;
  },

  confirmSubmitExam() {
    let answered = 0;
    this.activeTest.questions.forEach(q => {
      if (this.userAnswers[q.id].selectedOption !== null) answered++;
    });
    const total = this.activeTest.questions.length;
    const remaining = total - answered;

    const message = `Are you sure you want to submit your test?\n\n• Answered: ${answered} / ${total}\n• Unanswered: ${remaining}\n\nClick OK to finalize your score and review step-by-step explanations.`;
    if (confirm(message)) {
      this.submitExam();
    }
  },

  // Scoring & Evaluation
  submitExam() {
    if (this.examTimerInterval) clearInterval(this.examTimerInterval);

    const test = this.activeTest;
    const questions = test.questions;
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;
    const marksPerQ = test.marksPerQuestion || 2;
    const penalty = test.penalty || 0.5;

    const reviewItems = [];

    questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const selected = userAns ? userAns.selectedOption : null;
      let status = 'skipped';

      if (selected !== null) {
        if (selected === q.correctIndex) {
          correctCount++;
          status = 'correct';
        } else {
          wrongCount++;
          status = 'wrong';
        }
      } else {
        skippedCount++;
      }

      reviewItems.push({
        index: idx + 1,
        question: q.text,
        options: q.options,
        correctIndex: q.correctIndex,
        userSelected: selected,
        status: status,
        explanation: q.explanation || "Detailed solution is aligned with standard competitive syllabus."
      });
    });

    const maxMarks = questions.length * marksPerQ;
    const marksEarned = (correctCount * marksPerQ) - (wrongCount * penalty);
    const finalScore = Math.max(0, parseFloat(marksEarned.toFixed(2)));
    const accuracy = (correctCount + wrongCount) > 0
      ? Math.round((correctCount / (correctCount + wrongCount)) * 100)
      : 0;

    const elapsedSeconds = Math.round((Date.now() - this.examStartTime) / 1000);
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    const timeTakenStr = `${mins}m ${secs}s`;

    // Save Submission Record
    const submission = {
      id: "sub-" + Date.now(),
      testId: test.id,
      testTitle: test.title,
      studentName: this.currentUser.name,
      rollNumber: this.currentUser.rollNumber,
      score: finalScore,
      maxMarks: maxMarks,
      accuracy: accuracy,
      correctCount: correctCount,
      wrongCount: wrongCount,
      skippedCount: skippedCount,
      timeTaken: timeTakenStr,
      timestamp: new Date().toISOString()
    };

    this.testSubmissions.unshift(submission);
    this.saveSubmissions();

    this.lastScorecardResult = {
      test: test,
      submission: submission,
      reviewItems: reviewItems
    };

    this.renderScorecardView(this.lastScorecardResult);
  },

  renderScorecardView(res) {
    document.getElementById('cbtExamCockpit').classList.remove('active');
    document.getElementById('mainHeader').style.display = 'block';
    document.getElementById('mainFooter').style.display = 'block';
    document.getElementById('viewScorecard').style.display = 'block';

    const s = res.submission;
    document.getElementById('resultTestTitle').textContent = s.testTitle;
    document.getElementById('resultCandidateInfo').textContent = `Candidate: ${s.studentName} (Roll No: ${s.rollNumber})`;
    document.getElementById('resultMarksScored').textContent = s.score;
    document.getElementById('resultTotalMarks').textContent = `/ ${s.maxMarks} Marks`;

    let badgeText = "Good Attempt - Needs Further Revision";
    if (s.accuracy >= 85) badgeText = "🌟 Outstanding Performance! ARVIND YADAV ✨ Commendation";
    else if (s.accuracy >= 70) badgeText = "👏 Very Good Score - Keep Practicing!";
    else if (s.accuracy >= 50) badgeText = "👍 Fair Attempt - Focus on Accuracy";
    document.getElementById('resultPerformanceBadge').textContent = badgeText;

    document.getElementById('resultAccuracy').textContent = `${s.accuracy}%`;
    document.getElementById('resultCorrectCount').textContent = `${s.correctCount} / ${res.reviewItems.length}`;
    document.getElementById('resultWrongCount').textContent = `${s.wrongCount} (-${(s.wrongCount * (res.test.penalty || 0.5)).toFixed(1)})`;
    document.getElementById('resultTimeTaken').textContent = s.timeTaken;

    this.renderReviewSolutions(res.reviewItems, 'all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderReviewSolutions(items, filter = 'all') {
    const container = document.getElementById('reviewCardsContainer');
    const filtered = items.filter(item => {
      if (filter === 'all') return true;
      return item.status === filter;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 2rem; background: white; border-radius: var(--radius-md);">
          No questions match the "${filter}" filter.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      let statusBadge = '';
      let borderClass = 'is-skipped';

      if (item.status === 'correct') {
        borderClass = 'is-correct';
        statusBadge = '<span style="color: var(--success); font-weight: 700;">✅ Correct (+2)</span>';
      } else if (item.status === 'wrong') {
        borderClass = 'is-wrong';
        statusBadge = '<span style="color: var(--danger); font-weight: 700;">❌ Incorrect (-0.5)</span>';
      } else {
        statusBadge = '<span style="color: var(--text-muted); font-weight: 700;">⚪ Unattempted</span>';
      }

      return `
        <div class="explanation-card ${borderClass}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <span style="font-weight: 800; color: var(--primary);">Question ${item.index}</span>
            ${statusBadge}
          </div>

          <div style="font-size: 1rem; font-weight: 600; color: var(--text-primary); margin-bottom: 1rem;">
            ${item.question}
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem;">
            ${item.options.map((opt, oIdx) => {
              let optStyle = "background: #f8fafc; border: 1px solid #e2e8f0;";
              let optTag = "";

              if (oIdx === item.correctIndex) {
                optStyle = "background: #ecfdf5; border: 2px solid #10b981; font-weight: 700; color: #047857;";
                optTag = " (Correct Answer)";
              } else if (oIdx === item.userSelected && item.status === 'wrong') {
                optStyle = "background: #fef2f2; border: 2px solid #ef4444; font-weight: 700; color: #b91c1c;";
                optTag = " (Your Answer)";
              }

              return `
                <div style="padding: 0.65rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.9rem; ${optStyle}">
                  <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt} ${optTag}
                </div>
              `;
            }).join('')}
          </div>

          <div class="solution-box">
            <div class="solution-title">
              <span>💡</span> Step-by-Step Explanation & Concept Note:
            </div>
            <div style="color: var(--text-secondary); white-space: pre-line;">${item.explanation}</div>
          </div>
        </div>
      `;
    }).join('');
  },

  filterReviewSolutions(filter) {
    document.querySelectorAll('#solutionsSection .tab-chip').forEach(btn => btn.classList.remove('active'));
    if (filter === 'all') document.getElementById('btnFilterReviewAll').classList.add('active');
    if (filter === 'correct') document.getElementById('btnFilterReviewCorrect').classList.add('active');
    if (filter === 'wrong') document.getElementById('btnFilterReviewWrong').classList.add('active');
    if (filter === 'skipped') document.getElementById('btnFilterReviewSkipped').classList.add('active');

    if (this.lastScorecardResult) {
      this.renderReviewSolutions(this.lastScorecardResult.reviewItems, filter);
    }
  },

  scrollToSolutions() {
    const el = document.getElementById('solutionsSection');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  },

  retakeActiveTest() {
    if (this.lastScorecardResult && this.lastScorecardResult.test) {
      this.launchTest(this.lastScorecardResult.test.id);
    }
  },

  // Certificate Generation
  openCertificateModal() {
    if (!this.lastScorecardResult) return;
    const s = this.lastScorecardResult.submission;
    document.getElementById('certCandidateName').textContent = s.studentName;
    document.getElementById('certRollNumber').textContent = `Roll No: ${s.rollNumber}`;
    document.getElementById('certTestTitle').textContent = s.testTitle;
    document.getElementById('certScoreDisplay').textContent = `${s.score}/${s.maxMarks} Marks`;
    document.getElementById('certAccuracyDisplay').textContent = `${s.accuracy}%`;
    document.getElementById('certDateDisplay').textContent = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    document.getElementById('certVerifyCode').textContent = `YHI-CERT-${Math.floor(1000 + Math.random() * 9000)}`;

    document.getElementById('certificateModal').classList.add('active');
  },

  closeCertificateModal() {
    document.getElementById('certificateModal').classList.remove('active');
  },

  // Candidate History
  renderScoresHistory() {
    const list = document.getElementById('scoresHistoryList');
    const myRoll = this.currentUser ? this.currentUser.rollNumber : '';

    const mySubs = this.testSubmissions.filter(s => s.rollNumber === myRoll || this.currentUser.isGuest);

    if (mySubs.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; background: white; border-radius: var(--radius-lg); border: 1px dashed var(--border);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📊</div>
          <h3 style="font-size: 1.2rem; font-weight: 700;">No test attempts recorded yet</h3>
          <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 0.25rem;">Select any mock test from the catalog to begin practicing.</p>
          <button class="btn-primary" style="margin-top: 1rem;" onclick="App.navigateTo('home')">Browse Tests</button>
        </div>
      `;
      return;
    }

    list.innerHTML = mySubs.map(s => {
      const dateStr = new Date(s.timestamp).toLocaleString();
      return `
        <div class="test-card" style="margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
            <div style="font-size: 1.15rem; font-weight: 800; color: var(--text-primary);">${s.testTitle}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${dateStr}</div>
          </div>

          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 0.75rem; background: var(--bg-main); padding: 0.75rem; border-radius: var(--radius-md);">
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">SCORE:</span>
              <strong style="color: var(--primary); font-size: 1.1rem; margin-left: 4px;">${s.score} / ${s.maxMarks}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">ACCURACY:</span>
              <strong style="color: var(--success); font-size: 1.1rem; margin-left: 4px;">${s.accuracy}%</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">CORRECT:</span>
              <strong style="color: var(--success); margin-left: 4px;">${s.correctCount}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">WRONG:</span>
              <strong style="color: var(--danger); margin-left: 4px;">${s.wrongCount}</strong>
            </div>
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">TIME:</span>
              <span style="font-weight: 600; margin-left: 4px;">${s.timeTaken}</span>
            </div>
          </div>

          <div style="display: flex; gap: 0.5rem;">
            <button class="btn-outline" onclick="App.launchTest('${s.testId}')">🔄 Reattempt Test</button>
          </div>
        </div>
      `;
    }).join('');
  },

  // Admin Dashboard
  handleAdminNavigation() {
    if (!this.adminAuthenticated) {
      const pin = prompt("Enter Admin PIN to access YHI Test Management Portal (Default PIN: 1234):");
      if (pin === "1234") {
        this.adminAuthenticated = true;
      } else {
        alert("Access Denied: Incorrect PIN.");
        this.navigateTo('home');
        return;
      }
    }

    document.getElementById('viewAdmin').style.display = 'block';
    document.getElementById('navAdminBtn').classList.add('active');
    this.refreshAdminData();
  },

  refreshAdminData() {
    document.getElementById('adminTestCount').textContent = this.tests.length;
    document.getElementById('adminStudentCount').textContent = this.registeredStudents.length;
    document.getElementById('adminSubCount').textContent = this.testSubmissions.length;

    this.renderAdminTestsList();
    this.renderAdminStudentsTable();
    this.renderAdminSubmissionsTable();
  },

  switchAdminTab(tab) {
    document.querySelectorAll('#viewAdmin .tab-chip').forEach(t => t.classList.remove('active'));
    document.getElementById('adminPanelTests').style.display = 'none';
    document.getElementById('adminPanelStudents').style.display = 'none';
    document.getElementById('adminPanelSubmissions').style.display = 'none';
    document.getElementById('adminPanelBackup').style.display = 'none';

    if (tab === 'tests') {
      document.getElementById('tabAdminTests').classList.add('active');
      document.getElementById('adminPanelTests').style.display = 'block';
    } else if (tab === 'students') {
      document.getElementById('tabAdminStudents').classList.add('active');
      document.getElementById('adminPanelStudents').style.display = 'block';
    } else if (tab === 'submissions') {
      document.getElementById('tabAdminSubmissions').classList.add('active');
      document.getElementById('adminPanelSubmissions').style.display = 'block';
    } else if (tab === 'backup') {
      document.getElementById('tabAdminBackup').classList.add('active');
      document.getElementById('adminPanelBackup').style.display = 'block';
    }
  },

  renderAdminTestsList() {
    const list = document.getElementById('adminTestsList');
    list.innerHTML = this.tests.map(t => {
      const qCount = t.questions ? t.questions.length : 0;
      return `
        <div class="test-card">
          <div class="test-card-top">
            <span class="subject-badge badge-${t.subject}">${t.subject.toUpperCase()}</span>
            <span style="font-weight: 700; color: var(--primary);">${qCount} Questions</span>
          </div>

          <h3 class="test-title">${t.title}</h3>
          <p class="test-desc">${t.description || 'Test created via Admin Portal.'}</p>

          <div style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 1rem;">
            Duration: ${t.durationMinutes}m • +${t.marksPerQuestion}/-${t.penalty} marks
          </div>

          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: auto;">
            <button class="btn-primary" style="flex: 1;" onclick="App.openAddQuestionModal('${t.id}')">
              + Add MCQ
            </button>
            <button class="btn-outline" onclick="App.deleteTest('${t.id}')" style="color: var(--danger);">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join('');
  },

  renderAdminStudentsTable() {
    const tbody = document.getElementById('adminStudentsTableBody');
    if (this.registeredStudents.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="padding: 1.5rem; text-align: center;">No candidates registered yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.registeredStudents.map(s => `
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 0.75rem; font-weight: 800; color: var(--primary); font-family: monospace;">${s.rollNumber}</td>
        <td style="padding: 0.75rem; font-weight: 600;">${s.name}</td>
        <td style="padding: 0.75rem; color: var(--text-secondary);">${s.email}</td>
        <td style="padding: 0.75rem;">${s.targetExam || 'General'}</td>
        <td style="padding: 0.75rem; color: var(--text-muted); font-size: 0.8rem;">${new Date(s.registeredAt || Date.now()).toLocaleDateString()}</td>
      </tr>
    `).join('');
  },

  renderAdminSubmissionsTable() {
    const tbody = document.getElementById('adminSubmissionsTableBody');
    if (this.testSubmissions.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="padding: 1.5rem; text-align: center;">No test submissions recorded yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.testSubmissions.map(sub => `
      <tr style="border-bottom: 1px solid var(--border);">
        <td style="padding: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">${new Date(sub.timestamp).toLocaleString()}</td>
        <td style="padding: 0.75rem;">
          <div style="font-weight: 700;">${sub.studentName}</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); font-family: monospace;">${sub.rollNumber}</div>
        </td>
        <td style="padding: 0.75rem; font-weight: 600;">${sub.testTitle}</td>
        <td style="padding: 0.75rem; font-weight: 800; color: var(--primary);">${sub.score} / ${sub.maxMarks}</td>
        <td style="padding: 0.75rem; color: var(--success); font-weight: 700;">${sub.accuracy}%</td>
        <td style="padding: 0.75rem; font-size: 0.82rem;">${sub.timeTaken}</td>
      </tr>
    `).join('');
  },

  openCreateTestModal() {
    document.getElementById('createTestForm').reset();
    document.getElementById('createTestModal').classList.add('active');
  },

  closeCreateTestModal() {
    document.getElementById('createTestModal').classList.remove('active');
  },

  handleSaveTest(e) {
    e.preventDefault();
    const title = document.getElementById('testFormTitle').value.trim();
    const subject = document.getElementById('testFormSubject').value;
    const duration = parseInt(document.getElementById('testFormDuration').value) || 15;
    const marks = parseFloat(document.getElementById('testFormMarks').value) || 2;
    const penalty = parseFloat(document.getElementById('testFormPenalty').value) || 0.5;
    const desc = document.getElementById('testFormDesc').value.trim();

    const newTest = {
      id: "test-custom-" + Date.now(),
      title,
      subject,
      durationMinutes: duration,
      marksPerQuestion: marks,
      penalty,
      description: desc,
      questions: []
    };

    this.tests.unshift(newTest);
    this.saveTests();
    this.updateStats();
    this.closeCreateTestModal();
    this.refreshAdminData();
    alert(`Mock test "${title}" created successfully! Now click "+ Add MCQ" to author questions.`);
  },

  deleteTest(testId) {
    if (confirm("Are you sure you want to delete this mock test?")) {
      this.tests = this.tests.filter(t => t.id !== testId);
      this.saveTests();
      this.updateStats();
      this.refreshAdminData();
    }
  },

  openAddQuestionModal(testId) {
    document.getElementById('addQuestionForm').reset();
    document.getElementById('qTargetTestId').value = testId;
    document.getElementById('addQuestionModal').classList.add('active');
  },

  closeAddQuestionModal() {
    document.getElementById('addQuestionModal').classList.remove('active');
  },

  handleSaveQuestion(e) {
    e.preventDefault();
    const testId = document.getElementById('qTargetTestId').value;
    const test = this.tests.find(t => t.id === testId);
    if (!test) return;

    const text = document.getElementById('qText').value.trim();
    const opt0 = document.getElementById('qOpt0').value.trim();
    const opt1 = document.getElementById('qOpt1').value.trim();
    const opt2 = document.getElementById('qOpt2').value.trim();
    const opt3 = document.getElementById('qOpt3').value.trim();
    const correctIdx = parseInt(document.getElementById('qCorrectOpt').value);
    const explanation = document.getElementById('qExplanation').value.trim();

    const newQ = {
      id: "q-" + Date.now(),
      text,
      options: [opt0, opt1, opt2, opt3],
      correctIndex: correctIdx,
      explanation
    };

    if (!test.questions) test.questions = [];
    test.questions.push(newQ);

    this.saveTests();
    this.updateStats();
    this.closeAddQuestionModal();
    this.refreshAdminData();
    alert(`MCQ added to "${test.title}"! (Total: ${test.questions.length} questions)`);
  },

  exportTestsJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.tests, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `YHI_Mock_Tests_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importTestsJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          this.tests = imported;
          this.saveTests();
          this.updateStats();
          this.refreshAdminData();
          alert("Mock tests and question bank imported successfully!");
        } else {
          alert("Invalid JSON format: expected an array of tests.");
        }
      } catch (err) {
        alert("Failed to parse JSON file: " + err.message);
      }
    };
    reader.readAsText(file);
  },

  resetToDefaultQuestions() {
    if (confirm("Reset question bank to default questions curated by ARVIND YADAV ✨?")) {
      this.tests = DEFAULT_TESTS;
      this.saveTests();
      this.updateStats();
      this.refreshAdminData();
      alert("Reset to default mock tests completed.");
    }
  },

  // Firebase Settings Modal
  openFirebaseModal() {
    document.getElementById('storageModeSelect').value = this.firebaseConfig.mode || 'local';
    document.getElementById('fbApiKey').value = this.firebaseConfig.apiKey || '';
    document.getElementById('fbProjectId').value = this.firebaseConfig.projectId || '';
    document.getElementById('fbAppId').value = this.firebaseConfig.appId || '';
    this.handleStorageModeChange();
    document.getElementById('firebaseModal').classList.add('active');
  },

  closeFirebaseModal() {
    document.getElementById('firebaseModal').classList.remove('active');
  },

  handleStorageModeChange() {
    const mode = document.getElementById('storageModeSelect').value;
    const inputs = document.getElementById('firebaseConfigInputs');
    inputs.style.display = (mode === 'firebase') ? 'block' : 'none';
  },

  saveFirebaseSettings() {
    const mode = document.getElementById('storageModeSelect').value;
    const apiKey = document.getElementById('fbApiKey').value.trim();
    const projectId = document.getElementById('fbProjectId').value.trim();
    const appId = document.getElementById('fbAppId').value.trim();

    this.firebaseConfig = { mode, apiKey, projectId, appId };
    localStorage.setItem('yhi_fb_config', JSON.stringify(this.firebaseConfig));

    this.initFirebaseIfConfigured();
    this.closeFirebaseModal();
    alert("Storage settings saved!");
  }
};

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
