<script lang="ts">
  import { asset } from "$app/paths";

  const rows = [
    [
      { url: asset("/images/hugs/hug_row_1_1.jpg"), alt: "Event 1" },
      { url: asset("/images/hugs/hug_row_1_2.jpg"), alt: "Event 2" },
      { url: asset("/images/hugs/hug_row_1_3.jpg"), alt: "Event 3" },
      { url: asset("/images/hugs/hug_row_1_4.jpg"), alt: "Event 4" },
    ],
    [
      { url: asset("/images/hugs/hug_row_2_1.jpg"), alt: "Event 5" },
      { url: asset("/images/hugs/hug_row_2_2.jpg"), alt: "Event 6" },
      { url: asset("/images/hugs/hug_row_2_3.jpg"), alt: "Event 7" },
      { url: asset("/images/hugs/hug_row_2_4.jpg"), alt: "Event 8" },
    ],
    [
      { url: asset("/images/hugs/hug_row_3_1.jpg"), alt: "Event 9" },
      { url: asset("/images/hugs/hug_row_3_2.jpg"), alt: "Event 10" },
      { url: asset("/images/hugs/hug_row_3_3.jpg"), alt: "Event 11" },
      { url: asset("/images/hugs/hug_row_3_4.jpg"), alt: "Event 12" },
    ],
  ];

  // Flat array for mobile slider
  const allImages = rows.flat();

  // Current slide index for mobile
  let currentSlide = $state(0);
  let sliderRef: HTMLDivElement;

  function handleScroll() {
    if (sliderRef) {
      const scrollLeft = sliderRef.scrollLeft;
      const slideWidth = sliderRef.clientWidth;
      currentSlide = Math.round(scrollLeft / slideWidth);
    }
  }

  function goToSlide(index: number) {
    if (sliderRef) {
      const slideWidth = sliderRef.clientWidth;
      sliderRef.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    }
  }
</script>

<section class="w-full bg-bg-dark px-2 tablet:px-0">
  <!-- Gallery Container with border -->
  <div class="border border-primary-green-muted rounded-4xl overflow-hidden">
    <!-- Mobile Slider -->
    <div class="tablet:hidden bg-black pt-12">
      <!-- Slider Container -->
      <div
        bind:this={sliderRef}
        onscroll={handleScroll}
        class="flex h-[420px] overflow-x-scroll"
        style="scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; scrollbar-width: none; -ms-overflow-style: none;"
      >
        {#each allImages as image}
          <div class="w-full h-full shrink-0 snap-start flex items-center">
            <img src={image.url} alt={image.alt} class="w-full object-cover" />
          </div>
        {/each}
      </div>

      <!-- Navigation Dots -->
      <div class="flex justify-center items-center gap-3 pt-12 pb-2">
        {#each [0, 1, 2, 3, 4] as dotIndex}
          <button
            type="button"
            onclick={() => goToSlide(dotIndex * 2)}
            class="w-3 h-3 rounded-full transition-colors duration-200"
            style="background-color: {Math.floor(currentSlide / 2) === dotIndex
              ? '#47c552'
              : '#4d7051'};"
            aria-label="Go to slide {dotIndex + 1}"
          ></button>
        {/each}
      </div>
    </div>

    <!-- Tablet/Desktop Grid -->
    <div class="hidden tablet:block">
      {#each rows as row}
        <div class="flex flex-row">
          {#each row as image}
            <div class="w-1/4 aspect-[4/3] overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                class="w-full h-full object-cover"
              />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>
