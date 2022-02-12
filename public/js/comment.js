const newCommentHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#commentDesc').value.trim();
  const post_id = event.target.dataset.attr;

  if (description) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({ description, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment')
  .addEventListener('submit', newCommentHandler);
