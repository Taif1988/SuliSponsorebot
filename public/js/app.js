const tg = window.Telegram?.WebApp;
if (tg) { tg.ready(); tg.expand(); }

const initData = tg?.initData || '';
const API = '';

// ---------- الترجمات ----------
const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    pageTitle: 'أعلاناتي',
    brandMark: 'أعلاناتي',
    brandSub: '',
    myAds: 'إعلاناتي',
    tabSale: 'للبيع',
    tabJob: 'وظائف',
    searchPlaceholder: 'ابحث عن شي...',
    chipAll: 'الكل',
    emptyTitle: 'ما فيه إعلانات هسه بهذا التصنيف',
    emptySub: 'كن أول من ينشر إعلان!',
    fabPost: '+ نشر إعلان',
    postTitle: 'نشر إعلان جديد',
    typeLabel: 'نوع الإعلان',
    segSale: 'بيع',
    segJob: 'وظيفة',
    categoryLabel: 'التصنيف',
    titleLabel: 'العنوان',
    titlePlaceholder: 'مثال: آيفون 13 برو للبيع',
    descLabel: 'الوصف',
    descPlaceholder: 'اكتب تفاصيل الإعلان...',
    priceLabelSale: 'السعر (اختياري)',
    priceLabelJob: 'الراتب (اختياري)',
    pricePlaceholder: 'مثال: 150,000 د.ع أو قابل للتفاوض',
    imageLabel: 'صورة (اختياري)',
    submitBtn: 'نشر الإعلان',
    hint: 'راح يتم مراجعة إعلانك قبل ظهوره للجميع ✓',
    detailTitle: 'تفاصيل الإعلان',
    contactBtn: '💬 تواصل مع المعلن',
    contactDisabled: 'صاحب الإعلان ما عنده اسم مستخدم بتلكرام للتواصل المباشر',
    postedBy: 'بواسطة',
    myAdsTitle: 'إعلاناتي',
    noMyAds: 'ما نشرت أي إعلان بعد',
    statusPending: 'قيد المراجعة',
    statusApproved: 'منشور',
    statusRejected: 'مرفوض',
    deleteBtn: 'حذف',
    alertFillFields: 'الرجاء تعبئة العنوان والوصف',
    alertSuccess: 'تم إرسال إعلانك للمراجعة ✓',
    alertError: 'صار خطأ، حاول مرة ثانية',
    confirmDelete: 'متأكد تبي تحذف هذا الإعلان؟',
    categories: {
      jobs: 'وظائف',
      electronics: 'إلكترونيات',
      furniture: 'أثاث',
      vehicles: 'سيارات ومركبات',
      realestate: 'عقارات',
      other: 'أخرى'
    }
  },
  ku: {
    dir: 'rtl',
    pageTitle: 'ڕێکلامەکانم',
    brandMark: 'ڕێکلامەکانم',
    brandSub: '',
    myAds: 'ڕیکلامەکانم',
    tabSale: 'بۆ فرۆشتن',
    tabJob: 'کارەکان',
    searchPlaceholder: 'شتێک بگەڕێ...',
    chipAll: 'هەموو',
    emptyTitle: 'لە ئێستادا هیچ ڕیکلامێک نییە لەم بەشەدا',
    emptySub: 'یەکەم کەس بە کە ڕیکلام بڵاو بکاتەوە!',
    fabPost: '+ ڕیکلام بڵاوبکەرەوە',
    postTitle: 'ڕیکلامی نوێ بڵاوبکەرەوە',
    typeLabel: 'جۆری ڕیکلام',
    segSale: 'فرۆشتن',
    segJob: 'کار',
    categoryLabel: 'جۆر',
    titleLabel: 'ناونیشان',
    titlePlaceholder: 'بۆ نموونە: ئایفۆن 13 پرۆ بۆ فرۆشتن',
    descLabel: 'وردەکاری',
    descPlaceholder: 'وردەکاری ڕیکلامەکە بنووسە...',
    priceLabelSale: 'نرخ (ئارەزوومەندانە)',
    priceLabelJob: 'مووچە (ئارەزوومەندانە)',
    pricePlaceholder: 'بۆ نموونە: 150,000 دینار یان گفتوگۆکراو',
    imageLabel: 'وێنە (ئارەزوومەندانە)',
    submitBtn: 'ڕیکلام بڵاوبکەرەوە',
    hint: 'ڕیکلامەکەت پێش دەرکەوتن پێداچوونەوەی بۆ دەکرێت ✓',
    detailTitle: 'وردەکاری ڕیکلام',
    contactBtn: '💬 پەیوەندی بە ڕیکلامدەرەوە بکە',
    contactDisabled: 'خاوەنی ڕیکلام ناوی بەکارهێنەری تێلێگرامی نییە بۆ پەیوەندی ڕاستەوخۆ',
    postedBy: 'لەلایەن',
    myAdsTitle: 'ڕیکلامەکانم',
    noMyAds: 'هێشتا هیچ ڕیکلامێکت بڵاو نەکردووەتەوە',
    statusPending: 'لە پێداچوونەوەدایە',
    statusApproved: 'بڵاوکراوەتەوە',
    statusRejected: 'ڕەتکراوەتەوە',
    deleteBtn: 'سڕینەوە',
    alertFillFields: 'تکایە ناونیشان و وردەکاری پڕبکەرەوە',
    alertSuccess: 'ڕیکلامەکەت بۆ پێداچوونەوە نێردرا ✓',
    alertError: 'هەڵەیەک ڕوویدا، دووبارە هەوڵبدەوە',
    confirmDelete: 'دڵنیایت دەتەوێت ئەم ڕیکلامە بسڕیتەوە؟',
    categories: {
      jobs: 'کار',
      electronics: 'ئەلیکترۆنیات',
      furniture: 'کەلوپەلی ماڵ',
      vehicles: 'ئۆتۆمبێل',
      realestate: 'خانووبەرە',
      other: 'هی تر'
    }
  },
  en: {
    dir: 'ltr',
    pageTitle: 'My ads',
    brandMark: 'My',
    brandSub: 'ads',
    myAds: 'My Ads',
    tabSale: 'For Sale',
    tabJob: 'Jobs',
    searchPlaceholder: 'Search for something...',
    chipAll: 'All',
    emptyTitle: 'No ads in this category yet',
    emptySub: 'Be the first to post an ad!',
    fabPost: '+ Post Ad',
    postTitle: 'Post New Ad',
    typeLabel: 'Ad Type',
    segSale: 'Sale',
    segJob: 'Job',
    categoryLabel: 'Category',
    titleLabel: 'Title',
    titlePlaceholder: 'e.g. iPhone 13 Pro for sale',
    descLabel: 'Description',
    descPlaceholder: 'Write the ad details...',
    priceLabelSale: 'Price (optional)',
    priceLabelJob: 'Salary (optional)',
    pricePlaceholder: 'e.g. $150 or negotiable',
    imageLabel: 'Image (optional)',
    submitBtn: 'Post Ad',
    hint: 'Your ad will be reviewed before it appears publicly ✓',
    detailTitle: 'Ad Details',
    contactBtn: '💬 Contact Seller',
    contactDisabled: 'The poster has no Telegram username for direct contact',
    postedBy: 'By',
    myAdsTitle: 'My Ads',
    noMyAds: "You haven't posted any ads yet",
    statusPending: 'Pending',
    statusApproved: 'Approved',
    statusRejected: 'Rejected',
    deleteBtn: 'Delete',
    alertFillFields: 'Please fill in the title and description',
    alertSuccess: 'Your ad has been sent for review ✓',
    alertError: 'Something went wrong, please try again',
    confirmDelete: 'Are you sure you want to delete this ad?',
    categories: {
      jobs: 'Jobs',
      electronics: 'Electronics',
      furniture: 'Furniture',
      vehicles: 'Vehicles',
      realestate: 'Real Estate',
      other: 'Other'
    }
  }
};

