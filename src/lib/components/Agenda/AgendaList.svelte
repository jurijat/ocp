<script lang="ts">
  import AgendaSection from "./AgendaSection.svelte";
  import AgendaItemCard from "./AgendaItemCard.svelte";

  interface Speaker {
    name: string;
    company: string;
    avatar?: string;
  }

  interface AgendaItem {
    id: string;
    time: string;
    category: string;
    title: string;
    speakers?: Speaker[];
    badge?: string;
    icon?: string;
    disableHover?: boolean;
  }

  interface Section {
    id: string;
    title: string;
    timeRange?: string;
    items: AgendaItem[];
  }

  const { sections = [] } = $props<{ sections?: Section[] }>();

  /**
   * Calculate percentage widths for two blocks based on their title lengths
   */
  function calculateBlockPercents(
    title1: string,
    title2: string,
    bonus: number = 1.15
  ): { width1: string; width2: string } {
    // Treat "TBD" as if it were longer to give it more width
    const length1 = title1 === "TBD" ? 20 : title1.length;
    const length2 = title2 === "TBD" ? 20 : title2.length;

    // Compute the "weight" of each title using the square root
    let weight1 = Math.sqrt(length1);
    let weight2 = Math.sqrt(length2);

    // Apply bonus to the longer block
    if (weight1 > weight2) weight1 *= bonus;
    else if (weight2 > weight1) weight2 *= bonus;

    // Normalize and convert to percentage, rounded to 0.1%
    const totalWeight = weight1 + weight2;
    const width1 = Math.round((weight1 / totalWeight) * 1000) / 10;
    const width2 = Math.round((100 - width1) * 10) / 10;

    return { width1: width1 + "%", width2: width2 + "%" };
  }

  /**
   * Calculate percentage widths for three blocks based on their title lengths
   */
  function calculateThreeBlockPercents(
    title1: string,
    title2: string,
    title3: string,
    bonus: number = 1.15
  ): { width1: string; width2: string; width3: string } {
    // Treat "TBD" as if it were longer to give it more width
    const length1 = title1 === "TBD" ? 20 : title1.length;
    const length2 = title2 === "TBD" ? 20 : title2.length;
    const length3 = title3 === "TBD" ? 20 : title3.length;

    // Compute the "weight" of each title using the square root
    let weight1 = Math.sqrt(length1);
    let weight2 = Math.sqrt(length2);
    let weight3 = Math.sqrt(length3);

    // Find the maximum weight
    const maxWeight = Math.max(weight1, weight2, weight3);

    // Apply bonus to the longest block
    if (weight1 === maxWeight) weight1 *= bonus;
    else if (weight2 === maxWeight) weight2 *= bonus;
    else if (weight3 === maxWeight) weight3 *= bonus;

    // Normalize and convert to percentage, rounded to 0.1%
    const totalWeight = weight1 + weight2 + weight3;
    const width1 = Math.round((weight1 / totalWeight) * 1000) / 10;
    const width2 = Math.round((weight2 / totalWeight) * 1000) / 10;
    const width3 = Math.round((100 - width1 - width2) * 10) / 10;

    return { width1: width1 + "%", width2: width2 + "%", width3: width3 + "%" };
  }

  /**
   * Chunk array into pairs
   */
  function chunkIntoPairs<T>(array: T[]): T[][] {
    const pairs: T[][] = [];
    for (let i = 0; i < array.length; i += 2) {
      pairs.push(array.slice(i, i + 2));
    }
    return pairs;
  }
</script>

