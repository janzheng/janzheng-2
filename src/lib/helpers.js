

// if First is higher: > 0
// if Second is higher: < 0
// console.log(compareVersions(1.5, 2));  // Output: -1
// console.log(compareVersions(3, 3));    // Output: 0
// console.log(compareVersions(4.5, 4));  // Output: 0
// console.log(compareVersions(5, 4.2));  // Output: 1
// console.log(compareVersions('1.2.3', '1.2.4'));  // Output: -1
export const compareVersions = (version1, version2) => {
  if (!isNaN(version1) && !isNaN(version2)) {
    // Both version1 and version2 are numbers
    if (version1 > version2) {
      return 1;
    } else if (version1 < version2) {
      return -1;
    } else {
      return 0;
    }
  }

  const v1Parts = version1.split('.').map(Number);
  const v2Parts = version2.split('.').map(Number);

  for (let i = 0; i < 3; i++) {
    if (v1Parts[i] > v2Parts[i]) {
      return 1;
    } else if (v1Parts[i] < v2Parts[i]) {
      return -1;
    }
  }

  return 0;
}



// input is either a valid JSON string of a bunch of \n key:value pairs
export function parseMetadata(metadataInput="key:value") {
  let metadata = {};
  if (!metadataInput || metadataInput.length == 0)
    return {}
    
  if (typeof input === 'string' && metadataInput.trim().startsWith('{')) {
    // Metadata is a JSON string
    metadata = JSON.parse(metadataInput);
  } else if (typeof metadataInput === 'string') {
    // Metadata is a \n separated list of key/val pairs
    metadataInput?.split('\n').forEach(pair => {
      const [key, value] = pair.split(':');
      if (key && value) {
        metadata[key.trim()] = value.trim();
      }
    });
  }
  return metadata;
}


export function getNotionImageLink(notionImage) {
  /* 
    we want rawUrl whenever possible, EXCEPT when it contains "secure.notion-static.com"
  */
  let fileObj = notionImage?.Files?.[0]
  let url = notionImage.Content

  if(!url) fileObj?.rawUrl?.includes("secure.notion-static.com") ? url = fileObj?.url : url = fileObj?.rawUrl;
  if(!url) url = fileObj?.url
  
  return url
}



// export const attendeeDictMap = {
//   // left is the key used in template, e.g. {{name}}
//   // right is the key in the data object, e.g. {{firstName}}
//   "templateKey": "dataKey",
//   "name": "firstName",
//   "email": "emailAddress",

//   // airable fields; overrides previous
//   "ticketId": "TicketId",
//   "name": "Name",
//   "email": "Email",
//   "username": "Username",
//   "profile": "Profile",
//   "registration": "Registration",
//   "status": "Status",
//   "ticketLink": "Access Link",

//   "institution": "Institution",
//   "position": "Position",
//   "country": "Country",
//   "interest": "Research Interest",
//   "intent": "Intent",
//   "role": "Role",
//   "workshops": "Workshops",
//   "contribute": "Contribute",
//   "hiking": "Hiking",
//   "diet": "Diet",
//   "visa": "Visa Letter",

//   "stripeProd": "Stripe Product",
//   "ticketPrice": "Ticket Price",
//   "receiptId": "Receipt ID",

//   "abstract": "Abstract",
//   "abstractId": "AbstractId",
//   "abstractName": "AbstractTitle",
//   "authors": "Authors",
//   "_id": "_id",

//   // evaluated fields
//   hasPaid: "hasPaid",
//   hasRegistered: "hasRegistered",
//   hasAbstract: "hasAbstract",
// }

// export const abstractDictMap = {
//   // left is the key used in template, e.g. {{name}}
//   // right is the key in the data object, e.g. {{firstName}}
//   "email": "Email",
//   "abstractId": "AbstractId",
//   "acceptance": "AcceptanceStatus",
//   "type": "Type",
//   "category": "Category",
//   "title": "Title", // title
//   "authors": "Authors",
//   "affiliations": "Affiliations",
//   "correspondence": "Correspondence",
//   "keywords": "Keywords",
//   "body": "Body",
//   "slug": "Slug",
//   "abstractUrl": "AbstractUrl",
//   "posterUrl": "PosterUrl",
//   "youtube": "Youtube", // flash talk
//   "_id": "_id"
// }

