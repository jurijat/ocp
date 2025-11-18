<script lang="ts">
  import { asset } from '$app/paths';

  // Previous events images
  const images = [
    {
      id: 1,
      url: asset('/images/hug-1.png'),
      alt: "Previous OpenAPI Conference Event 1",
      height: "h-[310px]",
    },
    {
      id: 2,
      url: asset('/images/hug-2.png'),
      alt: "Previous OpenAPI Conference Event 2",
      height: "h-[420px]",
    },
    {
      id: 3,
      url: asset('/images/hug-3.png'),
      alt: "Previous OpenAPI Conference Event 3",
      height: "h-[320px]",
    },
  ];
</script>

<section class="w-full bg-bg-dark">
  <!-- Image Gallery -->
  <div class="flex flex-col">
    {#each images as image (image.id)}
      <div class="w-full {image.height} overflow-hidden cursor-pointer group">
        <img
          src={image.url}
          alt={image.alt}
          class="w-full h-full object-cover"
        />
      </div>
    {/each}
  </div>

  <!-- Show More Footer -->
  <div
    class="w-full h-[116px] bg-black flex items-center justify-start px-16 cursor-pointer"
  >
    <span class="text-text-muted text-sm uppercase font-bold tracking-widest">
      + Show more
    </span>
  </div>
</section>
