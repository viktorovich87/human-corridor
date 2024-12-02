export const gotToLink = (link: string | URL | undefined, linkType: string) => {
  console.log('linkType', linkType);
  switch(linkType) {
    case 'webSite': return window.open(link, '_blank');
    case 'address': return window.open(`https://www.google.com/maps/place/${link}`, '_blank');
    case 'phone': return document.location.href="tel:"+link;
    default: return '';
  }
}