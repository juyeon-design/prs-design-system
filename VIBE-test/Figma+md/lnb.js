/**
 * PRS 공통 LNB
 * 사용법: renderLNB('docs') | renderLNB('issues') | renderLNB('home') | renderLNB('settings')
 */

const LNB_CSS = `
  .lnb{width:220px;min-width:220px;background:#fff;border-right:1px solid #dfdfdf;display:flex;flex-direction:column;height:100vh;overflow-y:auto;flex-shrink:0;z-index:10;}
  .lnb-inner{display:flex;flex:1;flex-direction:column;min-height:0;}
  /* Brand */
  .lnb-brand{display:flex;align-items:center;gap:12px;padding:8px 4px 8px 8px;margin:10px;border-radius:6px;cursor:pointer;}
  .lnb-brand:hover{background:#f5f5f5;}
  .brand-logo{width:32px;height:32px;border-radius:7px;background:#000;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;box-shadow:inset -0.25px -0.25px 0.25px rgba(0,0,0,0.1),inset 0.25px 0.25px 0.25px rgba(255,255,255,0.3);}
  .brand-logo img{width:32px;height:32px;object-fit:cover;}
  .brand-text{flex:1;font-size:16px;font-weight:600;line-height:24px;color:#343434;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .brand-bell{position:relative;width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:6px;flex-shrink:0;}
  .bell-badge-dot{position:absolute;top:4px;right:4px;width:6px;height:6px;border-radius:50%;background:#fd493f;border:1.5px solid #fff;}
  /* Home */
  .lnb-home{padding:0 10px;}
  .lnb-home-item{display:flex;align-items:center;gap:6px;padding:6px;border-radius:6px;cursor:pointer;font-size:14px;font-weight:600;line-height:20px;color:#343434;opacity:.8;}
  .lnb-home-item:hover{background:#f5f5f5;opacity:1;}
  .lnb-home-item.active{background:#f2f1fe;opacity:1;color:#6358d5;}
  /* Divider */
  .lnb-divider{border:none;border-top:1px solid #eaeaea;margin:8px 0;}
  /* Projects */
  .lnb-projects{flex:1;overflow-y:auto;padding:0 10px;display:flex;flex-direction:column;gap:4px;}
  .lnb-proj-header{display:flex;align-items:center;gap:12px;padding:8px 4px 8px 8px;border-radius:6px;cursor:pointer;}
  .lnb-proj-header:hover{background:#f5f5f5;}
  .proj-badge{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;color:#fff;flex-shrink:0;background:#6f64dd;}
  .proj-header-name{flex:1;font-size:16px;font-weight:600;color:#343434;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  /* Sub items */
  .lnb-sub-item{display:flex;align-items:center;gap:6px;padding:6px;border-radius:6px;cursor:pointer;font-size:14px;font-weight:600;line-height:20px;color:#343434;opacity:.8;text-decoration:none;transition:background .12s;font-family:inherit;}
  .lnb-sub-item:hover{background:#f5f5f5;opacity:1;}
  .lnb-sub-item.active{background:#f2f1fe;opacity:1;color:#6358d5;}
  .lnb-sub-item.active svg{color:#6358d5;}
  /* User */
  .lnb-user{border-top:1px solid #eaeaea;padding:10px 14px;display:flex;align-items:center;gap:12px;cursor:pointer;flex-shrink:0;}
  .lnb-user:hover{background:#f5f5f5;}
  .user-photo{width:24px;height:24px;border-radius:50%;overflow:hidden;flex-shrink:0;border:0.75px solid #d2d2d2;}
  .user-photo>*{width:100%;height:100%;}
  .user-info{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;}
  .user-name{font-size:12px;font-weight:500;line-height:16px;color:#333436;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .user-email{font-size:12px;font-weight:500;line-height:16px;color:#838486;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
  .user-more{width:20px;height:20px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
`;

