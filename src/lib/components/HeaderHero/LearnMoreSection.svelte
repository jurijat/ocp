<script lang="ts">
  import { asset } from '$app/paths';
</script>

<section class="p-16 flex flex-row flex-nowrap h-[210px] items-center bg-white">
  <!-- Left Content Container (2/3) -->
  <div class="flex w-2/3 flex-col gap-x-10">
    <!-- Learn More Title -->
    <div class="flex flex-col gap-y-4">
      <h2 class="text-4xl uppercase font-bold text-text-on-green tracking-wide">
        Want to learn more?
      </h2>
      <span class="text-lg tracking-widest text-text-muted uppercase font-bold">
        Checkout Masterclasses by API Master on December 10th
      </span>
    </div>
  </div>
  <div class="flex w-1/3 items-center justify-end">
    <!-- Logo Section -->
    <img src={asset('/images/api_masters.svg')} alt="API Master Logo" class="h-20" />
  </div>
</section>
