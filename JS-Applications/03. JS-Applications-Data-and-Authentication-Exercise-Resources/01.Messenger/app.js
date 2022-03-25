function attachEvents() {
  const btnSubmit = document.querySelector("#submit");
  const btnRefresh = document.querySelector("#refresh");

  const url = "http://localhost:3030/jsonstore/messenger";
  const messages = document.querySelector("#messages");

  btnSubmit.addEventListener("click", post);
  btnRefresh.addEventListener("click", refresh);

  async function post() {
    const author = document.querySelector("#author");
    const content = document.querySelector("#content");

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ author: author.value, content: content.value }),
    });
    return await res.json();
  }
  async function refresh() {
    const res = await fetch(url);
    const data = await res.json();
    messages.textContent = Object.values(data)
      .map(({ author, content }) => `${author}: ${content}`)
      .join("\n");
  }
}

attachEvents();
