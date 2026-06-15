/* ── DATA ──────────────────────────────────────────────── */
const MOCK_DATA = {
  user: {
    name: "Sanjay",
    alertMessage: "5 products need attention today.",
    savingsMessage: "Potential loss of ₹8,400 can be prevented through transfers."
  },
  stats: [
    { id: "total-inventory",        label: "Total Inventory",         value: "1,500 Units",  badge: "+5% from last week",              badgeType: "positive", icon: "warehouse",  theme: "white" },
    { id: "transfer-opportunities", label: "Transfer Opportunities",  value: "18 Products",  badge: "Nearby demand found",             badgeType: "info",     icon: "truck",      theme: "green" },
    { id: "at-risk-inventory",      label: "At-Risk Inventory",       value: "120 Units",    badge: "15 products expiring within 7 days", badgeType: "warning", icon: "alertClock", theme: "red"   },
    { id: "active-transfers",       label: "Active Transfer Requests",value: "7 Requests",   badge: "3 require action",                badgeType: "action",   icon: "arrows",     theme: "blue"  }
  ],
  attentionProducts: [
    { id: 1, name: "Organic Greek Yogurt", daysLeft: 8,  qty: 42, urgency: "medium" },
    { id: 2, name: "Paneer (200g)",         daysLeft: 3,  qty: 12, urgency: "high"   },
    { id: 3, name: "Basmati Rice (5kg)",    daysLeft: 15, qty: 18, urgency: "low"    }
  ],
  nearbyDemands: [
    { id: 1, shop: "City Kirana", type: "Transfer Request",        distance: "1.7 km away", tag: "Dairy & eggs",       tagColor: "purple", avatar: "CK" },
    { id: 2, shop: "City Kirana", type: "Need Immediate Restock",  distance: "1.7 km away", tag: "Spices and masalas", tagColor: "orange", avatar: "CK" }
  ],
  recentTransfers: [
    { id: 1, date: "Oct 24, 2023", itemName: "Ratnagiri Alphonso Mangoes", itemCategory: "Fresh Produce",    partner: "Sai Kirana Store",    partnerInitials: "SK", partnerColor: "#8B5CF6", type: "outgoing", typeLabel: "Outgoing", weight: "40 Dozen", price: "₹32,000", status: "Completed", statusType: "completed" },
    { id: 2, date: "Oct 22, 2023", itemName: "Premium Basmati Rice",        itemCategory: "Grains & Pulses",  partner: "Bharat Provisions",   partnerInitials: "BP", partnerColor: "#3B82F6", type: "incoming", typeLabel: "Incoming", weight: "125 kg",   price: "₹18,750", status: "Completed", statusType: "completed" },
    { id: 3, date: "Oct 20, 2023", itemName: "Kolhapuri Jaggery",           itemCategory: "Spices & masalas", partner: "Modern Supermarket",  partnerInitials: "MS", partnerColor: "#10B981", type: "outgoing", typeLabel: "Outgoing", weight: "50 kg",    price: "₹4,500",  status: "Cancelled",  statusType: "cancelled"  }
  ],
  navItems: [
    { id: "dashboard",         label: "Dashboard",         icon: "grid",    active: true  },
    { id: "products",          label: "Products",           icon: "box",     active: false },
    { id: "transfer-requests", label: "Transfer Requests",  icon: "swap",    active: false },
    { id: "transfer-history",  label: "Transfer History",   icon: "history", active: false },
    { id: "settings",          label: "Settings",           icon: "settings",active: false }
  ]
};

