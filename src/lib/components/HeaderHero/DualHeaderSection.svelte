<script lang="ts">
  type IconType = "arrow-down" | "plus";
  type BackgroundColor = "white" | "black";

  const {
    title,
    subtitle,
    backgroundColor = "white",
    imageUrl,
    iconType,
    imageAlt = "",
  } = $props<{
    title: string;
    subtitle?: string;
    backgroundColor?: BackgroundColor;
    imageUrl?: string;
    iconType?: IconType;
    imageAlt?: string;
  }>();

  // Determine text colors based on background
  const textColor =
    backgroundColor === "white" ? "text-text-on-green" : "text-text-primary";
  const subtitleColor =
    backgroundColor === "white" ? "text-text-muted" : "text-text-secondary";
  const bgClass = backgroundColor === "white" ? "bg-white" : "bg-black";
</script>

<section
  class="p-16 flex flex-row flex-nowrap h-[210px] items-center {bgClass}"
>
  <!-- Left Content Container (2/3) -->
  <div class="flex w-2/3 flex-col gap-x-10">
    <!-- Title and Subtitle -->
    <div class="flex flex-col gap-y-4">
      <h2 class="text-4xl uppercase font-bold {textColor} tracking-wide">
        {title}
      </h2>
      {#if subtitle}
        <span
          class="text-lg tracking-widest {subtitleColor} uppercase font-bold"
        >
          {subtitle}
        </span>
      {/if}
    </div>
  </div>

  <!-- Right Content Container (1/3) -->
  <div class="flex w-1/3 items-center justify-end">
    {#if imageUrl}
      <!-- Image Display -->
      <img src={imageUrl} alt={imageAlt} class="h-20" />
    {:else if iconType}
      <!-- Icon Display -->
      <div
        class="w-24 h-24 bg-black rounded-full flex items-center justify-center border cursor-pointer hover:border-primary-dark transition-colors duration-200"
      >
        {#if iconType === "arrow-down"}
          <!-- Arrow Down Icon -->
          <svg
            class="w-7 h-7 text-primary-green-muted"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M5 8h14l-7 11z" />
          </svg>
        {:else if iconType === "plus"}
          <!-- Plus Icon -->
          <svg
            class="w-10 h-10 text-primary font-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        {/if}
      </div>
    {/if}
  </div>
</section>