let currentLang = localStorage.getItem('appLang') || 'ar';

function t(key) {
  return TRANSLATIONS[currentLang][key] || key;
}

function applyLanguage() {
  const dict = TRANSLATIONS[currentLang];
  document.getElementById('htmlRoot').setAttribute('lang', currentLang);
  document.getElementById('htmlRoot').setAttribute('dir', dict.dir);
  document.getElementById('pageTitle').textContent = dict.pageTitle;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = dict[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = dict[el.dataset.i18nPlaceholder];
  });

  document.getElementById('priceLabel').textContent =
    postType === 'job' ? dict.priceLabelJob : dict.priceLabelSale;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  renderChips();
  loadAds();
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.onclick = () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem('appLang', currentLang);
    applyLanguage();
  };
});

let currentType = 'sale';
let currentCategory = null;
let categories = [];

const feed = document.getElementById('feed');
const emptyState = document.getElementById('emptyState');
const categoryChips = document.getElementById('categoryChips');
const searchInput = document.getElementById('searchInput');

async function loadCategories() {
  const res = await fetch(`${API}/api/categories`);
  categories = await res.json();
  renderChips();
}

function renderChips() {
  categoryChips.innerHTML = '';
  const allChip = document.createElement('button');
  allChip.className = 'chip' + (currentCategory === null ? ' active' : '');
  allChip.textContent = t('chipAll');
  allChip.onclick = () => { currentCategory = null; renderChips(); loadAds(); };
  categoryChips.appendChild(allChip);

  categories.forEach((c) => {
    const chip = document.createElement('button');
    chip.className = 'chip' + (currentCategory === c.id ? ' active' : '');
    chip.textContent = categoryLabel(c.id);
    chip.onclick = () => { currentCategory = c.id; renderChips(); loadAds(); };
    categoryChips.appendChild(chip);
  });
}