/* ── ICONS ─────────────────────────────────────────────── */
const Icons = {
  grid: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  box: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  swap: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  history: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/><polyline points="12 7 12 12 15 15"/></svg>`,
  settings: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  warning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  mapPin: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  menu: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,

  /* Logo — bar chart style matching the design */
  logoIcon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1"  y="10" width="4" height="7" rx="1" fill="white"/>
    <rect x="7"  y="5"  width="4" height="12" rx="1" fill="white"/>
    <rect x="13" y="1"  width="4" height="16" rx="1" fill="white"/>
  </svg>`,

  /* Stat card illustrations */
  warehouse: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="32" height="22" rx="2" fill="#FDE68A" stroke="#D97706" stroke-width="1.5"/>
    <polygon points="24,6 4,20 44,20" fill="#FCD34D" stroke="#D97706" stroke-width="1.5"/>
    <rect x="18" y="30" width="12" height="12" rx="1" fill="#D97706"/>
    <rect x="10" y="24" width="8" height="8" rx="1" fill="#F59E0B" stroke="#D97706" stroke-width="1"/>
    <rect x="30" y="24" width="8" height="8" rx="1" fill="#F59E0B" stroke="#D97706" stroke-width="1"/>
  </svg>`,

  truck: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="18" width="26" height="18" rx="2" fill="white" opacity="0.3"/>
    <path d="M30 24h8l4 6v6H30V24z" fill="white" opacity="0.5"/>
    <circle cx="13" cy="38" r="4" fill="white"/>
    <circle cx="13" cy="38" r="2" fill="#16A34A"/>
    <circle cx="36" cy="38" r="4" fill="white"/>
    <circle cx="36" cy="38" r="2" fill="#16A34A"/>
    <rect x="10" y="23" width="14" height="8" rx="1" fill="#16A34A" opacity="0.5"/>
  </svg>`,

  alertClock: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="26" r="16" fill="white" opacity="0.25"/>
    <circle cx="24" cy="26" r="12" fill="white" opacity="0.3"/>
    <line x1="24" y1="18" x2="24" y2="26" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="24" y1="26" x2="29" y2="31" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="24" cy="26" r="2" fill="white"/>
    <path d="M14 16l-4-4M34 16l4-4" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <rect x="20" y="8" width="8" height="3" rx="1.5" fill="white" opacity="0.6"/>
  </svg>`,

  arrows: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" fill="white" opacity="0.2"/>
    <path d="M16 18h16M26 12l6 6-6 6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 30H16M22 36l-6-6 6-6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  arrowOutgoing: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,

  arrowIncoming: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>`,

  moreVertical: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>`
};

/* ── COMPONENTS ─────────────────────────────────────────── */
const Components = {

  renderSidebar(navItems) {
    return `
      <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
        <div class="sidebar-logo">
          <div class="logo-mark">${Icons.logoIcon}</div>
          <span class="logo-text"><span>V</span> Market</span>
        </div>
        <nav class="sidebar-nav">
          <ul>
            ${navItems.map(item => `
              <li>
                <div class="nav-item ${item.active ? 'active' : ''}"
                     data-nav="${item.id}"
                     role="button"
                     tabindex="0"
                     aria-current="${item.active ? 'page' : 'false'}">
                  <span class="nav-icon">${Icons[item.icon] || ''}</span>
                  <span>${item.label}</span>
                </div>
              </li>
            `).join('')}
          </ul>
        </nav>
      </aside>`;
  },

  renderTopbar() {
    return `
      <header class="topbar" role="banner">
        <div class="topbar-actions">
          <button class="notif-btn" aria-label="Notifications">
            ${Icons.bell}
            <span class="notif-badge" aria-label="1 notification">1</span>
          </button>
          <a href="#" class="topbar-link">My Profile</a>
          <a href="#" class="topbar-link">Logout</a>
        </div>
      </header>`;
  },

  renderPageHeader(user) {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening';
    return `
      <div class="page-header">
        <div class="page-header-left">
          <h1>${greeting}, ${user.name}</h1>
          <p>${user.alertMessage}<br>${user.savingsMessage}</p>
        </div>
        <div class="page-header-actions">
          <button class="btn btn-outline">${Icons.download} Export List</button>
          <button class="btn btn-primary">${Icons.plus} Add Product</button>
        </div>
      </div>`;
  },

  renderStatCard(stat) {
    return `
      <div class="stat-card theme-${stat.theme}" role="article" aria-label="${stat.label}">
        <div>
          <div class="stat-card-label">${stat.label}</div>
          <div class="stat-card-value">${stat.value}</div>
          <div class="stat-card-badge badge-${stat.badgeType}">${stat.badge}</div>
        </div>
        <div class="stat-card-icon" aria-hidden="true">${Icons[stat.icon] || ''}</div>
      </div>`;
  },

  renderStatCardSkeleton() {
    return `
      <div class="skeleton-card">
        <div class="skeleton skeleton-line w-60"></div>
        <div class="skeleton skeleton-value"></div>
        <div class="skeleton skeleton-line w-40"></div>
      </div>`;
  },

  renderProductCard(product) {
    return `
      <div class="product-card" role="article">
        <div class="product-name">${product.name}</div>
        <div class="product-meta">
          <span class="days-badge ${product.urgency}">${product.daysLeft} DAYS LEFT</span>
          <span class="product-qty">Qty: ${product.qty}</span>
        </div>
        <button class="transfer-btn" aria-label="Transfer ${product.name}">TRANSFER NOW</button>
      </div>`;
  },

  renderAttentionSection(products) {
    return `
      <div class="card attention-card" role="region" aria-label="Products needing attention">
        <div class="section-header">
          <div class="section-title">
            <span class="warn-icon">${Icons.warning}</span>
            <span>${products.length} Products Need Attention Today</span>
          </div>
          <button class="see-all-btn" aria-label="See all products">See All ${Icons.chevronRight}</button>
        </div>
        <div class="section-subtitle">Priority: Expiring &lt; 14 Days</div>
        <div class="products-grid">
          ${products.map(p => Components.renderProductCard(p)).join('')}
        </div>
      </div>`;
  },

  renderDemandItem(demand) {
    return `
      <div class="demand-item" role="button" tabindex="0" aria-label="${demand.shop} - ${demand.type}">
        <div class="demand-avatar">${demand.avatar}</div>
        <div class="demand-info">
          <div class="demand-shop">${demand.shop}</div>
          <div class="demand-type">${demand.type}</div>
          <div class="demand-distance">${Icons.mapPin} ${demand.distance}</div>
        </div>
        <span class="demand-tag ${demand.tagColor}">${demand.tag}</span>
      </div>`;
  },

  renderNearbyDemands(demands) {
    return `
      <div class="card nearby-card" role="region" aria-label="Nearby demands">
        <div class="nearby-header">
          <span class="nearby-title">NEARBY DEMANDS</span>
          <button class="arrow-btn" aria-label="View more">${Icons.chevronRight}</button>
        </div>
        <div class="nearby-subtitle">Across 8 Nearby Shops</div>
        <div class="demand-list">
          ${demands.map(d => Components.renderDemandItem(d)).join('')}
        </div>
      </div>`;
  },

  renderMapSection() {
    return `
      <div class="map-section" role="img" aria-label="Live network view map showing Mumbai area">
        <div class="map-placeholder">
          <svg class="map-svg-bg" viewBox="0 0 1060 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <rect width="1060" height="220" fill="#dde8f0"/>
            <path d="M0 60 Q100 40 200 55 Q300 70 400 50 Q500 30 600 60 Q700 90 800 70 Q900 50 1000 65 L1060 60 L1060 220 L0 220Z" fill="#e8eff5"/>
            <path d="M0 90 Q150 75 300 88 Q450 102 600 85 Q750 68 900 80 Q1000 90 1060 80 L1060 220 L0 220Z" fill="#edf2f7"/>
            <path d="M0 140 Q200 130 400 145 Q600 160 800 140 Q1000 120 1060 135" stroke="#d4d9df" stroke-width="2" fill="none"/>
            <path d="M300 220 Q380 180 420 140 Q460 100 500 60" stroke="#d4d9df" stroke-width="1.5" fill="none"/>
            <path d="M600 220 Q640 180 660 140 Q680 100 700 60" stroke="#d4d9df" stroke-width="1.5" fill="none"/>
            <text x="540" y="145" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" font-weight="600" fill="#b8c4cc" opacity="0.7">Mumbai</text>
            <text x="540" y="168" text-anchor="middle" font-family="serif" font-size="14" fill="#b8c4cc" opacity="0.5">मुंबई</text>
            <text x="300" y="90" text-anchor="middle" font-family="Inter, sans-serif" font-size="10" fill="#b8c4cc" opacity="0.6">BYCULLA</text>
            <text x="780" y="65" text-anchor="middle" font-family="Inter, sans-serif" font-size="8" fill="#b8c4cc" opacity="0.5">Veermata Jijabai Bhosale</text>
            <text x="780" y="76" text-anchor="middle" font-family="Inter, sans-serif" font-size="8" fill="#b8c4cc" opacity="0.5">Botanical Udyan and Zoo</text>
            <text x="960" y="110" text-anchor="middle" font-family="Inter, sans-serif" font-size="9" fill="#b8c4cc" opacity="0.5">Elephanta Caves</text>
          </svg>
          <div class="map-pulse blue"></div>
          <div class="map-dot blue" title="Your location"></div>
          <div class="map-pulse green"></div>
          <div class="map-dot green" title="Demand node"></div>
          <div class="map-label-overlay">
            <h4>Live Network View</h4>
            <p>Showing active demand nodes in your vicinity.</p>
          </div>
        </div>
      </div>`;
  },

  renderTransferRow(transfer) {
    const typeIcon = transfer.type === 'outgoing' ? Icons.arrowOutgoing : Icons.arrowIncoming;
    return `
      <tr>
        <td class="text-secondary" style="white-space:nowrap">${transfer.date}</td>
        <td>
          <div class="item-detail-name">${transfer.itemName}</div>
          <div class="item-detail-category">${transfer.itemCategory}</div>
        </td>
        <td>
          <div class="partner-cell">
            <div class="partner-avatar" style="background:${transfer.partnerColor}">${transfer.partnerInitials}</div>
            <span class="font-semibold">${transfer.partner}</span>
          </div>
        </td>
        <td>
          <span class="type-badge ${transfer.type}">${typeIcon} ${transfer.typeLabel}</span>
        </td>
        <td>
          <div class="weight-qty-primary">${transfer.weight}</div>
          <div class="weight-qty-price">${transfer.price}</div>
        </td>
        <td><span class="status-badge ${transfer.statusType}">${transfer.status}</span></td>
        <td>
          <button class="more-btn" aria-label="More options for ${transfer.itemName}">${Icons.moreVertical}</button>
        </td>
      </tr>`;
  },

  renderTransfersTable(transfers) {
    return `
      <div class="card transfers-card" role="region" aria-label="Recent impactful transfers">
        <div class="transfers-header">
          <h2 class="transfers-title">Recent Impactful Transfers</h2>
          <a href="#" class="view-all-link">View All Records</a>
        </div>
        <div class="table-wrapper">
          <table class="data-table" role="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Item Detail</th>
                <th scope="col">Partner</th>
                <th scope="col">Type</th>
                <th scope="col">Weight/Qty</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              ${transfers.map(t => Components.renderTransferRow(t)).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  },

  renderLoading() {
    return `
      <div class="stats-grid">
        ${Array(4).fill(0).map(() => `
          <div class="skeleton-card">
            <div class="skeleton skeleton-line w-60"></div>
            <div class="skeleton skeleton-value"></div>
            <div class="skeleton skeleton-line w-40"></div>
          </div>`).join('')}
      </div>
      <div class="middle-grid">
        <div class="card attention-card">
          <div class="skeleton skeleton-line w-60" style="height:16px;margin-bottom:16px"></div>
          <div class="products-grid">
            ${Array(3).fill(0).map(() => `
              <div class="skeleton-card">
                <div class="skeleton skeleton-line w-80"></div>
                <div class="skeleton skeleton-value"></div>
                <div class="skeleton skeleton-line w-60"></div>
              </div>`).join('')}
          </div>
        </div>
        <div class="card nearby-card">
          <div class="skeleton skeleton-line w-60" style="height:16px;margin-bottom:16px"></div>
          ${Array(2).fill(0).map(() => `<div class="skeleton-card" style="margin-bottom:10px"><div class="skeleton skeleton-line w-80"></div></div>`).join('')}
        </div>
      </div>`;
  }
};

