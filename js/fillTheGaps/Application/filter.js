import { filterView } from "../Infrastructure/filterView.js";
import { FilterContentWithTagsUseCase } from "./FilterContentsWithTagsUseCase.js";
import { selectRandomElementFromArray } from "./selectRandomElementFromArray.js";
export function filter(mustHaveTags) {
    var filterContentWithTagsUseCase = new FilterContentWithTagsUseCase(
      this.#contents
    );
    var filteredArrayObjects = filterContentWithTagsUseCase.execute(
      mustHaveTags
    );
    var splitIndexSelection = selectRandomElementFromArray(
      filteredArrayObjects
    );
    return splitIndexSelection;
  }