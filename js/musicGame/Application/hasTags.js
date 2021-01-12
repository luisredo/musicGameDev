export function hasTags(allTags, mustHaveTags) {
    var mustHaveTagsCount = mustHaveTags.length;
    for (let i = 0; i < mustHaveTagsCount; i++) {
      if (!allTags.includes(mustHaveTags[i])) return false;
    }
    return true;
  }