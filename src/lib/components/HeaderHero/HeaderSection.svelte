<script lang="ts">
  const { title } = $props();
</script>

<section class="p-16 flex flex-row flex-nowrap h-64 items-center bg-black">
  <!-- Left Content Container (2/3) -->
  <div class="flex w-2/3 flex-col gap-x-10">
    <!-- Learn More Title -->
    <div class="flex flex-col gap-y-4">
      <h1 class="text-8xl uppercase font-bold text-white tracking-wide">
        {title}
      </h1>
    </div>
  </div>
  <div class="flex w-1/3 items-center justify-end">
    <div
      class="w-24 h-24 bg-black rounded-full flex items-center justify-center border border-primary-green-muted cursor-pointer hover:border-primary-dark transition-colors duration-200"
    >
      <svg
        class="w-7 h-7 text-primary-green-muted"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M5 8h14l-7 11z" />
      </svg>
    </div>
  </div>
</section>