/* ── APP ────────────────────────────────────────────────── */
class Dashboard {
  constructor() { this.data = null; this.init(); }

  async init() {
    this.renderShell();
    this.showLoading();
    await this.loadData();
    this.renderContent();
    this.bindEvents();
  }

  async loadData() {
    await new Promise(r => setTimeout(r, 800));
    this.data = MOCK_DATA;
  }

  renderShell() {
    document.getElementById('app').innerHTML = `
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">${Icons.menu}</button>
      <div class="sidebar-overlay" id="sidebarOverlay"></div>
      ${Components.renderSidebar(MOCK_DATA.navItems)}
      <div class="main-wrapper">
        ${Components.renderTopbar()}
        <main class="page-content" id="pageContent" role="main">
          <div id="dynamicContent"></div>
        </main>
      </div>`;
  }

  showLoading() {
    document.getElementById('dynamicContent').innerHTML = `
      <div class="page-header">
        <div class="page-header-left">
          <div class="skeleton skeleton-line w-60" style="height:24px;margin-bottom:8px;"></div>
          <div class="skeleton skeleton-line w-80" style="height:14px;"></div>
        </div>
      </div>
      ${Components.renderLoading()}`;
  }

  renderContent() {
    const { user, stats, attentionProducts, nearbyDemands, recentTransfers } = this.data;
    const content = document.getElementById('dynamicContent');
    content.innerHTML = `
      ${Components.renderPageHeader(user)}
      <div class="stats-grid" role="list" aria-label="Key metrics">
        ${stats.map(s => Components.renderStatCard(s)).join('')}
      </div>
      <div class="middle-grid">
        ${Components.renderAttentionSection(attentionProducts)}
        ${Components.renderNearbyDemands(nearbyDemands)}
      </div>
      ${Components.renderMapSection()}
      ${Components.renderTransfersTable(recentTransfers)}`;

    requestAnimationFrame(() => {
      content.querySelectorAll('.stat-card, .card, .map-section').forEach((el, i) => {
        el.style.cssText += `opacity:0;transform:translateY(12px);transition:opacity .35s ease ${i * 0.06}s,transform .35s ease ${i * 0.06}s`;
        requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
      });
    });
  }

