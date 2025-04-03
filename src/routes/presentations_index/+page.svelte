<script lang="ts">
  import ProjectToolbar from "../../ProjectToolbar.svelte";

    interface Card {
      title: string;
      comments: string;
      imageUrl: string;
      url: string;
    }
  const imageUrlRoutePath = "/thunbnails_slides/";
  const pathUrl = "/presentations/?presentation=";

    const cards: Card[] = [
   
      {
        title: 'Slide Zero',
        comments: 'First Try.',
        imageUrl: 'slide0.png',
        url: 'slide0'
      },
      {
        title: 'Title 01',
        comments: 'Testing...',
        imageUrl: 'title01.png',
        url: 'title01'
      }
    ];
  </script>
  
<ProjectToolbar />
  <div class="flex flex-wrap gap-6 p-6">
    {#each cards as card}
    <a href={pathUrl + card.url} >
      <div
        class="rounded-lg border border-gray-700 p-4 w-72 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <img
          src={imageUrlRoutePath +card.imageUrl}
          alt={card.title}
          class="rounded-md mb-4 w-full h-40 object-cover"
        />
        <h3 class="text-lg font-semibold mb-2">{card.title}</h3>
        <p class="text-sm text-gray-400">{card.comments}</p>
      </div>
    </a>
    {/each}
  </div>

  <style lang="postcss">
    /* Using Tailwind CSS classes for styling */
    .flex {
      display: flex;
    }
    .flex-wrap {
      flex-wrap: wrap;
    }
    .gap-6 {
      gap: 1.5rem;
    }
    .p-6 {
      padding: 1.5rem;
    }
    .rounded-lg {
      border-radius: 0.5rem;
    }
    .border {
      border-width: 1px;
    }
    .border-gray-700 {
      border-color: rgb(55 65 81);
    }
    .w-72 {
      width: 18rem;
    }
    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    .font-semibold {
      font-weight: 600;
    }
    .mb-2 {
      margin-bottom: 0.5rem;
    }
    .text-sm {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    .text-gray-400 {
      color: rgb(156 163 175);
    }
    .shadow-md {
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .transition-transform {
      transition-property: transform, box-shadow;
      transition-duration: 0.3s;
    }
    .hover\:scale-105:hover {
      transform: scale(1.05);
    }
    .hover\:shadow-lg:hover{
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
  </style>