const LOGO_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA7lJREFUeAHtm89KG1EUxr+ZKiHBxBGKBK04iBBaEEchC1emQndqLF224NA+gPoAJWmX3Uh33RT0BUy6LjRJd6WbdCHtwpIU2q6KmUQXBpuk9yRNaoKTSeI4f/uDQ+LcyTDnO+fee+bEcOiBjY2NSKVSkc7OzuZPT0/Fcrksnp+fg+M4gb0XYCLsvhSv16vQq8/nU6rVqiIIQiYQCGSTyWQaV2F9fT22tLRUmJmZqbGL19gh29jo6GhtfHw8t7i4KKNfWMSllZWVXDAYtJXTakZCsFcRvcCivklRHx4ebo2DvRhlsN/v34SW85Ik2capAW3zUudZ2ovhcNguTlzFCsykpt98802pVEodHh7CBdCulWg7sra2Jk9NTdkpinpYvCUArfg2uOHrmArA6upqxIXRb1qEZ9WcxOY/XIrEs1J2uVgswqXM88fHx6bW8iYj0hRwtwDsCc/NAsDtGSAMDfo8z0pnRKPRrucoioKdnR30dUeCgN3dXdXx/f19pNNp6ISAUCg00B4aj8drWuRyub6vG4lEul5TlmVdawEeFoMyy0gsJ4DWtNIbSwnA0huiKMJILCVALBaD0VhGAHLe6OgTlhCAteHAdhWYgekCkPOpVApmYaoAtOWR81T8mIUpAjSrvUQiYarzxBAMhJzd2trC9va26Y43MUwASneKuNUwbApYJeKdWK4UNpr/AsDlWEYAap6QGY0lBKAOz8LCArLZLIzG0DrgIhRtam8lk0k9W1x9Y6gA+Xy+7mwmk6k7bkbKd2KYAHt7e3WzGo7cBbiJQM/nmrYG6A0X8IB/KIF7xMzvqR+rvvmM6qsPqP1Q//LXEQKQ8zdePwAXutl2nI/eBheeROXJgaoIjpgCHEW+w/nWGJsON57fU/2sIwTgo3e6jlMWqK0LzsiACb/2OZMOFgAnZQyKIwSoffnV/QS2AFY/fr90yBECVJ6+7ZoFFbYVquGMDPhZwu/HByzSJ+0DTJTKi/f1ekANbnZ2tnB0dNR3v4paXL20uaj+1/OaWo/NXPhWa8WvvfuKWvf1QcHc3FwOOn7fbjPLub0jpJAAebgXhfd6vd/gXor8yMiI8X0o65DmfT5flhlcSiP409PT9K/jdlq9ddkByPf6LuDxeF7CfTxr+2tsbIwUsUPkdIs+0aoD2DpwH1QZuYO7lx4NBoMy7BXJQUyGBrIFbvI6rIAenG8iojFP7OKcluVw4beC/SDD3kJQ1ONd/AOH3oigoeAyGj887DQzUfBv8c7/tU9oFDlprQ//AbpDswuHeDl3AAAAAElFTkSuQmCC';

