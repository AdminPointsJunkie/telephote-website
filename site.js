const tabs = [...document.querySelectorAll('[role="tab"]')];
function choose(tab, focus = false) {
  for (const item of tabs) {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  }
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => choose(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') next = tabs[(index + 1) % tabs.length];
    if (event.key === 'Home') next = tabs[0];
    if (event.key === 'End') next = tabs[tabs.length - 1];
    if (next) { event.preventDefault(); choose(next, true); }
  });
});

async function showDownloadCount(){const node=document.querySelector('[data-download-count]');if(!node)return;try{let count=0;for(let page=1;page<=10;page++){const response=await fetch('https://api.github.com/repos/AdminPointsJunkie/telephote-website/releases?per_page=100&page='+page,{signal:AbortSignal.timeout(8000)});if(!response.ok)throw Error('Unavailable');const releases=await response.json();for(const release of releases){if(release.draft)continue;for(const asset of release.assets??[]){if(/^Telephote-(?:[0-9.]+-portable-x64\.zip|Android-Test-x64\.zip|[0-9.]+-linux\.[0-9]+-linux-x64\.tar\.gz)$/.test(asset.name))count+=asset.download_count??0;}}if(releases.length<100)break;}node.textContent=count.toLocaleString()+' app downloads';}catch{node.textContent='Download count temporarily unavailable';}}
showDownloadCount();