<section class="bg-bg-dark text-text-primary">
  <div class="flex flex-col gap-spacing-3xl">
    {#each sections as section, sectionIndex (section.id)}
      <div class="flex flex-col">
        <!-- Section Header -->
        <AgendaSection
          title={section.title}
          timeRange={section.timeRange}
          activeBorder={sectionIndex === 0}
        />

        <!-- Agenda Items with Dynamic Widths -->
        {#if sectionIndex === 0 && section.items.length >= 3}
          <!-- First section: 3 items in one row -->
          {@const widths = calculateThreeBlockPercents(
            section.items[0].title,
            section.items[1].title,
            section.items[2].title
          )}
          <div
            class="flex flex-col md:flex-row w-full h-auto tablet:h-[252px] desktop:h-[490px]"
          >
            <div
              class="three-item-1"
              style="--width-desktop-xxl: {widths.width1};"
            >
              <AgendaItemCard
                item={section.items[0]}
                disableHover={section.items[0].disableHover}
              />
            </div>
            <div
              class="three-item-2"
              style="--width-desktop-xxl: {widths.width2};"
            >
              <AgendaItemCard
                item={section.items[1]}
                disableHover={section.items[1].disableHover}
              />
            </div>
            <div
              class="three-item-3"
              style="--width-desktop-xxl: {widths.width3};"
            >
              <AgendaItemCard
                item={section.items[2]}
                isLastInRow={true}
                disableHover={section.items[2].disableHover}
              />
            </div>
          </div>
          <!-- Remaining items from first section as pairs -->
          {#if section.items.length > 3}
            <div class="flex flex-col gap-spacing-lg mt-spacing-lg">
              {#each chunkIntoPairs<AgendaItem>(section.items.slice(3)) as pair}
                {#if pair.length === 2}
                  {@const widths = calculateBlockPercents(
                    pair[0].title,
                    pair[1].title
                  )}
                  <div
                    class="flex flex-col md:flex-row gap-spacing-lg w-full h-auto tablet:h-[252px] desktop:h-[490px] pair-container"
                  >
                    <div
                      class="pair-item-1"
                      style="--width-desktop-xxl: {widths.width1};"
                    >
                      <AgendaItemCard
                        item={pair[0]}
                        disableHover={pair[0].disableHover}
                      />
                    </div>
                    <div
                      class="pair-item-2"
                      style="--width-desktop-xxl: {widths.width2};"
                    >
                      <AgendaItemCard
                        item={pair[1]}
                        isLastInRow={true}
                        disableHover={pair[1].disableHover}
                      />
                    </div>
                  </div>
                {:else}
                  <div class="w-full">
                    <AgendaItemCard
                      item={pair[0]}
                      isLastInRow={true}
                      disableHover={pair[0].disableHover}
                    />
                  </div>
                {/if}
              {/each}
            </div>
          {/if}
        {:else}
          <!-- Other sections: pairs layout -->
          <div class="flex flex-col gap-spacing-lg">
            {#each chunkIntoPairs<AgendaItem>(section.items) as pair}
              {#if pair.length === 2}
                {@const widths = calculateBlockPercents(
                  pair[0].title,
                  pair[1].title
                )}
                <!-- Pair of items with calculated widths -->
                <div
                  class="flex flex-col md:flex-row gap-spacing-lg w-full h-auto tablet:h-[252px] desktop:h-[490px] pair-container"
                >
                  <div
                    class="pair-item-1"
                    style="--width-desktop-xxl: {widths.width1};"
                  >
                    <AgendaItemCard
                      item={pair[0]}
                      disableHover={pair[0].disableHover}
                    />
                  </div>
                  <div
                    class="pair-item-2"
                    style="--width-desktop-xxl: {widths.width2};"
                  >
                    <AgendaItemCard
                      item={pair[1]}
                      isLastInRow={true}
                      disableHover={pair[1].disableHover}
                    />
                  </div>
                </div>
              {:else}
                <!-- Single item (odd number) -->
                <div class="w-full">
                  <AgendaItemCard
                    item={pair[0]}
                    isLastInRow={true}
                    disableHover={pair[0].disableHover}
                  />
                </div>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  .pair-item-1,
  .pair-item-2,
  .three-item-1,
  .three-item-2,
  .three-item-3 {
    width: 100%;
  }

  @media (min-width: 768px) {
    .pair-item-1,
    .pair-item-2,
    .three-item-1,
    .three-item-2,
    .three-item-3 {
      width: var(--width-desktop-xxl);
    }
  }
</style>
