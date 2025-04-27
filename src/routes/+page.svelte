<script>
  const cards = [
    {
      title: "Presentations",
      image: "presentation.jpeg",
      comments: "Presentation templates",
      url: "presentations_index?slide=slide0",
    },

    {
      title: "The Editor",
      image: "magic.jpeg",
      comments: "Edit presentations",
      url: "editor",
    },
    {
      title: "The Player",
      image: "player.jpeg",
      comments: "Play presentations",
      url: "player",
    },
  ];
</script>

<div class="bg-gray-800 text-white p-0 m-0">
  <h1
    class="text-4xl font-bold text-center py-4 shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 rounded-lg m-0 pt-4 mb-20"
  >
    Taleem App
  </h1>

  <div class="flex flex-wrap justify-center gap-4 p-4">
    {#each cards as card}
      <a href={card.url}>
        <div
          class="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 w-64 shadow-red-600 hover:shadow-green-500 cursor-pointer"
        >
          <img
            src={"./app/" + card.image}
            alt={card.title}
            class="rounded-md mb-2 mx-auto"
          />

          <h2 class="text-lg font-semibold text-center mb-1">{card.title}</h2>

          <p class="text-sm text-gray-400 text-center">{card.comments}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
