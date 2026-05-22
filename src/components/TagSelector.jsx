import "../style/TagSelector.css";

function TagSelector({ tags, selectedTags, setSelectedTags }) {
  function handleTagClick(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((item) => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  return (
    <div className="tag-selector">
      <h3 className="tag-title">What did you like?</h3>

      <div className="tags-container">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`tag-btn ${selectedTags.includes(tag) ? "active" : ""}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TagSelector;