async function loadAds() {
  const params = new URLSearchParams({ type: currentType });
  if (currentCategory) params.set('category', currentCategory);
  if (searchInput.value.trim()) params.set('q', searchInput.value.trim());

  const res = await fetch(`${API}/api/ads?${params}`);
  const ads = await res.json();
  renderFeed(ads);
}

function renderFeed(ads) {
  feed.querySelectorAll('.ad-card').forEach((el) => el.remove());
  emptyState.hidden = ads.length > 0;

  ads.forEach((ad) => {
    const card = document.createElement('div');
    card.className = 'ad-card';
    card.innerHTML = `
      <div class="thumb" style="${ad.image ? `background-image:url(${ad.image})` : ''}">
        ${ad.image ? '' : (ad.type === 'job' ? '💼' : '🛍️')}
      </div>
      <div class="info">
        <div class="cat-label">${categoryLabel(ad.category)}</div>
        <div class="title">${escapeHtml(ad.title)}</div>
        ${ad.price ? `<div class="price">${escapeHtml(ad.price)}</div>` : ''}
      </div>
    `;
    card.onclick = () => openDetail(ad);
    feed.appendChild(card);
  });
}

function categoryLabel(id) {
  const dict = TRANSLATIONS[currentLang].categories;
  return dict[id] || id;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

document.querySelectorAll('.tab').forEach((tab) => {
  tab.onclick = () => {
    document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    currentType = tab.dataset.type;
    loadAds();
  };
});

let searchTimeout;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(loadAds, 300);
});

function openDetail(ad) {
  const content = document.getElementById('detailContent');
  content.innerHTML = `
    <div class="sheet-header">
      <h2>${t('detailTitle')}</h2>
      <button class="close-btn" data-close="detailSheet">✕</button>
    </div>
    ${ad.image ? `<img class="detail-image" src="${ad.image}" />` : ''}
    <div class="detail-title">${escapeHtml(ad.title)}</div>
    ${ad.price ? `<div class="detail-price">${escapeHtml(ad.price)}</div>` : ''}
    <div class="detail-desc">${escapeHtml(ad.description)}</div>
    <div class="detail-meta">📌 ${categoryLabel(ad.category)} · ${t('postedBy')} ${escapeHtml(ad.posterName)}</div>
    ${
      ad.posterUsername
        ? `<a class="contact-btn" href="https://t.me/${ad.posterUsername}" target="_blank">${t('contactBtn')}</a>`
        : `<div class="contact-disabled">${t('contactDisabled')}</div>`
    }
  `;
  showSheet('detailSheet');
  attachCloseHandlers();
}