const MENU_ITEMS = [
  {
    id: 'home',
    href: 'prototype-project-home.html',
    label: '프로젝트 홈',
    icon: `<svg width="24" height="24" viewBox="-4.150 -5.150 24 24" fill="none"><path d="M13.05 13.7H2.65C1.19 13.7 0 12.51 0 11.05V2.65C0 1.19 1.19 0 2.65 0H4.7C5.32 0 5.92.22 6.395.615L8.66 2.5H13.055C14.515 2.5 15.705 3.69 15.705 5.15V11.05C15.705 12.51 14.515 13.7 13.055 13.7H13.05ZM2.65 1.7C2.125 1.7 1.7 2.125 1.7 2.65V11.05C1.7 11.575 2.125 12 2.65 12H13.05C13.575 12 14 11.575 14 11.05V5.15C14 4.625 13.575 4.2 13.05 4.2H8.35C8.15 4.2 7.96 4.13 7.805 4.005L5.305 1.92C5.135 1.78 4.92 1.7 4.695 1.7H2.645H2.65Z" fill="currentColor"/></svg>`,
  },
  {
    id: 'docs',
    href: 'prs-docs.html',
    label: '기획 문서',
    icon: `<svg width="24" height="24" viewBox="-5.150 -4.150 24 24" fill="none"><path d="M13.685 4.685C13.67 4.61 13.645 4.545 13.61 4.48C13.6 4.465 13.595 4.445 13.585 4.43C13.55 4.365 13.505 4.305 13.45 4.25L9.45.25C9.395.195 9.335.155 9.27.115C9.11.035 8.985 0 8.85 0H2.65C1.19 0 0 1.19 0 2.65V13.05C0 14.51 1.19 15.7 2.65 15.7H11.05C12.51 15.7 13.7 14.51 13.7 13.05V4.85C13.7 4.795 13.695 4.74 13.685 4.685ZM10.8 4H9.7V2.9L10.8 4ZM11.05 14H2.65C2.125 14 1.7 13.575 1.7 13.05V2.65C1.7 2.125 2.125 1.7 2.65 1.7H8V4.25C8 5.05 8.65 5.7 9.45 5.7H12V13.05C12 13.575 11.575 14 11.05 14Z" fill="currentColor"/><path d="M9.85 7H3.85V8.7H9.85V7Z" fill="currentColor"/><path d="M9.85 10.5H3.85V12.2H9.85V10.5Z" fill="currentColor"/></svg>`,
  },
  {
    id: 'issues',
    href: 'prs-issues.html',
    label: '이슈 목록',
    icon: `<svg width="24" height="24" viewBox="-4.901 -4.901 24 24" fill="none"><path d="M6.145 9.9H6.12C5.755 9.895 5.415 9.74 5.165 9.47L3.23 7.38L4.475 6.225L6.155 8.035L9.755 4.45L10.955 5.655L7.09 9.505C6.835 9.76 6.5 9.895 6.145 9.895V9.9Z" fill="currentColor"/><path d="M11.55 14.2H2.65C1.19 14.2 0 13.01 0 11.55V2.65C0 1.19 1.19 0 2.65 0H11.55C13.01 0 14.2 1.19 14.2 2.65V11.55C14.2 13.01 13.01 14.2 11.55 14.2ZM2.65 1.7C2.125 1.7 1.7 2.125 1.7 2.65V11.55C1.7 12.075 2.125 12.5 2.65 12.5H11.55C12.075 12.5 12.5 12.075 12.5 11.55V2.65C12.5 2.125 12.075 1.7 11.55 1.7H2.65Z" fill="currentColor"/></svg>`,
  },
  {
    id: 'settings',
    href: '#',
    label: '프로젝트 설정',
    icon: `<svg width="24" height="24" viewBox="-4.651 -4.270 24 24" fill="none"><path d="M8.27 15.435H6.425C6.111 15.433 5.806 15.33 5.556 15.141C5.305 14.952 5.122 14.687 5.035 14.385L4.77 13.46C4.702 13.225 4.546 13.024 4.335 12.9C4.138 12.786 3.905 12.754 3.685 12.81L2.72 13.05C2.414 13.124 2.093 13.097 1.804 12.974C1.515 12.85 1.273 12.637 1.115 12.365L0.195 10.77C0.038 10.497 -0.026 10.18 0.012 9.868C0.05 9.555 0.188 9.263 0.405 9.035L1.085 8.34C1.249 8.169 1.34 7.942 1.34 7.705C1.341 7.468 1.25 7.24 1.085 7.07L0.405 6.37C0.187 6.143 0.048 5.85 0.011 5.538C-0.027 5.225 0.037 4.908 0.195 4.635L1.115 3.04C1.273 2.767 1.516 2.553 1.806 2.43C2.097 2.307 2.419 2.283 2.725 2.36L3.645 2.595C3.886 2.656 4.141 2.62 4.355 2.495C4.55 2.387 4.695 2.208 4.76 1.995L5.035 1.05C5.122 0.748 5.304 0.482 5.555 0.293C5.806 0.104 6.111 0.001 6.425 0H8.27C8.585 0.001 8.891 0.103 9.143 0.292C9.394 0.482 9.577 0.748 9.665 1.05L9.935 1.985C9.999 2.213 10.15 2.406 10.355 2.525C10.564 2.656 10.909 2.65 11.02 2.62L11.975 2.385C12.281 2.308 12.604 2.332 12.894 2.455C13.185 2.578 13.427 2.792 13.585 3.065L14.505 4.66C14.661 4.934 14.725 5.251 14.686 5.563C14.647 5.876 14.508 6.168 14.29 6.395L13.615 7.095C13.45 7.265 13.359 7.493 13.36 7.73C13.36 7.967 13.452 8.194 13.615 8.365L14.29 9.06C14.508 9.287 14.647 9.579 14.686 9.892C14.725 10.205 14.661 10.521 14.505 10.795L13.585 12.39C13.427 12.663 13.184 12.877 12.894 13C12.604 13.124 12.281 13.15 11.975 13.075L11.04 12.84C10.801 12.78 10.548 12.816 10.335 12.94C10.144 13.05 10.002 13.229 9.94 13.44L9.665 14.4C9.573 14.699 9.389 14.96 9.138 15.147C8.887 15.333 8.583 15.434 8.27 15.435ZM6.615 13.735H8.08L8.305 12.96C8.487 12.327 8.909 11.789 9.48 11.46C10.076 11.111 10.785 11.009 11.455 11.175L12.205 11.365L12.94 10.095L12.395 9.53C11.924 9.042 11.66 8.391 11.66 7.712C11.66 7.034 11.924 6.383 12.395 5.895L12.94 5.335L12.205 4.065L11.435 4.255C10.779 4.417 10.086 4.318 9.501 3.98C8.917 3.641 8.486 3.089 8.3 2.44L8.08 1.685H6.615L6.395 2.45C6.206 3.083 5.782 3.62 5.21 3.95C4.911 4.125 4.581 4.239 4.237 4.287C3.894 4.334 3.545 4.313 3.21 4.225L2.48 4.04L1.75 5.31L2.295 5.875C2.766 6.362 3.029 7.013 3.029 7.69C3.029 8.367 2.766 9.018 2.295 9.505L1.75 10.07L2.485 11.34L3.265 11.145C3.914 10.982 4.601 11.079 5.18 11.415C5.772 11.757 6.207 12.317 6.39 12.975L6.615 13.735Z" fill="currentColor"/><path d="M7.35 11.056C6.687 11.056 6.04 10.859 5.489 10.491C4.938 10.123 4.509 9.6 4.255 8.987C4.001 8.375 3.935 7.702 4.064 7.052C4.194 6.402 4.513 5.805 4.981 5.337C5.45 4.868 6.047 4.549 6.696 4.42C7.346 4.291 8.02 4.357 8.632 4.611C9.244 4.864 9.767 5.293 10.135 5.844C10.504 6.395 10.7 7.043 10.7 7.705C10.699 8.594 10.345 9.445 9.717 10.073C9.089 10.701 8.238 11.054 7.35 11.056ZM7.35 6.056C7.024 6.056 6.705 6.152 6.433 6.334C6.162 6.515 5.951 6.773 5.826 7.074C5.701 7.376 5.668 7.707 5.732 8.027C5.795 8.347 5.953 8.641 6.183 8.872C6.414 9.103 6.708 9.26 7.028 9.324C7.348 9.387 7.68 9.355 7.981 9.23C8.283 9.105 8.541 8.893 8.722 8.622C8.903 8.351 9 8.032 9 7.705C9 7.268 8.826 6.848 8.517 6.539C8.207 6.229 7.788 6.056 7.35 6.056Z" fill="currentColor"/></svg>`,
  },
];