  bindEvents() {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => this.handleNavClick(item));
      item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.handleNavClick(item); } });
    });

    document.addEventListener('click', e => {
      if (e.target.classList.contains('transfer-btn')) this.handleTransferClick(e.target);
      if (e.target.closest('.btn-outline')) this.showToast('Exporting list…', 'info');
      if (e.target.closest('.btn-primary')) this.showToast('Add product form coming soon', 'info');
      if (e.target.closest('.more-btn')) this.handleMoreClick(e.target.closest('.more-btn'));
    });

    document.querySelector('.notif-btn')?.addEventListener('click', () => this.showToast('No new notifications', 'info'));

    const mobileBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('sidebarOverlay');
    mobileBtn?.addEventListener('click', () => this.toggleSidebar(true));
    overlay?.addEventListener('click', () => this.toggleSidebar(false));
  }

  handleNavClick(item) {
    document.querySelectorAll('.nav-item').forEach(n => { n.classList.remove('active'); n.setAttribute('aria-current', 'false'); });
    item.classList.add('active');
    item.setAttribute('aria-current', 'page');
    const label = item.querySelector('span:last-child')?.textContent || 'page';
    this.showToast(`Navigating to ${label}`, 'info');
    if (window.innerWidth <= 768) this.toggleSidebar(false);
  }

  handleTransferClick(btn) {
    const name = btn.closest('.product-card')?.querySelector('.product-name')?.textContent;
    btn.textContent = '✓ REQUEST SENT';
    btn.style.cssText += 'background:#16A34A;color:white;border-color:#16A34A;';
    btn.disabled = true;
    this.showToast(`Transfer request sent for ${name}`, 'success');
  }

  handleMoreClick(btn) {
    const existing = document.querySelector('.row-menu');
    if (existing) { existing.remove(); if (existing._anchor === btn) return; }
    const menu = document.createElement('div');
    menu.className = 'row-menu';
    menu._anchor = btn;
    Object.assign(menu.style, {
      position:'fixed', background:'white',
      border:'1px solid #E5E7EB', borderRadius:'8px',
      boxShadow:'0 4px 16px rgba(0,0,0,0.12)',
      zIndex:'500', minWidth:'140px', overflow:'hidden',
      fontFamily:'Inter,sans-serif', fontSize:'14px'
    });
    const items = ['View Details','Edit Transfer','Cancel Transfer'];
    items.forEach((label, i) => {
      const el = document.createElement('button');
      el.textContent = label;
      Object.assign(el.style, {
        display:'block', width:'100%', padding:'10px 16px',
        textAlign:'left', border:'none', background:'none',
        cursor:'pointer', color: i === 2 ? '#DC2626' : '#1A1A2E',
        fontFamily:'inherit', fontSize:'inherit',
        borderBottom: i < items.length - 1 ? '1px solid #F3F4F6' : 'none'
      });
      el.addEventListener('mouseenter', () => el.style.background = '#F9FAFB');
      el.addEventListener('mouseleave', () => el.style.background = 'none');
      el.addEventListener('click', () => { this.showToast(label, 'info'); menu.remove(); });
      menu.appendChild(el);
    });
    document.body.appendChild(menu);
    const rect = btn.getBoundingClientRect();
    menu.style.top  = (rect.bottom + 4) + 'px';
    menu.style.left = Math.min(rect.left - 100, window.innerWidth - 160) + 'px';
    setTimeout(() => document.addEventListener('click', () => menu.remove(), { once: true }), 0);
  }

  toggleSidebar(open) {
    document.getElementById('sidebar')?.classList.toggle('open', open);
    document.getElementById('sidebarOverlay')?.classList.toggle('visible', open);
  }

  showToast(message, type = 'info') {
    document.querySelector('.toast')?.remove();
    const colors = {
      success: { bg: '#F0FDF4', border: '#86EFAC', text: '#166534' },
      info:    { bg: '#EFF6FF', border: '#93C5FD', text: '#1D4ED8' },
      error:   { bg: '#FEF2F2', border: '#FCA5A5', text: '#B91C1C' }
    };
    const c = colors[type] || colors.info;
    const toast = Object.assign(document.createElement('div'), { className: 'toast', role: 'alert', textContent: message });
    toast.setAttribute('aria-live', 'polite');
    Object.assign(toast.style, {
      position:'fixed', bottom:'24px', right:'24px',
      background: c.bg, border:`1px solid ${c.border}`, color: c.text,
      padding:'12px 18px', borderRadius:'10px',
      fontSize:'14px', fontWeight:'600', fontFamily:'Inter, sans-serif',
      boxShadow:'0 4px 16px rgba(0,0,0,0.12)', zIndex:'1000',
      transform:'translateY(20px)', opacity:'0', transition:'all .25s ease', maxWidth:'320px'
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.transform = 'translateY(0)'; toast.style.opacity = '1'; });
    setTimeout(() => {
      toast.style.transform = 'translateY(20px)'; toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
}

document.addEventListener('DOMContentLoaded', () => { window.dashboardApp = new Dashboard(); });
