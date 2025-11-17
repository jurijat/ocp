<script lang="ts">
  import HeaderHero from "$lib/components/HeaderHero/HeaderHero.svelte";
  import HeaderSection from "$lib/components/HeaderHero/HeaderSection.svelte";
  import LearnMoreSection from "$lib/components/HeaderHero/LearnMoreSection.svelte";
</script>

<svelte:head>
  <title>OpenAPI Conference - Paris 2025</title>
  <meta
    name="description"
    content="Join us at the OpenAPI Conference in Paris. Exclusive masterclasses by API masters on December 11th."
  />
</svelte:head>

<div class="flex items-center justify-center min-h-screen w-full mx-auto">
  <div class="max-w-[1728px] container">
    <HeaderHero />
    <LearnMoreSection />
    <HeaderSection title="AGENDA" />
  </div>
</div>