function renderLNB(activePage) {
  // CSS 주입 (중복 방지)
  if (!document.getElementById('lnb-style')) {
    const style = document.createElement('style');
    style.id = 'lnb-style';
    style.textContent = LNB_CSS;
    document.head.appendChild(style);
  }

  const menuHTML = MENU_ITEMS.map(item => {
    const isActive = item.id === activePage;
    const tag = item.href === '#' ? 'div' : 'a';
    const href = tag === 'a' ? `href="${item.href}"` : '';
    return `<${tag} ${href} class="lnb-sub-item${isActive ? ' active' : ''}">${item.icon}${item.label}</${tag}>`;
  }).join('\n      ');

  const lnbHTML = `
  <div class="lnb-inner">
    <div class="lnb-brand">
      <div class="brand-logo"><img src="${LOGO_BASE64}" /></div>
      <span class="brand-text">PRS</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="flex-shrink:0"><path d="M6 8l4 4 4-4" stroke="#848484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <div class="brand-bell">
        <svg width="24" height="24" viewBox="-5.501 -4.075 24 24" fill="none"><path d="M11.85 11.15V6.5C11.847 5.23 11.393 4.002 10.569 3.036C9.745 2.07 8.604 1.428 7.35 1.225V0H5.65V1.225C4.396 1.428 3.255 2.07 2.431 3.036C1.607 4.002 1.153 5.23 1.15 6.5V11.15H0V12.85H4.15V13.5C4.15 14.123 4.398 14.721 4.838 15.162C5.279 15.602 5.877 15.85 6.5 15.85C7.123 15.85 7.721 15.602 8.162 15.162C8.602 14.721 8.85 14.123 8.85 13.5V12.85H13V11.15H11.85ZM7.15 13.5C7.15 13.672 7.082 13.838 6.96 13.96C6.838 14.082 6.672 14.15 6.5 14.15C6.328 14.15 6.162 14.082 6.04 13.96C5.918 13.838 5.85 13.672 5.85 13.5V12.85H7.15V13.5ZM8 11.15H2.85V6.5C2.85 5.532 3.235 4.604 3.919 3.919C4.604 3.235 5.532 2.85 6.5 2.85C7.468 2.85 8.396 3.235 9.081 3.919C9.765 4.604 10.15 5.532 10.15 6.5V11.15H8Z" fill="#343434"/></svg>
        <span class="bell-badge-dot"></span>
      </div>
    </div>

    <div class="lnb-home">
      <div class="lnb-home-item${activePage === 'lnb-home' ? ' active' : ''}">
        <svg width="24" height="24" viewBox="-4.651 -4.644 24 24" fill="none"><path d="M13.705 4.34L9.005 0.585C8.03-0.195 6.67-0.195 5.695 0.585L0.995 4.34C0.36 4.845 0 5.6 0 6.41V12.055C0 13.515 1.19 14.705 2.65 14.705H12.05C13.51 14.705 14.7 13.515 14.7 12.055V6.41C14.7 5.6 14.335 4.845 13.705 4.34ZM6.45 13.005V10.205H8.25V13.005H6.45ZM13 12.055C13 12.58 12.575 13.005 12.05 13.005H9.95V9.955C9.95 9.155 9.3 8.505 8.5 8.505H6.2C5.4 8.505 4.75 9.155 4.75 9.955V13.005H2.65C2.125 13.005 1.7 12.58 1.7 12.055V6.41C1.7 6.12 1.83 5.85 2.055 5.67L6.755 1.915C6.93 1.775 7.14 1.705 7.35 1.705C7.56 1.705 7.77 1.775 7.945 1.915L12.645 5.67C12.87 5.85 13 6.12 13 6.41V12.055Z" fill="currentColor"/></svg>
        홈
      </div>
    </div>

    <hr class="lnb-divider"/>

    <div class="lnb-projects">
      <div class="lnb-proj-header">
        <div class="proj-badge">P</div>
        <span class="proj-header-name">PRS</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="flex-shrink:0"><path d="M6 8l4 4 4-4" stroke="#848484" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      ${menuHTML}
    </div>
  </div>

  <div class="lnb-user">
    <div class="user-photo">
      <div style="width:100%;height:100%;border-radius:50%;background:#6f64dd;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;">김</div>
    </div>
    <div class="user-info">
      <div class="user-name">김승수</div>
      <div class="user-email">kss0610@midasit.com</div>
    </div>
    <div class="user-more">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="4" cy="10" r="1.5" fill="#848484"/><circle cx="10" cy="10" r="1.5" fill="#848484"/><circle cx="16" cy="10" r="1.5" fill="#848484"/></svg>
    </div>
  </div>
  `;

  const root = document.getElementById('lnb-root');
  if (root) root.innerHTML = lnbHTML;
}