const typeSegmented = document.getElementById('typeSegmented');
const categorySelect = document.getElementById('categorySelect');
const priceLabel = document.getElementById('priceLabel');
let postType = 'sale';
let selectedImageBase64 = null;

typeSegmented.querySelectorAll('.seg').forEach((seg) => {
  seg.onclick = () => {
    typeSegmented.querySelectorAll('.seg').forEach((s) => s.classList.remove('active'));
    seg.classList.add('active');
    postType = seg.dataset.value;
    priceLabel.textContent = postType === 'job' ? t('priceLabelJob') : t('priceLabelSale');
  };
});

function fillCategorySelect() {
  categorySelect.innerHTML = categories
    .map((c) => `<option value="${c.id}">${categoryLabel(c.id)}</option>`)
    .join('');
}

document.getElementById('imageInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxW = 800;
      const scale = Math.min(1, maxW / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      selectedImageBase64 = canvas.toDataURL('image/jpeg', 0.7);
      const preview = document.getElementById('imagePreview');
      preview.src = selectedImageBase64;
      preview.hidden = false;
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
});

document.getElementById('submitAdBtn').onclick = async () => {
  const title = document.getElementById('titleInput').value.trim();
  const description = document.getElementById('descInput').value.trim();
  const price = document.getElementById('priceInput').value.trim();
  const category = categorySelect.value;

  if (!title || !description) {
    alert(t('alertFillFields'));
    return;
  }

  const res = await fetch(`${API}/api/ads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      initData,
      type: postType,
      title,
      description,
      price,
      category,
      image: selectedImageBase64
    })
  });

  const data = await res.json();
  if (data.success) {
    alert(t('alertSuccess'));
    closeSheet('postSheet');
    document.getElementById('titleInput').value = '';
    document.getElementById('descInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('imagePreview').hidden = true;
    selectedImageBase64 = null;
  } else {
    alert(data.error || t('alertError'));
  }
};

document.getElementById('myAdsBtn').onclick = async () => {
  const res = await fetch(`${API}/api/my-ads?initData=${encodeURIComponent(initData)}`);
  const ads = await res.json();
  const list = document.getElementById('myAdsList');

  if (ads.length === 0) {
    list.innerHTML = `<p style="text-align:center;color:rgba(35,41,31,0.5);padding:30px 0;">${t('noMyAds')}</p>`;
  } else {
    list.innerHTML = ads
      .map(
        (ad) => `
      <div class="my-ad-row">
        <div class="my-ad-thumb" style="${ad.image ? `background-image:url(${ad.image})` : ''}"></div>
        <div class="my-ad-info">
          <div class="my-ad-title">${escapeHtml(ad.title)}</div>
          <span class="status-badge status-${ad.status}">${statusLabel(ad.status)}</span>
        </div>
        <button class="delete-ad-btn" onclick="deleteAd('${ad.id}')">${t('deleteBtn')}</button>
      </div>
    `
      )
      .join('');
  }

  showSheet('myAdsSheet');
};

function statusLabel(status) {
  return { pending: t('statusPending'), approved: t('statusApproved'), rejected: t('statusRejected') }[status] || status;
}

async function deleteAd(id) {
  if (!confirm(t('confirmDelete'))) return;
  await fetch(`${API}/api/ads/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ initData })
  });
  document.getElementById('myAdsBtn').click();
}

function showSheet(id) {
  document.querySelectorAll('.sheet').forEach((s) => (s.hidden = true));
  document.getElementById(id).hidden = false;
}
function closeSheet(id) {
  document.getElementById(id).hidden = true;
}
function attachCloseHandlers() {
  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.onclick = () => closeSheet(btn.dataset.close);
  });
}

document.getElementById('fab').onclick = () => {
  fillCategorySelect();
  showSheet('postSheet');
};

attachCloseHandlers();

(async function init() {
  applyLanguage();
  await loadCategories();
  await loadAds();
})();
