export function tagsToArrayElements(...mustHaveTags) {
    var numElements = [];
    var contentCount = this.#contents.length;
    for (var p = 0; p < contentCount; p++) {
      var allTags = this.#contents[p].tags[0].tags;
      if (hasTags(allTags, mustHaveTags)) {
        numElements.push(p);
      }
    }
    return numElements;
  }